import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import mainMdPage from '../../docs/Main.md';

function MainPage() {
  const [markdownContent, setMarkdownContent] = useState(null);

  useEffect(() => {
    fetch(mainMdPage)
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data));
  }, []);

  return <ReactMarkdown remarkPlugins={[gfm]}>{markdownContent}</ReactMarkdown>;
}

export default MainPage;
