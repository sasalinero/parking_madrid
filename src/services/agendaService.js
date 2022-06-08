function getAgendaFromApi(props) {
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const yourUrl =
    "https://datos.madrid.es/egob/catalogo/300107-0-agenda-actividades-eventos.json";
  return fetch(corsAnywhere + yourUrl, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      const allEvents = json["@graph"].map((event) => {
        return {
          title: event.title,
          link: event.link,
          dia: event.dtstart,
          direccion: event["event-location"],
        };
      });

      return allEvents;
    });
}

export default getAgendaFromApi;
