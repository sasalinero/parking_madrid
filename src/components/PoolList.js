import Header from "./Header";
import getPoolFromApi from "../services/poolService";
import { useEffect, useState } from "react";
import PoolItem from "./PoolItem";
import "../styles/PoolList.scss";
function PoolList() {
  const [allPools, setAllPools] = useState([]);
  const [searchPostCode, setSearchPostCode] = useState();

  useEffect((ev) => {
    getPoolFromApi().then((allPoolData) => {
      setAllPools(allPoolData);
    });
  }, []);

  const handleChange = (ev) => {
    setSearchPostCode(ev.currentTarget.value);
  };

  const renderLiPool = allPools
    .filter((onePool) => searchPostCode === "Todos" || onePool.id === searchPostCode
    )
    .map((onePool, index) => (
      <li key={index} className="pool_li">
        <PoolItem poolData={onePool} />
      </li>
    ));

  const renderOptionsPostcode = allPools.map((onePool, index) => {
    return (
      <option value={onePool.id} key={onePool.id}>
        {onePool.postcode}
      </option>
    );
  });

  return (
    <div className="principal_pool">
      <Header />
      <label htmlFor="postal">Código Postal</label>
      <select
        name="postcode"
        id={searchPostCode}
        value={searchPostCode}
        onChange={handleChange}
      >
        <option value="Todos" key="">Todos</option>
        {renderOptionsPostcode}
      </select>

      <ul className="pool_filtered">
       {renderLiPool}
      </ul>
    </div>
  );
}
export default PoolList;
