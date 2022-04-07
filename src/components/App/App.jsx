import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';
import MDRenderer from '../MDRenderer/MDRenderer';
import mdRoutesData from '../../generated/mdRoutesData';
import css from './App.module.scss';

function App() {
  return (
    <Container className="wrapper">
      <Header />

      <main className="main">
        <NavMenu className={css.navMenu} />

        <section>
          <Routes>
            {mdRoutesData.map((x) => {
              return (
                <Route
                  key={x.appRoute}
                  path={x.appRoute}
                  element={<MDRenderer mdPageUrl={x.fileUrl} />}
                />
              );
            })}

            <Route
              path="page-another"
              element={<MDRenderer mdContent="Text to test the page content" />}
            />

            <Route path="*" element={<Navigate to="/main" replace />} />
          </Routes>
        </section>
      </main>

      <Footer />
    </Container>
  );
}

export default App;
