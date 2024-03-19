import CityItem from "../CityItem/CityItem";
import styles from "../CityList/CityList.module.css";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking one on the map!" />
    );

  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
