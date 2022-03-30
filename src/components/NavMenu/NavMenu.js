import { NavLink } from "react-router-dom";

import { ListGroup } from "react-bootstrap";

function NavMenu() {
  return (
    <aside>
      <ListGroup defaultActiveKey="/" as="ul">
        <NavLink end to="/">
          <ListGroup.Item action href="/" as="li">
            Main Page
          </ListGroup.Item>
        </NavLink>
        <NavLink end to="another_page">
          <ListGroup.Item action href="another_page" as="li">
            Another Page
          </ListGroup.Item>
        </NavLink>
      </ListGroup>
    </aside>
  );
}

export default NavMenu;
