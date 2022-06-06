import { Link } from "react-router-dom";
import "../styles/Header.scss"
import volver from "../images/volver.png"

function Header (){
    return(<>
    <nav>
    <Link to="/">
        <button > <img className="btn_volver" src={volver} alt="volver" />
          </button>
      </Link>
    <Link to="/poolList">
        <button className="btn_class">Piscinas </button>
      </Link>
      <Link to="/parkingsList">
        <button className="btn_class" >Parking </button>
      </Link>
      <Link to="/agenda">
        <button className="btn_class">Ocio</button>
      </Link>
    </nav>
  </>
    )

}
export default Header;