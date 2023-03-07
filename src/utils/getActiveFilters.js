import filtersDefaults from "../data/filtersDefaults";

export default function getActiveFilters(inputFilters) {
  const filters = { ...inputFilters };
  const newFilters = {};
  for (const filter in filters) {
    if (
      JSON.stringify(filters[filter]) ===
      JSON.stringify(filtersDefaults[filter])
    ) {
      delete filters[filter];
    } else {
      if (filter === "type") {
        newFilters[filter] = filters[filter].value;
      } else if (filter === "price") {
        newFilters[filter] = [...filters[filter]];
      } else {
        newFilters[filter] = [];
        filters[filter].forEach((item) => {
          newFilters[filter].push(item.value);
        });
      }
    }
  }

  if (newFilters.tags) {
    newFilters.tags.forEach((tag) => {
      newFilters[tag] = true;
    });
    delete newFilters.tags;
  }
  return newFilters;
}
