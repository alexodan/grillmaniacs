import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TextContainer from "../components/TextContainer";
import CardsGrid from "../components/CardsGrid";

const bestGrills2020 = [
  {
    id: 1,
    title:
      "Tepro Toronto Click 2020: la mejor Barbacoa de carbón calidad-precio",
    img:
      "https://opinionyoferta.com/wp-content/uploads/2018/10/Tepro-Toronto-Click-2018-232x300.jpg",
    url: "some-url"
  },
  {
    id: 2,
    title: "Bruzzzler | El mejor encendedor de barbacoa del 2020",
    img:
      "https://opinionyoferta.com/wp-content/uploads/2018/10/Tepro-Toronto-Click-2018-232x300.jpg",
    url: "some-url"
  },
  {
    id: 3,
    title:
      "OneConcept GQ5 | Barbacoa de carbón y ahumador a un precio imbatible",
    img:
      "https://opinionyoferta.com/wp-content/uploads/2018/10/Tepro-Toronto-Click-2018-232x300.jpg",
    url: "some-url"
  },
  {
    id: 4,
    title:
      "Landmann GrillChef | La mejor barbacoa de sobremesa del mercado en 2020",
    img:
      "https://opinionyoferta.com/wp-content/uploads/2018/10/Tepro-Toronto-Click-2018-232x300.jpg",
    url: "some-url"
  },
  {
    id: 5,
    title: "Campingaz Expert Plus, la barbacoa de piedra volcánica más potente",
    img:
      "https://opinionyoferta.com/wp-content/uploads/2018/10/Tepro-Toronto-Click-2018-232x300.jpg",
    url: "some-url"
  },
  {
    id: 6,
    title: "IMEX El Zorro 71515, ¡sencilla y práctica!",
    img:
      "https://opinionyoferta.com/wp-content/uploads/2018/10/Tepro-Toronto-Click-2018-232x300.jpg",
    url: "some-url"
  }
];

export default () => (
  <main>
    <TextContainer
      title="Para Fanáticos de las Barbacoas"
      paragraphs={[
        "Las barbacoas o bbq son más que un utensilio de cocina, las barbacoas son reuniones con amigos, familiares y sonrisas de tardes soleadas, una buena comida y cervezas al sol. Si eres amante del mundo de las barbacoas, esta es tu web.",
        "Te mostraremos todos los trucos, modelos y recetas para que tu barbacoa sea la guinda de un día perfecto."
      ]}
    />
    <TextContainer title="Análisis de las mejores barbacoas de 2020:">
      <CardsGrid items={bestGrills2020} />
    </TextContainer>
  </main>
);
