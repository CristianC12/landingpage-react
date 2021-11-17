import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

const CarouselContainer = () => {
  return (
    <>
      <section className="carrosselDeFotos">
        <a id="galeria" />
        <h1 className="titulo tituloCarrossel">
          Galeria
        </h1>
        <Carousel>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 999px)"
                srcset="https://i.imgur.com/OD6STcP.png"
              />
              <img
                className="d-block center"
                src="https://i.imgur.com/wS4h0Ge.png"
                alt="desfile"
              />
            </picture>
            <Carousel.Caption className="fraseCarrossel">
              <h3>Tradição</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 999px)"
                srcset="https://i.imgur.com/Ml1iOgQ.png"
              />
              <img
                className="d-block center"
                src="https://i.imgur.com/LGnPW0m.png"
                alt="Canecas brindado"
              />
            </picture>
            <Carousel.Caption className="fraseCarrossel">
              <h3>Bebida</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 999px)"
                srcset="https://i.imgur.com/E8CGA4g.png"
              />
              <img
                className="d-block center"
                src="https://i.imgur.com/yJiMYCC.png"
                alt="Third slide"
              />
            </picture>
            <Carousel.Caption className="fraseCarrossel">
              <h3>Festa</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 999px)"
                srcset="https://i.imgur.com/c0Er4tm.png"
              />
              <img
                className="d-block center"
                src="https://i.imgur.com/qHKJixg.png"
                alt="desfile"
              />
            </picture>
            <Carousel.Caption className="fraseCarrossel">
              <h3>Dança</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 999px)"
                srcset="https://i.imgur.com/9NTpnJW.png"
              />
              <img
                className="d-block center"
                src="https://i.imgur.com/WyVJgQO.png"
                alt="desfile"
              />
            </picture>
            <Carousel.Caption className="fraseCarrossel">
              <h3>Desfile</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default CarouselContainer;
