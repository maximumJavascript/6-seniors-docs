import { Routes, Route } from 'react-router-dom';
import { AnotherPage, MainPage } from '../Pages';
import Header from '../Header/Header';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';
import MDRenderer from '../MDRenderer/MDRenderer';
import mdMainPage from '../../docs/Main.md';

function App() {
  return (
    <Container className="wrapper">
      <Header />

      <main className="main">
        <NavMenu />
        <section>
          <Routes>
            <Route
              index
              ath="/"
              element={<MDRenderer mdPageUrl={mdMainPage} />}
            />
            <Route path="another_page" element={<AnotherPage />} />
          </Routes>
        </section>
      </main>

      <Footer />
    </Container>
  );
}

export default App;
