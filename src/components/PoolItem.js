import "../styles/PoolItem.scss";
function PoolItem(props) {
  return (
    <>
  
      <p className="where_p_pool">Código Postal</p><p className="res_p_pool"> {props.poolData.postcode}</p>
      <p className="name_p_pool"> {props.poolData.title}</p>
      <p> {props.poolData.llegar}</p>
      
      <a  href={props.poolData.horario} ><button className="btn_info" >Horario</button></a>
      
    </>
    
  );
}
export default PoolItem;
