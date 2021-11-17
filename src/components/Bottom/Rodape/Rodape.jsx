import React from 'react';
import './style.css';

let rodapeLogo = ["https://i.imgur.com/y0FgKMG.png", "https://i.imgur.com/n8MZQKM.png"]

function Rodape() {
    return(
        <footer>
            <picture> <source media="(max-width: 768px)" srcset={rodapeLogo[1]}/> <img src={rodapeLogo[0]} class="rodape-img" />
            </picture>
            <p class="copyright">&copy; Copyright squad 8 - 2021</p>
        </footer>
    );
}
export default Rodape;