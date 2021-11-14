import React from "react";
import { Carousel } from "react-bootstrap";
import './style.css'


const CarouselContainer = () => {
    return ( <
        >
        <
        h1 className = "titulo"
        id = "galeria" >
        Galeria <
        /h1> <
        h2 id = "subGaleria" >
        Desde 1988, < br / > espalhar a alegria é a nossa tradição!
        <
        /h2> <
        section className = "carrosselFundo" >
        <
        Carousel >
        <
        Carousel.Item interval = { 2000 } >
        <
        picture >
        <
        source media = "(max-width: 999px)"
        srcset = "https://i.imgur.com/OD6STcP.png" /
        >
        <
        img className = "d-block center"
        src = "https://i.imgur.com/wS4h0Ge.png"
        alt = "desfile" /
        >
        <
        /picture> <
        Carousel.Caption >
        <
        h3 > tradição < /h3> <
        p > Mais do que uma festa, uma celebração das tradições < /p> <
            /Carousel.Caption> <
            /Carousel.Item> <
            Carousel.Item interval = { 2000 } >
            <
            picture >
            <
            source
        media = "(max-width: 999px)"
        srcset = "https://i.imgur.com/Ml1iOgQ.png" /
        >
        <
        img className = "d-block center"
        src = "https://i.imgur.com/LGnPW0m.png"
        alt = "Canecas brindado" /
        >
        <
        /picture> <
        Carousel.Caption >
        <
        h3 > Second slide label < /h3> <
        p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        Carousel.Item interval = { 2000 } >
        <
        picture >
        <
        source media = "(max-width: 999px)"
        srcset = "https://i.imgur.com/cXZbBsX.png" /
        >
        <
        img className = "d-block center"
        src = "https://i.imgur.com/hnQfTuP.png"
        alt = "Third slide" /
        >
        <
        /picture> <
        Carousel.Caption >
        <
        h3 > Third slide label < /h3> <
        p >
        Praesent commodo cursus magna, vel scelerisque nisl consectetur. <
        /p> <
        /Carousel.Caption> <
        /Carousel.Item> <
        /Carousel> <
        /section> <
        />
    );
}

export default CarouselContainer;