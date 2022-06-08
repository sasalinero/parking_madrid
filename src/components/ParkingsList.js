import Header from "./Header";
import ParkingItem from "./ParkingItem";
import { useState, useEffect } from "react";
import getParkingsFromApi from "../services/parkingService";
import "../styles/ParkingList.scss";
function ParkingsList() {
  const [data, setData] = useState([]);

  useEffect((ev) => {
    getParkingsFromApi().then((allParkingsData) => {
      setData(allParkingsData);
    });
  }, []);

  const renderLi = data.map((item, index) => (
    <li key={index} className="coche_li">
      <ParkingItem parkingData={item} />
    </li>
  ));

  return (
    <div className="principal_parking">
      <Header />
      <ul className="parking_ul">{renderLi}</ul>
    </div>
  );
}
export default ParkingsList;
