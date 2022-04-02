import { NavLink } from "react-router-dom";

function NavMenu() {
  const active = ({ isActive }) => ({
    className: isActive ? "active" : "inherit",
  });

  return (
    <aside>
      <div className="list-group">
        <NavLink
          to="/"
          className={`list-group-item list-group-item-action ${active}`}
        >
          Main Page
        </NavLink>
        <NavLink
          to="another_page"
          className={`list-group-item list-group-item-action ${active}`}
        >
          Another Page
        </NavLink>
      </div>
    </aside>
  );
}

export default NavMenu;
