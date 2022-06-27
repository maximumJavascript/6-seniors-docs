import { Container } from 'react-bootstrap';

function Footer() {
  const firstLine = 'Maintained by the 6Seniors ©.';

  return (
    <footer>
      <Container className="d-flex flex-column align-items-center">
        <p className="text-center">
          {firstLine}
          <br />
          Feel free to contribute{' '}
          <a
            href="https://github.com/ancaiman/6-seniors-docs/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
