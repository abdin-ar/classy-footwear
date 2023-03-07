const sortByOptions = [
  { label: "None", value: ["id", "number", "asc"] },
  { label: "Cheaper First", value: ["finalPrice", "number", "asc"] },
  { label: "Expensive First", value: ["finalPrice", "number", "desc"] },
  { label: "Discounted First", value: ["discount", "number", "desc"] },
  { label: "Discounted Last", value: ["discount", "number", "asc"] },
  { label: "New Collection First", value: ["isNew", "boolean", "desc"] },
  { label: "New Collection Last", value: ["isNew", "boolean", "asc"] },
  { label: "Trending First", value: ["isTrending", "boolean", "desc"] },
  { label: "Trending Last", value: ["isTrending", "boolean", "asc"] },
  { label: "Sports Shoes First", value: ["type", "string", "desc"] },
  { label: "Formal Shoes First", value: ["type", "string", "asc"] },
];

export default sortByOptions;
