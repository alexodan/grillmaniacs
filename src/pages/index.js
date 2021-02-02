import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  bestGrills2020,
  amazonProducts,
  categories,
  entry,
  barbecueGuides
} from "../constants";
import TextContainer from "../components/TextContainer";
import CardsGrid from "../components/CardsGrid";
import ProductGallery from "../components/ProductGallery";
import Grid from "../components/Grid";
import BlogPostEntry from "../components/BlogPostEntry";

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
    <BlogPostEntry>
      <h2 className="emphasized">
        Tipos y modelos de barbacoa: Pros y Contras
      </h2>
      <p>
        Puedes encontrar la barbacoa que necesitas según los siguientes
        criterios:
      </p>
      <img src={entry.img} alt="Parilla" />
      <ul>
        <li>
          Según su combustible, como el gas, la madera o leña y el carbón. Sin
          duda el principal factor ya que incide directamente tanto en la
          utilización como en el mantenimiento y el sabor de tus barbacoas.
        </li>
        <li>
          También puedes buscar barbacoas según sus materiales, de esta forma
          podrás encontrar barbacoas de obra, prefabricadas o metálicas de acero
          inoxidable.
        </li>
        <li>
          Otra forma de clasificación de las barbacoas es según el uso que vayas
          a darle, como las barbacoas de interior, de jardín o las portátiles.
        </li>
        <li>
          Finalmente las barbacoas se pueden clasificar por sus fabricantes,
          entre los que destacan marcas como Leroy Merlin, Bauhaus, Aki,
          Barbecook, Char Griller, Dancook, Fesfoc, Invicta y muchas otras.
        </li>
        <li>
          Otro criterio que no debemos olvidar es el precio, te mostraremos las
          mejores barbacoas según su relación calidad-precio, las ofertas más
          económicas que podrás encontrar en una selección realizada en diversas
          tiendas de barbacoas online.
        </li>
      </ul>
      <p>
        Nosotros te ayudaremos a encontrar esa barbacoa perfecta que lleva tu
        nombre y con la que compartirás tantos buenos momentos ¡y comilonas!
      </p>
    </BlogPostEntry>
    {/*  */}
    <TextContainer title="Guías para que te conviertas en un experto de la barbacoa:">
      <CardsGrid items={barbecueGuides} />
    </TextContainer>
  </main>
);
