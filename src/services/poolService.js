function getPoolFromApi() {
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const poolUrl =
    "https://datos.madrid.es/egob/catalogo/210227-0-piscinas-publicas.json";

  const jsonCopi = [
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4707-centro-deportivo-municipal-maria-jesus-rosa-vaguada-.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Piscinas",
      id: "4707",
      title: "Centro Deportivo Municipal  María Jesús Rosa (La Vaguada)",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=e92942be9971c010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Fuencarral-ElPardo",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Fuencarral-ElPardo/Barrio/ElPilar",
        },
        locality: "MADRID",
        "postal-code": "28029",
        "street-address": "AVENIDA MONFORTE DE LEMOS 38",
      },
      location: {
        latitude: 40.47876758357458,
        longitude: -3.7086993281311904,
      },
      organization: {
        "organization-desc":
          "  Metro: Barrio del Pilar , Peñagrande.   Bus: 42, 49, 67, 83, 128, 134, 137.",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas    Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla    De lunes a viernes, de 9 a 20,30 horas.   Cierre completo del centro   Un mes natural en temporada estival  y los días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases deportivas     Pre-infantiles (0 a 5 años): matronatación y natación.  Infantiles  (6 a 14 años): natación.     Jóvenes y personas adultas (15 a 64 años): acuagim, gimnasia acuática, fitness acuático, natación, natación de compensación y natación embarazadas.    Mayores de 65 años:   natación.     Equipamientos     Superficie total de las instalaciones:  2.075 metros cuadrados.  Unidades deportivas cubiertas:   piscina (vaso de 25 metros y vaso de enseñanza) y sala  de musculación.    Oficina de promoción deportiva:    responsable de la coordinación de Juegos Deportivos Municipales, Torneos y Circuitos Municipales, Copas de Primavera. Además, ofrece información sobre las Escuelas de Promoción Deportiva.    Ayudas técnicas para la accesibilidad: 1 grúa de piscina.",
        "organization-name":
          "Centro Deportivo Municipal  María Jesús Rosa (La Vaguada)",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/10183549-centro-deportivo-municipal-alcantara.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "10183549",
      title: "Centro Deportivo Municipal Alcántara",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=a949235892f28510VgnVCM1000001d4a900aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Salamanca/Barrio/Goya",
        },
        locality: "MADRID",
        "postal-code": "28006",
        "street-address": "CALLE ALCANTARA 26",
      },
      location: {
        latitude: 40.42810291538114,
        longitude: -3.6737317205040503,
      },
      organization: {
        "organization-desc":
          "  Metro: Lista, Manuel Becerra.  Bus: 21, 43, 53, 146.  Renfe: Cercanías.  Bicicletas:  El centro dispone de aparca bicicletas exterior con capacidad para 12 bicicletas.  Servicio Bicimad, para consultar la estación más cercana, acceda al mapa de geolocalización de las estaciones.",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas  Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla   De lunes a viernes: de 7 a 23 horas.   Sábados: de 9 a 20 horas. Domingos y festivos: de 9 a 15 horas   Cierre completo del Centro   Los  días 1 de enero, 1 de mayo y 25 de diciembre.",
        services:
          "Clases y escuelas deportivas    Pre-infantiles: matronatación.  Escuelas infantiles: bailes, defensa personal y natación.  Jóvenes y personas adultas: natación.  Mayores de 65 años: natación.  Personas con discapacidad: natación.   Equipamientos     Superficie total de las instalaciones: 3.725 metros cuadrados.    Unidades deportivas al aire libre:  piscina (vaso de 16,8 x 8,4 metros) y u nidades auxiliares al aire libre, terrazas (de entrenamiento, ludoteca y solárium).     Unidades deportivas cubiertas: piscinas (vaso de 25 metros y vaso de enseñanza), 5 salas multiusos (actividades y ciclo indoor) y sala fitness.",
        "organization-name": "Centro Deportivo Municipal Alcántara",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/114782-centro-deportivo-municipal-alfredo-goyeneche.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "114782",
      title: "Centro Deportivo Municipal Alfredo Goyeneche",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=789fe8ae8d81c010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca/Barrio/Aravaca",
        },
        locality: "MADRID",
        "postal-code": "28023",
        "street-address": "CALLE ARROYO DE POZUELO 99",
      },
      location: {
        latitude: 40.45212135012858,
        longitude: -3.783283203719198,
      },
      organization: {
        "organization-desc":
          "  Bus: 160, 161, 658  Renfe:  Aravaca   Bicicleta: El centro dispone de aparca bicicletas exterior con capacidad para 5 bicicletas.",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas  Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.    Horario de taquilla   De lunes a viernes: de 9 a 20,30 horas Sábados y domingos: de 9 a 13,30 horas Festivos, cerrado    Cierre completo del centro  Los fines de semana por la tarde, festivos, semana santa, fines de semana del mes de julio, mes de agosto, y los días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas     Pre infantiles (4 y 5 años): natación y predeporte.  Infantiles (edad según modalidades): gimnasia rítmica, natación, natación sincronizada y pádel.   Jóvenes y adultos (de 15 a 64 años): acuagim, aeróbic, combinadas, estiramientos, fitness, fitness acuático, GAP (glúteos, abdómen y piernas), marcha nórdica, natación, pádel, pilates y yoga.  Mayores 65 años: actividad física, acuagim, gimnasia acuática, natación, pilates y prevención de caídas.  Personas con discapacidad: natación.   Equipamientos    Superficie total de las instalaciones: 13.505 metros cuadrados.  Unidades deportivas al aire libre: 2 pistas de pádel, 3 pistas de pádel (cristal), 2 pistas de tenis y rocódromo.  Unidades deportivas cubiertas: pabellón polideportivo, piscina (vaso 25 metros y vaso de enseñanza), sala de musculación, 2 salas multiusos y 2 saunas.  Ayudas técnicas para la accesibilidad: 1 ascensor, 1 plataforma y 1 grúa de piscina.  Columna de rescate cardíaco.",
        "organization-name": "Centro Deportivo Municipal Alfredo Goyeneche",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4696-centro-deportivo-municipal-aluche.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "4696",
      title: "Centro Deportivo Municipal Aluche",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=4506b0c40971c010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Latina",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Latina/Barrio/LasAguilas",
        },
        locality: "MADRID",
        "postal-code": "28044",
        "street-address": "AVENIDA DE LAS AGUILAS 14",
      },
      location: {
        latitude: 40.382720517194784,
        longitude: -3.773653600881568,
      },
      organization: {
        "organization-desc":
          "  Metro: Aluche  Bus: 17, 34, 139  Renfe: Fanjul   Bicicletas:  el centro dispone de aparca bicicletas exterior  con capacidad para 6 bicicletas.",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla   De lunes a domingos y festivos de 8,30 a 20,30 horas.    Cierre completo del centro      Días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas       Pre-Infantiles (1 a 5 años, según modalidades): actividad física y juego, natación,  y pre-deporte (gimnasia rítmica y artística).  Infantiles (6 a 14 años, según modalidades): aeróbic,  atletismo, baloncesto, buceo, fútbol, gimnasia artística, gimnasia rítmica, gimnasia rítmica (estética), hockey patines, judo, karate shyto, natación, patinaje artístico, polideportiva, tenis y voleibol.  Jóvenes y adultos (15 a 64 años, según modalidades): aeróbic, acuapilates, atletismo, bailes de salón, baloncesto, carrera acuática (acuarunning) , caminar por Madrid, correr por Madrid (carrera popular), ciclo sala, fitness, gimnasia acuática (acuagim), GAP (glúteos, abdomen, piernas) , gimnasia de compensación (salud), gimnasia rítmica (estética), judo, karate shyto,  marcha nórdica, natación, natación de compensación, natación embarazadas, pádel, pilates, streching, tenis y yoga dinámico.  Mayores de 65 años: acondicionamiento físico deportivo, gimnasia acuática (acuagim), natación y pilates.  Personas con discapacidad física: natación.    Actividades físico deportivas para centros escolares: escuela deportiva de educación Vial.   Equipamientos    Superficie total de las instalaciones:  13.960 metros cuadrados  Unidades deportivas al aire libre: 1 campo de fútbol de césped artificial, circuito de educación vial, 2 frontones cortos, patinódromo, piscinas (1 vaso de gemelas y 1 vaso infantil), pista de atletismo, pista de hockey patines, 4 pistas de pádel, pista de patinaje, 9 pistas polideportivas, 9 pistas de tenis, 2 pistas de voley playa y 19 tenis de mesa.   Unidades deportivas cubiertas:  pabellón polideportivo, piscinas (vaso de 50 metros y vaso de 25 metros), sala de artes marciales, salas multiusos, sala de musculación y 2 saunas.    Servicio de medicina deportiva: Acondicionamiento cardiovascular, reconocimientos médicos para deportistas.  Ayudas técnicas para la accesibilidad: 1 grúa de piscina.   Oficina de promoción deportiva: responsable de la coordinación de Juegos deportivos municipales, torneos y circuitos municipales, copas de primavera, información en las escuelas de promoción deportiva.   Columna de rescate cardíaco.",
        "organization-name": "Centro Deportivo Municipal Aluche",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4624404-centro-deportivo-municipal-antonio-diaz-miguel.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "4624404",
      title: "Centro Deportivo Municipal Antonio Díaz Miguel",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=c90342b9fda34110VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Tetuan/Barrio/Almenara",
        },
        locality: "MADRID",
        "postal-code": "28029",
        "street-address": "CALLE JOAQUIN DICENTA 1",
      },
      location: {
        latitude: 40.471254265861454,
        longitude: -3.6953256978963807,
      },
      organization: {
        "organization-desc": "  Metro: VentillaBus: 42",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas   Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.   Horario de taquilla    De lunes a viernes: de 7 a 14  y de 15 a 22 horas  Sábados: de 9 a 14 y de 15  a 19 horas Domingos y festivos: 9 a 14 horas   Cierre completo del centro  Días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo",
        services:
          "SERVICIOS    Deportes Practicables   Baloncesto - Balonmano - Fútbol sala - Musculación - Natación  Uso de espacios deportivos Pabellón polideportivo - Piscina - Pista de baloncesto - Pista de balonmano - Pista de fútbol sala - Sala de musculación  Enseñanzas Deportivas  Preinfantiles:  Educación Física de base &amp;ndash; matronatación &amp;ndash; natación  peques Infantiles  (edad, según modalidades):  aeróbic &amp;ndash; baloncesto &amp;ndash; balonmano &amp;ndash; fútbol sala &amp;ndash; gimnasia rítmica &amp;ndash; judo &amp;ndash; natación &amp;ndash; natación de competición &amp;ndash; polideportiva Jóvenes: aeróbic &amp;ndash; baloncesto &amp;ndash; fitness &amp;ndash; fútbol sala &amp;ndash; gimnasia rítmica &amp;ndash; judo &amp;ndash; natación Adultos: acondicionamiento físico &amp;ndash; aeróbic &amp;ndash; aeróbic/body jam &amp;ndash; aeróbic/zumba &amp;ndash; carrera acuática (acuarunning) &amp;ndash; ciclo sala &amp;ndash; combinada &amp;ndash; fitness -  fitness acuático &amp;ndash; fitness/body combat -  gimnasia acuática (acuagim,  acuabdominales, acuapilates, acuarelax, acuasalud) &amp;ndash; gimnasia suave &amp;ndash; gimnasia suave/body balance &amp;ndash; natación &amp;ndash; natación de compensación &amp;ndash; natación embarazadas &amp;ndash; pilates  &amp;ndash; taichí &amp;ndash; tonificación &amp;ndash; yoga Mayores 65 años: actividad física &amp;ndash; gimnasia acuática (acuagim) - natación Personas con discapacidad: actividad acuática &amp;ndash; actividad física    Equipamientos    Superficie: 8.455,41 metros cuadrados  Unidades deportivas cubiertas: pabellón polideportivo - piscina (vaso de 25 metros y vaso de enseñanza ) - 3 salas multiusos - sala de musculación  Accesibilidad: instalación adaptada con 2 ascensores y 1 grúa de piscina",
        "organization-name": "Centro Deportivo Municipal Antonio Díaz Miguel",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/99578-centro-deportivo-municipal-barajas.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "99578",
      title: "Centro Deportivo Municipal Barajas",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=b86c79262ef5d010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Barajas",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Barajas/Barrio/AlamedaOsuna",
        },
        locality: "MADRID",
        "postal-code": "28042",
        "street-address": "AVENIDA LOGROÑO 70",
      },
      location: {
        latitude: 40.46301382809657,
        longitude: -3.587693324074623,
      },
      organization: {
        "organization-desc":
          "  Metro: Barajas , Alameda de Osuna.  Bus: Urbanos (105, 112, 115, 151) / Interurbanos (211, 212, 827).  Bicicleta: el centro dispone de aparcabicicletas exterior con capacidad para 6 bicicletas.",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas    Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla   De lunes a viernes: de 8,30 a 20,30 horas. Sábados, domingos y festivos: de 8,30 a 14,30 horas.   Cierre completo del centro   Mes de agosto y días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas    Pre infantiles: matronatación, natación  peques.  Infantiles (edad, según modalidades): bádminton, baloncesto, esgrima, gimnasia rítmica, judo, natación, pirag&amp;uuml;ismo,  pre-tenis y tenis.  Jóvenes y personas adultas: aeróbic, ciclo sala, combinada (fitness /natación,  natación/carrera acuática) fitness, gimnasia acuática (acuagim), natación,  natación de compensación, natación embarazadas, natación post-parto, pádel, pilates, pilates embarazadas, salvamento acuático, tenis y yoga.  Mayores 65 años: acondicionamiento físico, gimnasia acuática (acuagim), natación y pilates mayores.  Personas con discapacidad: natación (infantil y adulta).  Programa deportivo en la calle: caminar por Madrid, corredores por Madrid y marcha nórdica.   Equipamientos    Superficie: 17.346 metros cuadrados.   Unidades Deportivas al aire libre: 4 pistas de pádel y 4 pistas de tenis.   Unidades Deportivas cubiertas: 1 pabellón polideportivo, 1 piscina (vaso de 25 m. y vaso de enseñanza), 2 salas multiusos y 1 sala de musculación.  Oficina de promoción deportiva: responsable de la coordinación de Juegos Deportivos Municipales, Torneos y Circuitos Municipales  y Copas de Primavera. Además, ofrece información sobre las Escuelas de Promoción Deportiva.   Ayudas técnicas para la accesibilidad: 1 ascensor y 1 grúa de piscina.   Columna de rescate cardíaco.",
        "organization-name": "Centro Deportivo Municipal Barajas",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4695-centro-deportivo-municipal-blanca-fernandez-ochoa-mina-.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "4695",
      title: "Centro Deportivo Municipal Blanca Fernández Ochoa (La Mina)",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=930942be9971c010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Carabanchel",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Carabanchel/Barrio/VistaAlegre",
        },
        locality: "MADRID",
        "postal-code": "28025",
        "street-address": "CALLE MONSEÑOR OSCAR ROMERO 41",
      },
      location: {
        latitude: 40.38234955664604,
        longitude: -3.746482524823702,
      },
      organization: {
        "organization-desc":
          "  Metro: Carabanchel , Eugenia de Montijo.  Bus: 17 , 34 , 35 , 113 , 484 ,  481.  Bicicleta:  el centro dispone de  aparca bicicletas exterior  con capacidad para  4  bicicletas.   Servicio Bicimad , para consultar la estación más cercana, acceda al  mapa de geolocalización de las estaciones .",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas               Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla   De lunes a viernes: de 9,00 a 20,30 horas. Sábados, domingos y festivos: de 9,00 a 14,30 horas.   Cierre completo del centro   Días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas    Pre-Infantiles (0 a 3 años): natación.  Infantiles: gimnasia rítmica y natación.  Adultos: acondicionamiento físico, aeróbic, combinada (acondicionamiento físico/natación, pilates/natación), combinada de compensación, fitness, gimnasia acuática (acuagim), gimnasia de compensación, gimnasia rítmica , musculación, natación, natación de compensación, pilates y relax/estiramientos.  Mayores de 65 años : actividad física y gimnasia acuática (acuagim).  Personas con discapacidad física: actividad acuática (adultos).   Equipamientos    Superficie total de las instalaciones: 33.295 metros cuadrados.  Unidades deportivas al aire libre: campo de fútbol, frontón, piscina (1 vaso de 50 metros, 1 vaso de recreo y 1 vaso infantil), 2 pistas de pádel y 2 pistas polideportivas.  Unidades deportivas cubiertas: pabellón polideportivo, piscina (1 vaso de 25 metros y 1 vaso de enseñanza), 4 pistas de squash, 1 sala de musculación y 2 salas multiusos.   Oficina de promoción deportiva:juegos deportivos municipales, torneos y circuitos municipales, copas de primavera, información sobre escuelas de promoción deportiva.     Ayudas técnicas de la accesibilidad:  instalación adaptada, con grúa de piscina.     Columna de rescate cardíaco.",
        "organization-name":
          "Centro Deportivo Municipal Blanca Fernández Ochoa (La Mina)",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4705-centro-deportivo-municipal-casa-campo.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "4705",
      title: "Centro Deportivo Municipal Casa de Campo",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=3876b0c40971c010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Moncloa-Aravaca/Barrio/CasaCampo",
        },
        locality: "MADRID",
        "postal-code": "28011",
        "street-address": "PASEO PUERTA DEL ANGEL 7",
      },
      location: {
        latitude: 40.41612628789201,
        longitude: -3.733536573641621,
      },
      organization: {
        "organization-desc":
          "  Metro: Lago, Puerta del Ángel.  Bus:  31, 33, 36, 39, 65, 138.   Bicicleta: el centro dispone de aparca bicicletas exterior con capacidad para 10 bicicletas.  Servicio Bicimad , para consultar la estación más cercana, acceda al  mapa de geolocalización de las estaciones",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas                   Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.   Horario de taquilla:   De lunes a viernes, de 9 a 21 horas. Horario de verano, de lunes a domingo, de 9,30 a 14 y de 16 a 20,30 horas.    Cierre completo del Centro:      Los días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas  (Suspendidas las actividades cubiertas, hasta la finalización de las obras).   Pre infantiles:  natación peques.  Infantiles  (edad, según modalidades): actividades al aire libre - clases abiertas, mountain bike, natación, salvamento acuático y waterpolo.   Jóvenes y personas adultas  : caminar por Madrid, ciclismo por Madrid, correr por Madrid, ejercicio al aire libre, entrenamiento funcional, estiramiento relajación, fitness, gimnasia acuática  (acuagim), marcha nórdica, natación, natación de compensación y natación embarazadas, tonificación GAP, tonificación general.  Mayores 65 años : actividades aire libre, acondicionamiento físico, caminar por  Madrid, marcha nórdica y natación.   Actividades para personas con discapacidad intelectual:  natación (adultos),     Equipamientos    Superficie total de las instalaciones: 24.800 metros cuadrados.  Unidades deportivas al aire libre:  piscinas (vaso de 36 x 25 metros, vaso de 33 x 16 metros y vaso infantil).   Unidades deportivas cubiertas: piscina (vaso de 25 metros), vaso de aprendizaje, sala de musculación y sala polivalente.  Ayudas técnicas para la accesibilidad:  2 grúas de piscina.",
        "organization-name": "Centro Deportivo Municipal Casa de Campo",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/78960-centro-deportivo-municipal-centro-integrado-arganzuela.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "78960",
      title: "Centro Deportivo Municipal Centro Integrado Arganzuela",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=0fd38ed67151c010VgnVCM2000000c205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Arganzuela",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Arganzuela/Barrio/PalosMoguer",
        },
        locality: "MADRID",
        "postal-code": "28045",
        "street-address": "CALLE CANARIAS 17",
      },
      location: {
        latitude: 40.40207279862862,
        longitude: -3.6955325387824014,
      },
      organization: {
        "organization-desc":
          "  Metro: Palos de la Frontera  Bus: 6, 8, 19, 45, 47, 55, 59, 85, 86, 102, 247  Renfe: Delicias.  Bicicleta: el centro dispone de aparca bicicletas exterior con capacidad para 6 bicicletas.   Servicio Bicimad , para consultar la estación más cercana, acceda al  mapa de geolocalización de las estaciones .",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas   Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla   De lunes a viernes, de 9 a 21 horas. Sábados, domingos y festivos de 9 a 14:30 horas.   Cierre completo del centro   Días 24, 25 y 31 de diciembre, 1, 2 y 6 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas       Pre-infantiles:( 2 a 3 años) matronatación y natación peques.  Infantiles:  (edad, según modalidad) baloncesto, natación, pádel, taekwondo, unihockey y voleibol.   Jóvenes y personas adultas : aeróbic, fitness, GAP (glúteos, abdomen, piernas), gimnasia acuática (acuagim), gimnasia suave, natación, natación de compensación, natación embarazadas, pádel y pilates.   Mayores 65 años : acondicionamiento físico y natación.   Actividades para personas con discapacidad física:  natación (adultos e infantil).    Equipamientos    Superficie total de todas las instalaciones: 4.900 metros cuadrados.  Unidades deportivas al aire libre  4 Pistas de Pádel (cristal).   Unidades deportivas cubiertas:   pabellón polideportivo, piscina (vaso de 25 metros y vaso de enseñanza), fisio, hidroterapia, sala multiusos y 2 salas de musculación.    Oficina de promoción deportiva:    responsable de la coordinación de Juegos Deportivos Municipales, Torneos y Circuitos Municipales, Copas de Primavera. Además, ofrece información sobre las escuelas de promoción deportiva.      Columna de rescate cardíaco.",
        "organization-name":
          "Centro Deportivo Municipal Centro Integrado Arganzuela",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4687-centro-deportivo-municipal-cerro-almodovar.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "4687",
      title: "Centro Deportivo Municipal Cerro Almodóvar",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=8e96b0c40971c010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/VillaDeVallecas",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/VillaDeVallecas/Barrio/SantaEugenia",
        },
        locality: "MADRID",
        "postal-code": "28007",
        "street-address": "CALLE CERRO DE ALMODOVAR 9",
      },
      location: {
        latitude: 40.38168570611539,
        longitude: -3.602336460953483,
      },
      organization: {
        "organization-desc": "  Bus: 58, 63, 145  Renfe: Santa Eugenia",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas   Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.   Horario de taquilla  De lunes a viernes: de 9 a 20,30 horasSábados, domingos y festivos: cerrado  Cierre completo del centro   Días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo",
        services:
          "Clases y escuelas deportivas    Pre-infantiles (de 0 a 3 años): matronatación y natación.  Infantiles (edad, según modalidades): baloncesto, gimnasia artística, gimnasia rítmica, karate,  natación,  pretenis, tenis y salvamento acuático.  Jóvenes y personas adultas: actividad acuática, aeróbic,  fitness, gap (glúteos, abdomen, piernas), gimnasia acuática (acuagim), gimnasia suave,  karate,  natación,  natación embarazadas y postparto,  pilates y tenis.  Mayores 65 años: acondicionamiento físico, gimnasia acuática (acuagim), y natación.  Personas con discapacidad: natación (infantiles y adultas).  Servicio de Medicina Deportiva: psicomotricidad infantil.   Equipamientos    Superficie total de las instalaciones: 61.600  metros cuadrados.  Unidades deportivas al aire libre: frontón corto, piscina (vaso de 42 metros, vaso de recreo y vaso infantil), 4 pistas de pádel (cristal), 2 pistas polideportivas (tenis) y 2 tenis de mesa.  Unidades deportivas cubiertas: aula de psicomotricidad, pabellón polideportivo, piscina (vaso de 25 m. y vaso de enseñanza), sala de halterofilia, sala multiusos (aeróbic), sala de musculación.   Oficina de Promoción Deportiva: responsable de la coordinaciónde Juegos Deportivos Municipales, Torneos y Circuitos municipales y Copas de Primavera. Además, ofrece información sobre Escuelas de Promoción Deportiva.  Ayudas técnicas para la accesibilidad:  1 grúa de piscina.  Columna de rescate cardíaco.",
        "organization-name": "Centro Deportivo Municipal Cerro Almodóvar",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4700-centro-deportivo-municipal-chamartin.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "4700",
      title: "Centro Deportivo Municipal Chamartín",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=5f8c79262ef5d010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamartin",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Chamartin/Barrio/NuevaEspana",
        },
        locality: "MADRID",
        "postal-code": "28016",
        "street-address": "AVENIDA PIO XII 2",
      },
      location: {
        latitude: 40.46113349830694,
        longitude: -3.676208246061129,
      },
      organization: {
        "organization-desc":
          "  Metro: Pío XII.  Bus: 16 , 29 , 51 , 150.  Bicicleta:  El centro dispone de aparcabicicletas interior con capacidad para 12 bicicletas.  Servicio Bicimad, para consultar la estación más cercana, acceda al mapa de geolocalización de las estaciones.",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas  Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla   De lunes a viernes de 7 a 22,45 horas, sábados de 8 a 20,45 horas, domingos y festivos de 8 a 14,45 horas.   Cierre completo del centro    Días 25 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas    Pre-infantiles (4 años): educación física de base y natación.  Infantiles  (edad, según modalidades): aeróbic, baloncesto, fútbol sala, gimnasia rítmica, judo, natación, natación sincronizada, polideportiva y taekwondo.  Jóvenes y personas adultas aeróbic/zumba, baloncesto, ciclo sala, fitness/cross training, gap (glúteos, abdomen, piernas), natación, taekwondo, acondicionamiento físico, aeróbic/ sh&amp;rsquo;bam, aeróbic/zumba, actividad acuática, acuagim, acuafitness, ciclo sala, fitness /combinada (body combat/cxwork), fitness/ body combat, fitness /cross training, gap (glúteos, abdomen, piernas), gimnasia suave/body balance, natación, natación/tecnificación, natación de compensación, natación embarazadas, pilates, tonificación/ body pump, tonificación (body pump/cxworx) y yoga.   Mayores 65 años: actividad física, gimnasia de compensación, natación y pilates.  Programas deportivos en la calle: fitness/running.   Equipamientos    Superficie total de las instalaciones: 6.172 metros cuadrados.  Unidades deportivas cubiertas:  pabellón polideportivo, piscina  (vaso de 50 metros distribuido en calles de 25 metros y 22,5 metros), 4 salas multiusos, 2 salas de musculación y zona termal (spa).   Servicio de medicina deportiva:  fisioterapia deportiva y escuela de espalda.   Ayudas técnicas para la accesibilidad:  instalación adaptada, con 1 ascensor y 1 grúa de piscina.",
        "organization-name": "Centro Deportivo Municipal Chamartín",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4672-centro-deportivo-municipal-concepcion.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "4672",
      title: "Centro Deportivo Municipal Concepción",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=f5bc79262ef5d010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/CiudadLineal",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/CiudadLineal/Barrio/Concepcion",
        },
        locality: "MADRID",
        "postal-code": "28027",
        "street-address": "CALLE JOSE DEL HIERRO 5",
      },
      location: {
        latitude: 40.43725652047252,
        longitude: -3.6484498132292025,
      },
      organization: {
        "organization-desc":
          "  Metro: Barrio de la Concepción, Pueblo Nuevo, Quintana.  Bus: 21 ,146, 48.  Bicicleta: el centro dispone de aparca bicicletas,    exterior con capacidad para 11 bicicletas.  interior con capacidad para 6 bicicletas.    Servicio Bicimad , para consultar la estación más cercana, acceda al  mapa de geolocalización de las estaciones .",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas  Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla   De lunes a viernes, de 8:30 a 14:30 y de 14:45 a 21:00 horas. Sábados, domingos y festivos: de 8:30 a 15:00 horas.   Cierre completo del centro   Días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas    Pre infantiles (4 y 5 años): natación.  Infantiles (edad, según modalidades): baloncesto, fútbol, gimnasia rítmica, karate, natación, polideportiva, pre tenis y tenis.  Jóvenes y personas adultas: aeróbic, fitness, gimnasia acuática  (acuagim), karate, natación, natación de compensación, natación embarazada, pádel, pilates, tenis y yoga.  Mayores 65 años: acondicionamiento físico y natación.  Personas con discapacidad: natación.    Equipamientos     Superficie  total de las instalaciones: 36.277 metros cuadrados.  Unidades deportivas al aire libre:campo de fútbol de césped artificial, 2 frontones cortos, piscina (vaso de 25 metros y vaso infantil), 3 calles de atletismo, 2 pistas de pádel, pista de patinaje, 2 pistas polideportivas y 4 pistas de tenis.  Unidades deportivas cubiertas: pabellón polideportivo, piscina (vaso de 25 metros) y sala de musculación.  Oficina de Promoción Deportiva: responsable de la coordinación de Juegos Deportivos Municipales, Torneos y Circuitos municipales y Copas de Primavera. Además, ofrece información sobre Escuelas de Promoción Deportiva.  Servicio de Medicina deportiva: acondicionamiento cardio-vascular y reconocimientos médicos para deportistas.   Ayudas técnicas para la accesibilidad:   1 ascensor, 1 montacargas, 2 plataformas y 2 grúas de piscina.      Columna de rescate cardíaco.",
        "organization-name": "Centro Deportivo Municipal Concepción",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/134059-centro-deportivo-municipal-daoiz-velarde-1.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "134059",
      title: "Centro Deportivo Municipal Daoíz y Velarde 1",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=380d5f463b81c010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Retiro",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Retiro/Barrio/Pacifico",
        },
        locality: "MADRID",
        "postal-code": "28007",
        "street-address": "PLAZA DAOÍZ Y VELARDE 5",
      },
      location: {
        latitude: 40.40236990974131,
        longitude: -3.6772808932293217,
      },
      organization: {
        "organization-desc":
          "  Metro: Pacífico, Menéndez Pelayo Bus: 37, 57, 10, 54, 24, 141  Renfe: Méndez Alvaro, Atocha  Bicicleta: el centro dispone de aparcabicicletas exterior con capacidad para 5 bicicletas.   Servicio Bicimad, para consultar la estación más cercana, acceda al mapa de geolocalización de las estaciones.",
        accesibility: "1,5,6",
        schedule:
          "Horario de uso de las instalaciones deportivas    Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla    De lunes a viernes de 9 a 20,30 horas. Sábados, domingos y festivos de 9 a 20,30 horas.   Cierre completo del centro     Mes de agosto y los días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas     Pre-infantiles: (de 0 a 3 años): matronatación y natación.  Infantiles (edad, según modalidades): aeróbic, baloncesto, natación, natación sincronizada,  polideportiva y salvamento acuático.  Jóvenes y personas adultas: carrera acuática (acuarunning), ciclo sala, fitness, gimnasia acuática  (acuagim), gimnasia de compensación, natación, natación de compensación, natación embarazada, pilates/estiramientos y tonificación.  Mayores 65 años: acondicionamiento físico, gimnasia acuática (acuagim), natación y pilates.  Personas con discapacidad intelectual: baloncesto.   Equipamientos    Superficie total de las instalaciones: 9.496 metros cuadrados.  Unidades deportivas al aire libre: 1 pista de pádel (cristal).  Unidades deportivas cubiertas: 1 pabellón polideportivo, 1 piscina (vaso de 25 m. y vaso de enseñanza), 2 salas multiusos, 1 sala de musculación, 2 saunas, y 1 sala de fisioterapia/hidroterapia (fuera de servicio).  Oficina de promoción deportiva: responsable de la coordinación de Juegos Deportivos Municipales, Torneos y Circuitos Municipales, Copas de Primavera. Además, ofrece información sobre las escuelas de promoción deportiva.   Servicio de Medicina Deportiva: acondicionamiento cardiovascular, fisioterapia del deporte, psicomotricidad y reconocimientos médicos para deportistas.  Ayudas técnicas para la accesibilidad: 1 ascensor y 1 grúa de piscina.  C olumna de rescate cardíaco.",
        "organization-name": "Centro Deportivo Municipal Daoíz y Velarde 1",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/140197-centro-deportivo-municipal-espinillo.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Piscinas",
      id: "140197",
      title: "Centro Deportivo Municipal El Espinillo",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=9cdc79262ef5d010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Villaverde",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Villaverde/Barrio/LosRosales",
        },
        locality: "MADRID",
        "postal-code": "28041",
        "street-address": "CARRETERA VILLAVERDE A VALLECAS 19",
      },
      location: {
        latitude: 40.35634193991933,
        longitude: -3.686595141820635,
      },
      organization: {
        "organization-desc":
          "  Bus: 23, 123, 130  Metro: Villaverde Bajo Cruce  Renfe: Villaverde Bajo  Bicicleta: el centro dispone de aparca bicicletas interior con capacidad para 4 bicicletas.",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas  Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla   De lunes a viernes, de 9,30 a 20,30 horas. Sábados y domingos de 9,30 a 14,15 horas. Festivos, cerrado.   Cierre completo del centro   Mes de agosto y los días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas    Pre-infantiles (de 2 a 3 años): matronatación y natación.  Infantiles (edad, según modalidades): natación y salvamentoacuático.  Jóvenes y personas adultas: aeróbic, carrera acuática (acuarunning), aeróbic, combinada (fitness y natación), fitness, gimnasia acuática  (acuagim), gimnasia de compensación, natación, natación embarazadas, pilates y salvamento acuático.  Mayores 65 años: gimnasia acuática (acuagim) y natación.  Personas con discapacidad: natación (infantil y adulta).  Programa deportivo en la calle:  caminar por Madrid.    Equipamientos    Superficie total de las instalaciones: 11.350 metros cuadrados.  Unidades deportivas cubiertas: piscina (vaso de 25 metros y vaso de enseñanza) y 2 salas multiusos.  Oficina de promoción deportiva: responsable de la coordinación de Juegos Deportivos Municipales, Torneos y Circuitos Municipales, Copas de Primavera. Además, ofrece información sobre las escuelas de promoción deportiva.  Servicio de medicina deportiva: psicomotricidad infantil.  Ayudas técnicas para la accesibilidad: 1 ascensor y 1 grúa de piscina.  Columna de rescate cardíaco.",
        "organization-name": "Centro Deportivo Municipal El Espinillo",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/4676-centro-deportivo-municipal-entrevias.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/CamposEstadiosFutbol",
      id: "4676",
      title: "Centro Deportivo Municipal Entrevías",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=1e57b0c40971c010VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/PuenteDeVallecas",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/PuenteDeVallecas/Barrio/Entrevias",
        },
        locality: "MADRID",
        "postal-code": "28053",
        "street-address": "RONDA SUR 4",
      },
      location: {
        latitude: 40.378413212706285,
        longitude: -3.674532317137481,
      },
      organization: {
        "organization-desc":
          "  Bus: 24, 102, 103, 111.  Renfe: Asamblea de Madrid - Entrevías.  Bicicleta:  El centro dispone de aparca bicicletas exterior con capacidad para 5 bicicletas.  Servicio Bicimad, para consultar la estación más cercana, acceda al mapa de geolocalización de las estaciones.",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas   Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla    De lunes a domingo: de 8:30 a 14,30 y de 14:45 a 20:45 horas.     Cierre completo del centro      Los días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas    Pre infantiles  actividad física y juegos, matrogimnasia, matronatación y natación peques.  Infantiles (edad, según modalidades): natación, fútbol, hábitos saludables,  polideportiva, pretenis, tenis y voleibol.  Jóvenes y personas adultas: acondicionamiento de nadadores, combinada (acuagim-fitness, natación-pilates), fitness, fútbol, hábitos saludables, natación, natación embarazadas, pilates y tenis.  Mayores 65 años: acondicionamiento físico, hábitos saludables, natación y pilates.  Personas con discapacidad: natación.  Programa deportivo en la calle:  caminar por Madrid.    Equipamientos     Superficie total de las instalaciones:  41.800 metros cuadrados.  Unidades deportivas al aire libre: 1 campo de fútbol (de césped artificial), piscina (vaso de 50 metros y vaso infantil), 2 pistas de tenis y tenis de mesa.  Unidades deportivas cubiertas: pabellón polideportivo, piscina (vaso de 25 metros y vaso de enseñanza), 1 pista polideportiva, 2 salas multiusos y sala de musculación.  Oficina de promoción deportiva:  responsable de la coordinación de Juegos Deportivos Municipales, Torneos y Circuitos Municipales, Copas de Primavera. Además, ofrece información sobre las escuelas de promoción deportiva.  Ayuda técnica para la accesibilidad:  1 ascensor y 1 grúa de piscina.  Columna de rescate cardíaco.",
        "organization-name": "Centro Deportivo Municipal Entrevías",
      },
    },
    {
      "@id":
        "https://datos.madrid.es/egob/catalogo/tipo/entidadesyorganismos/6486044-centro-deportivo-municipal-escuelas-san-anton.json",
      "@type":
        "https://datos.madrid.es/egob/kos/entidadesYorganismos/CentrosEspaciosDeporte/Gimnasios",
      id: "6486044",
      title: "Centro Deportivo Municipal Escuelas de San Antón",
      relation:
        "http://www.madrid.es/sites/v/index.jsp?vgnextchannel=bfa48ab43d6bb410VgnVCM100000171f5a0aRCRD&vgnextoid=4f9aad5078828310VgnVCM1000000b205a0aRCRD",
      address: {
        district: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro",
        },
        area: {
          "@id":
            "https://datos.madrid.es/egob/kos/Provincia/Madrid/Municipio/Madrid/Distrito/Centro/Barrio/Justicia",
        },
        locality: "MADRID",
        "postal-code": "28004",
        "street-address": "CALLE FARMACIA 13",
      },
      location: {
        latitude: 40.42382670120857,
        longitude: -3.699010103263697,
      },
      organization: {
        "organization-desc":
          "  Bus: 3.  Metro: Chueca y Tribunal.  Bicicleta:   Servicio Bicimad, para consultar la estación más cercana, acceda al mapa de geolocalización de las estaciones.",
        accesibility: "1",
        schedule:
          "Horario de uso de las instalaciones deportivas:   Para saber el horario de apertura de las distintas instalaciones del centro deportivo, les rogamos lo consulten con el propio centro.  Horario de taquilla   De lunes a viernes, de 7 a 22,30 horas. Sábados, de 8 a 20,30 horas. Domingos y festivos, de 9 a 18,30 horas.   Cierre completo del centro   Los días 24, 25 y 31 de diciembre, 1 de enero y 1 de mayo.",
        services:
          "Clases y escuelas deportivas    Pre infantiles: (0 a 3 años) natación.  Infantiles (edad, según modalidades): natación.  Personas jóvenes y adultas: gimnasia acuática (acuagim), natación, natación de compensación y natación embarazadas.  Mayores 65 años: gimnasia acuática (acuagim) y natación.  Actividades para personas con discapacidad física: natación.  Actividades para personas con discapacidad Intelectual:   natación.     Equipamientos    Superficie total de las instalaciones:   Planta tercera: 971,29 metros cuadrados. Planta cuarta: 976,21 metros cuadrados. Entreplanta cuarta: 291,28 metros cuadrados.     Unidades deportivas cubiertas:  piscina (vaso de 25 metros y vaso de enseñanza), sala musculación y  zona spa.  Solárium.   Ayudas técnicas para la accesibilidad:  1 ascensor y 1 grúa de piscina.    Columna de rescate cardíaco.",
        "organization-name": "Centro Deportivo Municipal Escuelas de San Antón",
      },
    },
  ];

 //return fetch("https://random-data-api.com/api/bank/random_bank", {
  return fetch(corsAnywhere + poolUrl, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      const allPool = //jsonCopi.map((pool) => {
        json["@graph"].map((pool) => {
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
