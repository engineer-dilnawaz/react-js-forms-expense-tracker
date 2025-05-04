import { useState } from "react";

export default function useFilter(data, callback) {
  const [query, setQuery] = useState("");

  const filteredData = data.filter((exp) =>
    callback(exp).toLowerCase().includes(query)
  );

  return [filteredData, setQuery];
}
