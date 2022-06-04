import Header from "./Header";
import ParkingItem from "./ParkingItem";
import {useState, useEffect}from "react"
import getParkingsFromApi from "../services/parkingService";

function ParkingsList() {

  const [data, setData] = useState([]);

  useEffect(() => {
      getParkingsFromApi().then((allParkingsData) => {
      setData(allParkingsData);
    });
  }, []);

  const renderLi = data.map((item, index) => (
    <li key={index}>
      <ParkingItem parkingData={item} />
    </li>
  ));

  return (
    <>
   
            <Header/>
      
        <h1 className="title">Parkings disuarorios de madrid</h1>
    <ul>
      {renderLi}
    </ul>
    </>
  );
}
export default ParkingsList;
