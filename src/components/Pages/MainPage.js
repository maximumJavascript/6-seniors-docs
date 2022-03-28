import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm";

import mainMd from "../../docs/Main.md";

function MainPage() {
  let [markdownText, setMarkdownText] = useState(null);

  useEffect(() => {
    fetch(mainMd)
      .then((response) => response.text())
      .then((data) => setMarkdownText(data));
  }, [])

  return (
    <ReactMarkdown remarkPlugins={[gfm]}>
      {markdownText}
    </ReactMarkdown>
  );
}

export default MainPage;
