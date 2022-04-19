import mdFilesData from '../../generated/mdRoutesData';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const regex = /(\[\[)([a-zа-я\s]+)\|([a-zа-я\s]+)(]])/gi;
const mdRoutesData = mdFilesData.filter((x) => x.type === 'file');

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
      navigate(href);
    },
    [navigate]
  );

  if (result) {
    result = result.replace(regex, (_, __, fileName, fileTitle) => {
      const route = mdRoutesData.find((x) => x.fileName === fileName);
      if (!route) return;

      return `[${fileTitle}](/${route.appRoute})`;
    });
  }

  return {
    mdContentWithLinks: result,
    onClick: handleDelegateAnchorClickToRouter,
  };
}
