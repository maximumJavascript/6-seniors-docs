import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm";

import mainMd from "../docs/Main.md";

function MainPage() {
  const [markdownText, setMarkdownText] = useState("");

  
  let testMd = "";

  fetch(mainMd)
    .then((response) => response.text())
    .then((data) => (testMd = data));

  return (
    <ReactMarkdown remarkPlugins={[gfm]}>
      *React-Markdown* now supports ~strikethrough~. Thanks to gfm plugin.
    </ReactMarkdown>
  );
}

export default MainPage;
