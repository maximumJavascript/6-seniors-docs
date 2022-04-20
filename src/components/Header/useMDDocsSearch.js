import { useState, useMemo, useCallback } from 'react';
import { mdDocsFilesData } from 'src/constants';

export default function useMDDocsSearch() {
  const [searchString, setSearchString] = useState('');
  const [isResultsShowed, setIsResultsShowed] = useState(true);

  const searchResults = useMemo(() => {
    if ((searchString || '').length < 1) return [];

    const preparedStr = searchString.toLowerCase();

    return mdDocsFilesData.filter((x) => {
      return x.title?.toLowerCase().includes(preparedStr);
    });
  }, [searchString]);

  const handleChangeSearch = useCallback((e) => {
    setSearchString(e.target.value || '');
  }, []);

  const handleFocusSearch = () => {
    if (isResultsShowed) return;
    setIsResultsShowed(true);
  };

  const handleBlurSearch = (e) => {
    if (e.currentTarget.contains?.(e.relatedTarget)) return;

    if (!isResultsShowed) return;
    setIsResultsShowed(false);
  };

  return {
    searchResults,
    searchString,
    isResultsShowed,
    handleChangeSearch,
    handleFocusSearch,
    handleBlurSearch,
    setSearchString,
    setIsResultsShowed,
  };
}
