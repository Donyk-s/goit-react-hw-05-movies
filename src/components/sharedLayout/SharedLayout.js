import { NavLink, useLocation, Link } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  const location = useLocation();
  const biMoviePlayIcon = location.state?.from ?? "/";

  return (
    <div>
      <header>
        <NavLink to={biMoviePlayIcon}>
          <BiMoviePlay /> We can show movie
        </NavLink>

        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default SharedLayout