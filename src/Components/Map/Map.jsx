/* eslint-disable no-unused-vars */
// import { useSearchParams } from "react-router-dom";
import styles from "../Map/Map.module.css";
import { useMapLocation } from "../../utils/useMapLocation";

function Map() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  const { lat, lng } = useMapLocation();

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>
        Position: {lat}, {lng}
      </h2>
    </div>
  );
}

export default Map;
