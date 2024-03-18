/* eslint-disable react/prop-types */
import styles from "../Button/Button.module.css";
import { useNavigate, useLocation } from "react-router-dom";

// need props for reuse login button
function ButtonComponent({ path, buttonText, className }) {
  let navigate = useNavigate();
  let location = useLocation();

  function login() {
    // will import functionality from util module
    console.log("Performing login...");
  }

  //   This approach allows us to maintain integrity of semantic html instead of using a <Link> element
  function handleClick(e) {
    e.preventDefault();
    if (location.pathname === "/login") {
      login(); // Call login function for /login path
    } else {
      navigate(path); // Navigate to the provided path for other cases
    }
  }

  const buttonClass = `${styles.button} ${className || ""}`;

  return (
    <button onClick={handleClick} className={buttonClass}>
      {buttonText}
    </button>
  );
}

export default ButtonComponent;
