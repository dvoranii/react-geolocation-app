/* eslint-disable react/prop-types */
import styles from "../Button/Button.module.css";
import { useNavigate } from "react-router-dom";

// need props for reuse login button
function ButtonComponent({ path, buttonText }) {
  let navigate = useNavigate();

  //   This approach allows us to maintain integrity of semantic html instead of using a <Link> element
  function handleClick() {
    navigate(path);
  }
  return (
    <div className={styles.btnWrapper}>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default ButtonComponent;
