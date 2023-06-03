import { NavLink, useLocation,} from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from './SharedLayout.module.css'

export const SharedLayout = () => {
  const location = useLocation();
  const biMoviePlayIcon = location.state?.from ?? "/";

  return (
    <div>
      <header className={css.header}>
        <NavLink to={biMoviePlayIcon}>
          <BiMoviePlay />
        </NavLink>

        <nav>
          <ul className={css.mainNav}>
            <li className={css.mainLink}>
              <NavLink className={css.text} to="/">Home</NavLink>
              </li>
              <li className={css.mainLink}>
                <NavLink className={css.text} to="/movies">Movies</NavLink>
                </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout
