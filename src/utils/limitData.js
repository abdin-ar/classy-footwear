export default function limitData(data, limit) {
  data = data.slice(undefined, limit);
  return data;
}
