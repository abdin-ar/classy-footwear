export default function setStorage(key, value, storage = "local") {
  let store = window.localStorage;
  if (storage && storage === "session") {
    store = window.sessionStorage;
  }

  if (value === undefined) return store.removeItem(key);
  store.setItem(key, JSON.stringify(value));
}
