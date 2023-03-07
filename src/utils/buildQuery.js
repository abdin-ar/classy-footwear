function buildQuery(filtersObject) {
  let query = "";
  for (const i in filtersObject) {
    let contents = filtersObject[i];
    if (typeof contents === "object") {
      contents = contents.join(",");
    }
    query += `&${i}:${contents}`;
  }
  query = query.slice(1);
  return query;
}

export default buildQuery;
