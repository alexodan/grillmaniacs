import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TextContainer from "../components/TextContainer";
import Card from "../components/Card";

const bestGrills2020 = [
  {
    title:
      "Tepro Toronto Click 2020: la mejor Barbacoa de carbón calidad-precio",
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
      {bestGrills2020.map(grill => (
        <Card key={grill.url} {...grill} />
      ))}
    </TextContainer>
  </main>
);
