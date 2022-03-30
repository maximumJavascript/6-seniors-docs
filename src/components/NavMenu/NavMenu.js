import { NavLink } from "react-router-dom";

import { ListGroup } from "react-bootstrap";

function NavMenu() {
  return (
    <ListGroup defaultActiveKey="main_page">
      <NavLink end to="main_page">
        <ListGroup.Item action href="main_page">
          Main Page
        </ListGroup.Item>
      </NavLink>
      <NavLink end to="another_page">
        <ListGroup.Item action href="another_page">
          Another Page
        </ListGroup.Item>
      </NavLink>
    </ListGroup>
  );
}

export default NavMenu;
