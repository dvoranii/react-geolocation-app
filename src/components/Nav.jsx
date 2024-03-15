import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link to="/product">Products</Link>
        </li>
        <li className={styles.li}>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
