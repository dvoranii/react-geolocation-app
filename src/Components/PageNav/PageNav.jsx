import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <img className={styles.logo} src="/logo.png" alt="" />
      </NavLink>

      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
