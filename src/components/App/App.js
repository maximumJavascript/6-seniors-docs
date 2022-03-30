import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AnotherPage, MainPage } from "../pages";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";

import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container className="wrapper">
        <Header />
        <main className="main">
          <NavMenu />
          <section>
            <Routes>
              <Route index ath="/" element={<MainPage />}></Route>
              <Route path="another_page" element={<AnotherPage />}></Route>
            </Routes>
          </section>
        </main>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
