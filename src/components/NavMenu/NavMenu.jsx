import { NavLink } from 'react-router-dom';

function NavMenu({ className }) {
  const active = ({ isActive }) => ({
    className: isActive ? 'active' : null,
  });

  return (
    <aside className={className}>
      <div className="list-group">
        <NavLink
          to="/"
          className={`list-group-item list-group-item-action ${active}`}
        >
          Main Page
        </NavLink>

        <NavLink
          to="page-terms"
          className={`list-group-item list-group-item-action ${active}`}
        >
          Terms
        </NavLink>

        <NavLink
          to="page-another"
          className={`list-group-item list-group-item-action ${active}`}
        >
          Another Page
        </NavLink>
      </div>
    </aside>
  );
}

export default NavMenu;
