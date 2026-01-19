import { useState, useEffect, useCallback } from "react";

/**
 * useFetch accepts an async fetcher function and dependencies.
 * fetcher should be a function that returns a Promise resolving to data.
 *
 * Example: const { data, loading, error, refetch } = useFetch(fetchPatients, []);
 */
export default function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(fetcher));
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetcher();
      setData(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    if (!fetcher) return;
    execute();
  }, [execute, fetcher]);

  return { data, loading, error, refetch: execute };
  }
