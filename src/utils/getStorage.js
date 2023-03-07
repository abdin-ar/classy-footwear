export default function getStorage(key, storage = "local") {
  let store = window.localStorage;
  if (storage && storage === "session") {
    store = window.sessionStorage;
  }

  let value;

  const jsonValue = store.getItem(key);
  if (jsonValue !== null) value = JSON.parse(jsonValue);

  if (typeof value === "function") {
    return value();
  } else {
    return value;
  }
}
