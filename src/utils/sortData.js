export default function sortData(
  data,
  sortBy = "finalPrice",
  typeOfSortBy = "number",
  ascORdesc = "asc"
) {
  if (!data) {
    return data;
  }

  if (typeOfSortBy === "number") {
    const result = data.sort(function (a, b) {
      return b[sortBy] - a[sortBy];
    });
    if (ascORdesc === "asc") {
      result.reverse();
    }
    return result;
  }
  if (typeOfSortBy === "string") {
    const result = data.sort(function (a, b) {
      let x = a[sortBy].toLowerCase();
      let y = b[sortBy].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    if (ascORdesc === "desc") {
      result.reverse();
    }
    return result;
  }
  if (typeOfSortBy === "boolean") {
    const result = data.sort(function (a, b) {
      let x = booleanToNumbers(a[sortBy]);
      let y = booleanToNumbers(b[sortBy]);
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    if (ascORdesc === "desc") {
      result.reverse();
    }
    return result;
  }
  return data;
}

function booleanToNumbers(boolean) {
  if (boolean === true) {
    return 1;
  }
  if (boolean === false) {
    return 0;
  }
  return boolean;
}
