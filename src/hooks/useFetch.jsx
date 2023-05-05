import { useEffect, useMemo, useState } from "react";

const useFetch = (url, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const memoizedUrl = useMemo(() => {
    if (!params) {
      return url;
    }

    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    return `${url}?${queryString}`;
  }, [url, params]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(memoizedUrl);
        const json = await res.json();
        setTotal(json.meta.pagination.total);
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [memoizedUrl]);

  return { loading, error, data, total };
};

export default useFetch;
