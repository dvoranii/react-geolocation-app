/* eslint-disable no-unused-vars */
// import { useSearchParams } from "react-router-dom";
import styles from "../Map/Map.module.css";
import { useMapLocation } from "../../utils/useMapLocation";
import { useNavigate } from "react-router-dom";

function Map() {
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  const { lat, lng, setSearchParams } = useMapLocation();

  return (
    <div
      className={styles.mapContainer}
      onClick={(e) => {
        e.preventDefault();
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h2>
        Position: {lat}, {lng}
      </h2>
    </div>
  );
}

export default Map;
