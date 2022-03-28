import { Container, ListGroup } from "react-bootstrap";

function NavMenu() {
  return (
    <Container className="container-sm">
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          Link 3
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default NavMenu;
