import Header from "./Header";
import getPoolFromApi from "../services/poolService";
import { useEffect, useState } from "react";
import PoolItem from "./PoolItem";
import "../styles/PoolList.scss";

function PoolList() {
  const [allPools, setAllPools] = useState([]);
  const [searchPostCode, setSearchPostCode] = useState("Todos");

  useEffect((ev) => {
    getPoolFromApi().then((allPoolData) => {
      setAllPools(allPoolData);
    });
  }, []);

  const handleChange = (ev) => {
    setSearchPostCode(ev.currentTarget.value);
  };

  const renderLiPool = allPools
    .filter(
      (onePool) => searchPostCode === "Todos" || onePool.id === searchPostCode
    )

    .map((onePool, index) => (
      <li key={index} className="pool_li">
        <PoolItem poolData={onePool} />
      </li>
    ));

  const renderOptionsPostcode = allPools
    .sort((a, b) => a.postcode - b.postcode)
    .map((onePool, index) => {
      return (
        <option value={onePool.id} key={onePool.id}>
          {onePool.postcode}
        </option>
      );
    });

  return (
    <>
      <div className="principal_pool">
        <Header />
        <label htmlFor="postal" className="postcode_label">
          Código Postal
          <select
            className="postcode_select"
            name="postcode"
            id={searchPostCode}
            value={searchPostCode}
            onChange={handleChange}
          >
            <option value="Todos" key="">
              Todas
            </option>
            {renderOptionsPostcode}
          </select>
        </label>

        <ul className="pool_filtered_li">{renderLiPool}</ul>
      </div>
    </>
  );
}
export default PoolList;
