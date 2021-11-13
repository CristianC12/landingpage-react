import React from "react";
import {Carousel} from "react-bootstrap";
import './style.css'


const CarouselContainer = () => {
    return (
      <>
        <h1 className="titulo" id="galeria">
          A maior festa popular do Brasil!
        </h1>
        <h2 className="subtitulo">
          Desde 1988, espalhar a alegria é a nossa tradição!
        </h2>
        <Carousel>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 999px)"
                srcset="https://i.imgur.com/UsXOf3F.png"
              />
              <img
                className="d-block center"
                src="https://i.imgur.com/LcPw2BP.png"
                alt="Canecas Brindando"
              />
            </picture>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 999px)"
                srcset="https://i.imgur.com/dl3IzIX.png"
              />
              <img
                className="d-block center"
                src="https://i.imgur.com/zwfc5bi.png"
                alt="Comidas tradicionais"
              />
            </picture>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <picture>
              <source
                media="(max-width: 999px)"
                srcset="https://i.imgur.com/cXZbBsX.png"
              />
              <img
                className="d-block center"
                src="https://i.imgur.com/hnQfTuP.png"
                alt="Third slide"
              />
            </picture>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
}

export default CarouselContainer;