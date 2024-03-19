import styles from "../Button/Button.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function ButtonComponent({ path, buttonText, className }) {
  let navigate = useNavigate();
  let location = useLocation();

  // edge case
  function login() {
    // will import functionality from util module
    console.log("Performing login...");
  }

  // This approach allows us to maintain integrity of semantic html instead of using a <Link> element
  function handleClick(e) {
    e.preventDefault();
    if (location.pathname === "/login") {
      login();
    } else {
      navigate(path);
    }
  }

  const buttonClass = `${styles.button} ${className || ""}`;

  return (
    <button onClick={handleClick} className={buttonClass}>
      {buttonText}
    </button>
  );
}

// create a button component that will be used throughout the application

export default ButtonComponent;
