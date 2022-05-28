import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { mdDocsFilesData } from 'src/constants';
import scrollToTop from 'src/components/NavMenu/scrollToTop';
import replaceMdLinks from './replaceMdLinks';

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
      if (href.startsWith('http')) {
        return void window.open(href, '_blank');
      }

      navigate(href);
      scrollToTop();
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
