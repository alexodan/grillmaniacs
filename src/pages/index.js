import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { bestGrills2020, amazonProducts, categories } from "../constants";
import TextContainer from "../components/TextContainer";
import CardsGrid from "../components/CardsGrid";
import ProductGallery from "../components/ProductGallery";
import Grid from "../components/Grid";

export default () => (
  <main>
    <TextContainer
      title="Para Fanáticos de las Barbacoas"
      paragraphs={[
        "Las barbacoas o bbq son más que un utensilio de cocina, las barbacoas son reuniones con amigos, familiares y sonrisas de tardes soleadas, una buena comida y cervezas al sol. Si eres amante del mundo de las barbacoas, esta es tu web.",
        "Te mostraremos todos los trucos, modelos y recetas para que tu barbacoa sea la guinda de un día perfecto."
      ]}
    />
    {/*  */}
    <TextContainer title="Análisis de las mejores barbacoas de 2020:">
      <CardsGrid items={bestGrills2020} />
    </TextContainer>
    {/*  */}
    <TextContainer title="Catálogo de barbacoas al mejor precio:">
      <ProductGallery products={amazonProducts} />
    </TextContainer>
    {/*  */}
    <TextContainer
      title="¿Cuál es tu barbacoa ideal?"
      paragraphs={[
        "Hay infinidad de modelos así que es normal que no sepas qué barbacoa comprar que responda mejor a tus necesidades. En Barbacoas.online las hemos clasificado para que encuentres lo que buscas."
      ]}
    >
      <Grid cards={categories} />
    </TextContainer>
  </main>
);
