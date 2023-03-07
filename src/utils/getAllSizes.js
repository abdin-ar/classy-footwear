function getAllSizes(localData) {
  let allSizes = [];
  localData.forEach((item) => {
    item.colors.forEach((color) => {
      const colorSizes = color.sizes.map((size) => {
        return size.size;
      });
      allSizes = [...allSizes, ...colorSizes];
    });
  });
  const result = [...new Set(allSizes)];

  const sortedResult = result.sort(function (a, b) {
    return a - b;
  });

  const options = [];
  sortedResult.forEach((item) => {
    options.push({ label: item, value: item });
  });

  return { all: sortedResult, options };
}

export default getAllSizes;
