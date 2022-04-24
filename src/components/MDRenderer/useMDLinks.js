import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { mdDocsFilesData } from 'src/constants';

const regex = /(\[\[)(.+)\|([а-яa-z\s]+)(]])/gi;

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
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
