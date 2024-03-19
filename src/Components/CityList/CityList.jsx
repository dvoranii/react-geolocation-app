import CityItem from "../CityItem/CityItem";
import styles from "../CityList/CityList.module.css";
import Spinner from "../Spinner/Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
