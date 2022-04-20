import { Navbar, Container, Form, FormControl } from 'react-bootstrap';
import css from './Header.module.scss';

function Header() {
  // TODO implement search

  return (
    <header className={css.header}>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#">6Seniors Docs</Navbar.Brand>

          <Form>
            <FormControl
              type="search"
              placeholder="Найти"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
