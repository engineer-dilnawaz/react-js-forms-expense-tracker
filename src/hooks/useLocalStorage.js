import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData ?? []);

  useEffect(() => {
    const oldData = localStorage.getItem(key);
    if (oldData) {
      setData(JSON.parse(oldData));
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, [key, initialData]);

  function updateLocalStorage(newData) {
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(data)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }
    setData(newData);
  }

  return [data, updateLocalStorage];
}
