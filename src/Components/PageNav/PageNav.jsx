import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
import ButtonComponent from "../Button/Button";

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
          <ButtonComponent
            path="/login"
            buttonText="Login"
            className={styles.loginBtn}
          />
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
