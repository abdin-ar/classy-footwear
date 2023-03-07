function getAllColors(localData) {
  const allColors = [];
  localData.forEach((item) => {
    item.colors.forEach((color) => {
      allColors.push(color.color);
    });
  });
  const result = [...new Set(allColors)];

  const sortedResult = result.sort();

  const options = [];
  sortedResult.forEach((item) => {
    options.push({ label: item, value: item });
  });

  return { all: sortedResult, options };
}

export default getAllColors;
