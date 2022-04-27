import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { mdDocsFilesData } from 'src/constants';
import scrollToTop from 'src/components/NavMenu/scrollToTop';

const regex = /(\[\[)(.+)\|([а-яa-z0-9+\s]+)(]])/gi;

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
        window.open(href, '_blank');
        return;
      }

      navigate(href);
      scrollToTop();
    },
    [navigate]
  );

  if (result) {
    result = result.replace(regex, (_, __, fileName, fileTitle) => {
      const route = mdDocsFilesData.find((x) => x.fileName === fileName);
      if (!route) return;

      return `[${fileTitle}](/${route.appRoute})`;
    });
  }

  return {
    mdContentWithLinks: result,
    onClick: handleDelegateAnchorClickToRouter,
  };
}
