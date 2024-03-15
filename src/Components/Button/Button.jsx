/* eslint-disable react/prop-types */
import styles from "../Button/Button.module.css";
import { useNavigate } from "react-router-dom";

// need props for reuse login button
function ButtonComponent({ path, buttonText, className }) {
  let navigate = useNavigate();

  //   This approach allows us to maintain integrity of semantic html instead of using a <Link> element
  function handleClick() {
    navigate(path);
  }

  const buttonClass = `${styles.button} ${className || ""}`;

  return (
    <button onClick={handleClick} className={buttonClass}>
      {buttonText}
    </button>
  );
}

export default ButtonComponent;
