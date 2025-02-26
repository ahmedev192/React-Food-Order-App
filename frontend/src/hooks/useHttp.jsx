import { useState, useCallback, useEffect } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        signal: requestConfig.signal,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Request failed!");
      }

      const responseData = await response.json();
      setData(responseData);

      return responseData;
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = () => setError(null);

  return {
    isLoading,
    error,
    data,
    sendRequest,
    clearError,
  };
};

export default useHttp;
