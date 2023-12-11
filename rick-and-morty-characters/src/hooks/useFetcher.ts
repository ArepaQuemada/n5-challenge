import { useEffect, useState } from "react";

interface FetcherProps<T> {
  promiseCallback: () => Promise<T>;
}

export const useFetcher = <T>({ promiseCallback }: FetcherProps<T>) => {
  const [data, setData] = useState<null | T>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await promiseCallback();
      setData(response);
      setIsLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    data: data,
    isLoading: isLoading,
  };
};
