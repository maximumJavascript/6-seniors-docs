import { Navbar, Container } from 'react-bootstrap';
import SearchField from './SearchField';
import css from './Header.module.scss';
import cn from 'classnames';

function Header() {
  return (
    <header className={css.header}>
      <Navbar bg="light" expand="lg" className={cn('fixed-top', css.nav)}>
        <Container>
          <Navbar.Brand href="#">6Seniors Docs</Navbar.Brand>
          <SearchField />
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
