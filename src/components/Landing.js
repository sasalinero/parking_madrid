import { Link } from "react-router-dom";
function Landing() {
  return (
    <div>
      <Link to="/weather">
        <button>El tiempo</button>
      </Link>
      <Link to="/parkingsList">
        <button>Parking</button>
      </Link>
      <Link to="/agenda">
        <button>Ocio</button>
      </Link>
    </div>
  );
}
export default Landing;
