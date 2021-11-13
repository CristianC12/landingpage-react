import React from 'react';
import './style.css';

let rodapeLogo = ["https://i.imgur.com/0hotk9w.png"]

function Rodape() {
    return(
        <footer>
            <img src={rodapeLogo[0]} class="rodape-img" />
            <p class="copyright">&copy; Copyright squad 8 - 2021</p>
        </footer>
    );
}
export default Rodape;