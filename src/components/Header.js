import { Link } from "react-router-dom";
import "../styles/Header.scss"
function Header (){
    return(<>
    <nav>
    <Link to="/weather">
        <button className="btn_class">El tiempo</button>
      </Link>
      <Link to="/parkingsList">
        <button className="btn_class" >Parking</button>
      </Link>
      <Link to="/agenda">
        <button className="btn_class">Ocio</button>
      </Link>
    </nav>
  </>
    )

}
export default Header;