import { Link } from "react-router-dom";
import "../styles/Header.scss"
function Header (){
    return(<>
    <nav>
    <Link to="/weather">
        <button className="nav_button">El tiempo</button>
      </Link>
      <Link to="/parkingsList">
        <button className="nav_button" >Parking</button>
      </Link>
      <Link to="/agenda">
        <button className="nav_button">Ocio</button>
      </Link>
    </nav>
  </>
    )

}
export default Header;