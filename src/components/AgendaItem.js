
import "../styles/AgendaItem.scss";
function AgendaItem(props) {

    return (
      <>
        <p className="primera_p">Fecha:</p> <p > {props.agendaData.dia}</p>
        <p>Nombre: {props.agendaData.title}</p>
        <p>Dirección: {props.agendaData.direccion}</p>
        <a href={props.agendaData.link} ><button >Más Info</button></a>
        <p>Hola</p>
      </>
    );
  }
  export default AgendaItem;
  