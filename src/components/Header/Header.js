import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>

        <div className={styles.margin_auto} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className={styles.nav_links} to="/">
                Accounts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={styles.nav_links} to="/add">
                Create Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={styles.nav_links} to="/edit">
                Edit/Delete accounts
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
