import sortData from "./sortData";

function filterData(queryString, dataArray) {
  if (!dataArray) {
    return ["", []];
  }
  if (!queryString) {
    return ["", dataArray];
  }

  let filteredDataArray = dataArray;

  const filters = queryString.split("&");
  const newFilters = {};
  filters.forEach((filter) => {
    const filterDetails = filter.split(":");
    newFilters[filterDetails[0]] = filterDetails[1].split(",");
  });

  if (newFilters.shoesFor) {
    filteredDataArray = filteredDataArray.filter(
      (item) => item.shoesFor.toString() === newFilters.shoesFor[0]
    );
  }
  if (newFilters.type) {
    filteredDataArray = filteredDataArray.filter(
      (item) => item.type.toString() === newFilters.type[0]
    );
  }
  if (newFilters.isNew) {
    filteredDataArray = filteredDataArray.filter(
      (item) => item.isNew.toString() === newFilters.isNew[0]
    );
  }
  if (newFilters.isTrending) {
    filteredDataArray = filteredDataArray.filter(
      (item) => item.isTrending.toString() === newFilters.isTrending[0]
    );
  }
  if (newFilters.isDiscounted) {
    filteredDataArray = filteredDataArray.filter((item) => item.discount > 0);
  }
  if (newFilters.price) {
    filteredDataArray = filteredDataArray.filter((item) => {
      const itemPrice = item.finalPrice;
      return (
        itemPrice >= parseInt(newFilters.price[0]) &&
        itemPrice <= parseInt(newFilters.price[1])
      );
    });
  }
  if (newFilters.colors) {
    filteredDataArray = filteredDataArray.filter((item) => {
      let found = 0;
      newFilters.colors.forEach((filterColor) => {
        found += item.colors.filter((color) => {
          if (!newFilters.sizes) {
            return color.color === filterColor;
          }
          const isSizeFound = findSize(newFilters, color);
          return color.color === filterColor && isSizeFound;
        }).length;
      });
      return found > 0;
    });
  }
  if (!newFilters.colors && newFilters.sizes) {
    filteredDataArray = filteredDataArray.filter((item) => {
      let found = 0;
      found += item.colors.filter((color) => {
        const isSizeFound = findSize(newFilters, color);
        return isSizeFound;
      }).length;

      return found > 0;
    });
  }
  if (newFilters.removeId) {
    newFilters.removeId.forEach((filter) => {
      filteredDataArray = filteredDataArray.filter(
        (item) => item.id !== parseInt(filter)
      );
    });
  }
  if (newFilters.id) {
    const newArray = [];
    newFilters.id.forEach((filter) => {
      const newItem = filteredDataArray.find(
        (item) => item.id === parseInt(filter)
      );

      if (newItem) {
        newArray.push(newItem);
      }
    });
    filteredDataArray = newArray;
  }
  if (newFilters.sort) {
    filteredDataArray = sortData(
      filteredDataArray,
      newFilters.sort[0],
      newFilters.sort[1],
      newFilters.sort[2]
    );
  }
  if (newFilters.startAt) {
    filteredDataArray = filteredDataArray.slice(newFilters.startAt);
  }
  if (newFilters.limit) {
    filteredDataArray = filteredDataArray.slice(undefined, newFilters.limit);
  }

  return filteredDataArray;
}

function findSize(newFilters, color) {
  let found = 0;
  newFilters.sizes.forEach((filterSize) => {
    if (
      color.sizes.filter((size) => size.size === parseInt(filterSize))
        .length !== 0
    ) {
      found++;
    }
  });
  return found > 0;
}

export default filterData;
