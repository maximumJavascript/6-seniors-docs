import { NavLink } from "react-router-dom";

import { ListGroup } from "react-bootstrap";

function NavMenu() {
  return (
    <aside>
      <ListGroup>
        <NavLink end to="/">
          <ListGroup.Item >
            Main Page
          </ListGroup.Item>
        </NavLink>
        <NavLink end to="another_page">
          <ListGroup.Item >
            Another Page
          </ListGroup.Item>
        </NavLink>
      </ListGroup>
    </aside>
  );
}

export default NavMenu;
