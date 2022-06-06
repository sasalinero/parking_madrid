import Header from "./Header";
import getPoolFromApi from "../services/poolService";
import { useEffect, useState } from "react";
import PoolItem from "./PoolItem";
import "../styles/PoolList.scss";
function PoolList() {
  const [dataPool, setdataPool] = useState([]);

  useEffect((ev) => {
    getPoolFromApi().then((allPoolData) => {
      setdataPool(allPoolData);
    });
  }, []);
  console.log(dataPool)

  const renderLiPool = dataPool.map((itemPool, index) => (
    <li key={index} className="pool_li">
      <PoolItem poolData={itemPool} />
    </li>
  ));

  return (
  
    <div className="principal_pool">
        <Header />

      <ul className="pool_ul">{renderLiPool}</ul>
    </div>
    
    
  );
}
export default PoolList;
