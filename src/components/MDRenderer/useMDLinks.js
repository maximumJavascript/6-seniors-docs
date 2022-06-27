import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { mdDocsFilesData, basePath } from 'src/constants';
import scrollToTop from 'src/components/NavMenu/scrollToTop';
import replaceMdLinks from './replaceMdLinks';

export function getHashValue(hrefString) {
  return new URL(hrefString).hash.slice(1);
}

export default function useMDLinks({ mdContent }) {
  let result = mdContent;
  const navigate = useNavigate();

  const handleDelegateAnchorClickToRouter = useCallback(
    (e) => {
      const anchor = e.target.closest?.('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      e.preventDefault();
      if (href.includes(basePath)) {
        scrollToTop();
        return void navigate(getHashValue(href));
      }
      return void window.open(href, '_blank');
    },
    [navigate]
  );

  if (result) {
    result = replaceMdLinks(result, mdDocsFilesData);
  }

  return {
    mdContentWithLinks: result,
    onClick: handleDelegateAnchorClickToRouter,
  };
}
