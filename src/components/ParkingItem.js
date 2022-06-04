function ParkingItem(props) {
 
  const showInMapClicked = () => {
    return window.open(
      `https://maps.google.com?q=${props.parkingData.latitud},${props.parkingData.longitud}`
    );
  };

  return (
    <>
      <p>Nombre: {props.parkingData.title}</p>
      <p>Dirección: {props.parkingData.direccion}</p>
      <button onClick={showInMapClicked}>Como llegar</button>
    </>
  );
}
export default ParkingItem;
