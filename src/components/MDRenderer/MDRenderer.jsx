import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const mdPluginsProp = [gfm];

export function fetchText(url) {
  return fetch(url).then((response) => response.text());
}

function MDRenderer({ mdPageUrl }) {
  const [markdownContent, setMarkdownContent] = useState('');
  const [markdownError, setMarkdownError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    fetchText(mdPageUrl)
      .then((data) => {
        if (isCancelled) return;
        setMarkdownContent(data);
      })
      .catch((error) => {
        if (isCancelled) return;
        setMarkdownError(error);
      });

    return () => {
      isCancelled = true;
      setMarkdownContent(null);
      setMarkdownError(null);
    };
  }, [mdPageUrl]);

  if (markdownError) {
    return 'Error while loading markdown';
  }

  if (!markdownContent) {
    return 'Loading...';
  }

  return (
    <ReactMarkdown remarkPlugins={mdPluginsProp}>
      {markdownContent}
    </ReactMarkdown>
  );
}

export default MDRenderer;
