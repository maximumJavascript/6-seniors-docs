import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AnotherPage, MainPage } from "../Pages";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";

import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container className="d-flex flex-column" style={{ flex: "1 1 auto" }}>
        <header>
          <Header />
        </header>
        <main className="d-flex">
          <aside>
            <NavMenu />
          </aside>
          <section>
            <Routes>
              <Route path="main_page" element={<MainPage />}></Route>
              <Route path="another_page" element={<AnotherPage />}></Route>
            </Routes>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </Router>
  );
}

export default App;
