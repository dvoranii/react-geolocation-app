import styles from "../Nav/Nav.module.css";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>{/* import button component */}</li>
      </ul>
    </nav>
  );
}

export default Navigation;
