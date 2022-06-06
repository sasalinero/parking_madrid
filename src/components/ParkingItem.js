import "../styles/ParkingItem.scss";
function ParkingItem(props) {
 
  const showInMapClicked = () => {
    return window.open(
      `https://maps.google.com?q=${props.parkingData.latitud},${props.parkingData.longitud}`
    );
  };

  return (
    <>
      <p className="name_p_auto" >{props.parkingData.title}</p>
      <p className="where_p_auto">Dirección:</p> <p className="res_p_auto">{props.parkingData.direccion}</p> 
      <button onClick={showInMapClicked} className="btn_info auto">¿Cómo llegar?</button>
    </>
  );
}
export default ParkingItem;
