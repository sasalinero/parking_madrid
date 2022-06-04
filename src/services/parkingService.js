function getParkingsFromApi(props) {
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const yourUrl =
    "https://datos.madrid.es/egob/catalogo/300531-0-aparcamientos-publicos.json";
  return fetch(corsAnywhere + yourUrl, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  })
    .then((response) =>  response.json())
    .then((json) => {
 
    
      const allParkings= json["@graph"].map((parking) => {
        return {
          title: parking.title,
          latitud: parking.location.latitude,
          longitud: parking.location.longitude,
          direccion: parking.address["street-address"],
        };
        
      });
      return allParkings;
    });
}

export default getParkingsFromApi;
