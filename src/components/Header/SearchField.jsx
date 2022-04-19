import useMDDocsSearch from './useMDDocsSearch';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';
import { mdDocsFolderData } from 'src/constants';
import cn from 'classnames';
import css from './Header.module.scss';

const getClassNames = () => {
  return cn('list-group-item list-group-item-action', css.searchResultItem);
};

function getSearchStringParts({ searchString, mdDocItem }) {
  const idx = mdDocItem.title.toLowerCase().indexOf(searchString.toLowerCase());
  const firstPart =
    idx === -1 ? mdDocItem.title : mdDocItem.title.slice(0, idx);
  const selectedPart =
    idx === -1 ? '' : mdDocItem.title.slice(idx, idx + searchString.length);
  const lastPart =
    idx === -1 ? '' : mdDocItem.title.slice(idx + searchString.length);

  return {
    firstPart,
    selectedPart,
    lastPart,
  };
}

export default function SearchField() {
  const {
    setIsResultsShowed,
    searchResults,
    searchString,
    isResultsShowed,
    handleBlurSearch,
    handleFocusSearch,
    handleChangeSearch,
  } = useMDDocsSearch();

  const handleLinkClick = useCallback(() => {
    setIsResultsShowed(false);
  }, [setIsResultsShowed]);

  const doRenderSearchResults = () => {
    if (!isResultsShowed || !searchResults.length) return null;

    const innerJsx = searchResults.map((x) => {
      const { firstPart, selectedPart, lastPart } = getSearchStringParts({
        searchString,
        mdDocItem: x,
      });

      const folderTitle = mdDocsFolderData.find(
        (folderData) => folderData.id === x.folderId
      )?.title;

      return (
        <NavLink
          className={getClassNames()}
          key={x.id}
          onClick={handleLinkClick}
          to={`/${x.appRoute}`}
        >
          <span>
            {firstPart}
            {selectedPart && (
              <span className={css.searchSelectedText}>{selectedPart}</span>
            )}
            {lastPart}
          </span>

          {folderTitle && (
            <span className={css.searchFolderInfo}>{folderTitle}</span>
          )}
        </NavLink>
      );
    });

    return <div className={css.searchResults}>{innerJsx}</div>;
  };

  return (
    <div className={css.searchFormBox} onBlur={handleBlurSearch}>
      <FormControl
        aria-label="Search"
        onChange={handleChangeSearch}
        value={searchString}
        onFocus={handleFocusSearch}
        placeholder="Найти"
        type="search"
      />

      {doRenderSearchResults()}
    </div>
  );
}
