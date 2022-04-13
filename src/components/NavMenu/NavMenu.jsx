import { NavLink } from 'react-router-dom';
import mdRoutesData from '../../generated/mdRoutesData';

function NavMenu({ className }) {
  const active = ({ isActive }) => ({
    className: isActive ? 'active' : null,
  });

  return (
    <aside className={className}>
      <div className="list-group">
        {mdRoutesData.map((routeData) => {
          return (
            <NavLink
              to={routeData.appRoute}
              className={`list-group-item list-group-item-action ${active}`}
            >
              {routeData.fileTitle}
            </NavLink>
          );
        })}

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
