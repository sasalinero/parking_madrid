import { Link } from "react-router-dom";
import "../styles/Landing.scss";
function Landing() {
  return (
    <div className="principal_landing">
    <h1>Tu Plan en Madrid</h1>

      <Link to="/poolList">
        <button className="btn_class" >Piscinas </button>
      </Link>
      <Link to="/parkingsList">
        <button  className="btn_class">Parking </button>
      </Link>
      <Link to="/agenda">
        <button  className="btn_class">Ocio</button>
      </Link>
    </div>
  );
}
export default Landing;
