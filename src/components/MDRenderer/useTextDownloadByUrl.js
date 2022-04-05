import { useState, useLayoutEffect } from 'react';

export function fetchText(url) {
  return fetch(url).then((response) => response.text());
}

export default function useTextDownloadByUrl({ resourceUrl }) {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    let isCancelled = false;
    if (!resourceUrl) return;

    setIsLoading(true);

    fetchText(resourceUrl)
      .then((data) => {
        if (isCancelled) return;
        setContent(data);
      })
      .catch((caughtErr) => {
        if (isCancelled) return;
        setError(caughtErr);
      })
      .finally(() => {
        if (isCancelled) return;
        setIsLoading(false);
      });

    return () => {
      isCancelled = true;
      setError(null);
      setIsLoading(false);
    };
  }, [resourceUrl]);

  return {
    error,
    isError: !!error,
    isLoading,
    result: content,
  };
}
