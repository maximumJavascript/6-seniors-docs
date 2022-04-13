import { NavLink } from 'react-router-dom';
import mdFilesData from '../../generated/mdRoutesData';
import css from './NavMenu.module.scss';

function NavMenu({ className }) {
  const routesJsx = mdFilesData
    .map((routeData) => {
      const isNested = routeData.nestLevel > 0;
      const nestedClassName = isNested ? css.nestedItem : '';
      const childClassName = `${css.item} list-group-item ${nestedClassName}`;

      if (routeData.type === 'folder') {
        return (
          <div key={routeData.id} className={`${childClassName} ${css.group}`}>
            {routeData.title}
          </div>
        );
      }

      if (routeData.type === 'file') {
        return (
          <NavLink
            to={routeData.appRoute}
            key={routeData.id}
            className={`${childClassName} list-group-item-action`}
          >
            {routeData.title}
          </NavLink>
        );
      }

      return null;
    })
    .filter(Boolean);

  return (
    <aside className={className}>
      <div className="list-group">{routesJsx}</div>
    </aside>
  );
}

export default NavMenu;
