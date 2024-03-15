import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/product">Products</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
