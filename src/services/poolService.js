function getPoolFromApi() {
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const poolUrl =
    "https://datos.madrid.es/egob/catalogo/210227-0-piscinas-publicas.json";

  return fetch(corsAnywhere + poolUrl, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      const allPool = json["@graph"].map((pool) => {
        return {
          postcode: pool.address["postal-code"],
          title: pool.title,
          id: pool.id,

          llegar: pool.organization["organization-desc"],
        };
      });
      return allPool;
    });
}

export default getPoolFromApi;
