/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import { useCities } from "../contexts/CitiesContext";
// import styles from "../CityItem/CityItem.module.css";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   }).format(new Date(date));

// function CityItem({ city }) {
//   const { currentCity, deleteCity } = useCities();
//   const { cityName, emoji, date, id, position } = city;

//   function handleClick(e) {
//     e.preventDefault();
//     deleteCity(id);
//   }

//   return (
//     <li>
//       <Link
//         className={`${styles.cityItem} ${
//           id === currentCity.id ? styles["cityItem--active"] : ""
//         }`}
//         to={`${id}?lat=${position.lat}&lng=${position.lng}`}
//       >
//         <span className={styles.emoji}>{emoji}</span>
//         <h3 className={styles.name}>{cityName}</h3>
//         <time className={styles.date}>({formatDate(date)})</time>
//         <button className={styles.deleteBtn} onClick={handleClick}>
//           &times;
//         </button>
//       </Link>
//     </li>
//   );
// }

// export default CityItem;

import styles from "../CityItem/CityItem.module.css";

function CityItem({ city }) {
  console.log(city);
  return <li className={styles.cityItem}>{city.cityName}</li>;
}

export default CityItem;
