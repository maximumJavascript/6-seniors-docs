import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';
import MDRenderer from '../MDRenderer/MDRenderer';
import css from './App.module.scss';

import mdPageMain from '../../docs/Main.md';
import mdPageTerms from '../../docs/forStudent/terms.md';

function App() {
  return (
    <Container className="wrapper">
      <Header />

      <main className="main">
        <NavMenu className={css.navMenu} />

        <section>
          <Routes>
            <Route
              index
              path="/"
              element={<MDRenderer mdPageUrl={mdPageMain} />}
            />

            <Route
              path="page-terms"
              element={<MDRenderer mdPageUrl={mdPageTerms} />}
            />

            <Route
              path="page-another"
              element={<MDRenderer mdContent="Text to test the page content" />}
            />
          </Routes>
        </section>
      </main>

      <Footer />
    </Container>
  );
}

export default App;
