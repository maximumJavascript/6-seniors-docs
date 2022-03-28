import { useEffect, useState } from "react";

import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm";

import mainMdPage from "../../docs/Main.md";
import { Container } from "react-bootstrap";

function MainPage() {
  let [markdownContent, setMarkdownContent] = useState(null);

  useEffect(() => {
    fetch(mainMdPage)
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data));
  }, []);

  return (
    <Container className="d-flex flex-column h-100">
      <header>
        <Header />
      </header>
      <main className="d-flex">
        <aside>
          <NavMenu />
        </aside>
        <section>
          <ReactMarkdown remarkPlugins={[gfm]}>{markdownContent}</ReactMarkdown>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default MainPage;
