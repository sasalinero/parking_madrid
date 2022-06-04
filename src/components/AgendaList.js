import Header from "./Header";
import { useState, useEffect } from "react";
import getAgendaFromApi from "../services/agendaService";
import AgendaItem from "./AgendaItem";
import "../styles/AgendaList.scss";

function AgendaList() {
  const [dataAgenda, setDataAgenda] = useState([]);

  useEffect(() => {
    getAgendaFromApi().then((allAgendaData) => {
      setDataAgenda(allAgendaData);
    });
  }, []);

  const renderLiAgenda = dataAgenda.map((itemAgenda, index) => (
    <li className="agenda_li" key={index}>
      <AgendaItem agendaData={itemAgenda} />
    </li>
  ));

  return (
    <><div className="principal">
     <Header />
     
      
        <h1 className="title">El ocio de Madrid</h1>

        <ul className="agenda_ul">{renderLiAgenda}</ul>
      </div>
    </>
  );
}
export default AgendaList;
