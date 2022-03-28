import { Container, ListGroup } from "react-bootstrap";

function Footer() {
  const firstLine = `Copyright © 2022, Maintained by the 6 Seniors.`;
  const secondLine = `Documentation built with React-Markdown.`;

  return (
    <Container className="d-flex flex-column align-items-center">
      <p>{firstLine}</p>
      <p>{secondLine}</p>
    </Container>
  );
}

export default Footer;
