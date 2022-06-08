import "../styles/PoolItem.scss";
function PoolItem(props) {
  return (
    <>
      <p className="name_p_pool"> {props.poolData.title}</p>
      <p className="where_p_pool">Código Postal</p>
      <p className="res_p_pool"> {props.poolData.postcode}</p>
      <p className="where_p_pool">Como llegar</p>{" "}
      <p> {props.poolData.llegar}</p>
    </>
  );
}
export default PoolItem;
