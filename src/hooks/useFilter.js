import useLocalStorage from "./useLocalStorage";

export default function useFilter(data, callback) {
  const [query, setQuery] = useLocalStorage("query", "");

  const filteredData = data.filter((exp) =>
    callback(exp).toLowerCase().includes(query)
  );

  return [filteredData, setQuery, query];
}
