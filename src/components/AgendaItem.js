import "../styles/AgendaItem.scss";
function AgendaItem(props) {
  return (
    <>
      <p className="name_p"> {props.agendaData.title}</p>
      <p className="when_p">¿Cuándo?</p>{" "}
      <p className="res_p"> {props.agendaData.dia}</p>
      <p className="where_p">¿Dónde? </p>{" "}
      <p className="res_p"> {props.agendaData.direccion}</p>
      <a href={props.agendaData.link}>
        <button className="btn_info">Más Info</button>
      </a>
    </>
  );
}
export default AgendaItem;
