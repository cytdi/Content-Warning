import Slika from "../cw-logo.png";

import Slika2 from "../Steam_icon_logo.svg.png";
import Slika3 from "../insta.webp";
import Slika4 from "../fb.png";

import { Link } from "react-router-dom";
export default function Pocetna({}) {
  return (
    <div>
      <div class="header">
        <a href="/" class="header-item">
          Početna
        </a>

        <a href="/about" class="header-item">
          O igri
        </a>
        <a href="/characters" class="header-item">
          Stvorenja
        </a>
        <a class="header-item signup" href="/iskustva">
          Iskustva
        </a>
        <a class="header-item" href="/signup">
          Prijavi se
        </a>
        <img class="logo" src={Slika} />
        <br />
        <p class="imme">Ivana Bilić</p>
      </div>
      <div class="pocetna">
        <h2 class="poc-text">
          <a href="https://landfall.se/content-warning">Content Warning</a> je
          kooperativna survival-horor video igra iz 2024 objavio Landfall
          Publishing. Objavljen je 1. travnja 2024. kao dio Landfallove
          tradicije izdavanja igre na 1 April.
        </h2>
        <iframe
          width="700"
          height="415"
          src="https://www.youtube.com/embed/yizyLYkZAAg"
          title="Content Warning - Official Trailer"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <ul className="contact-list">
            <li>
              <a href="https://www.facebook.com/">
                <img class="ikone facebook" src={Slika4} />
              </a>
            </li>
            <li>
              <a href="https://store.steampowered.com">
                <img class="ikone" src={Slika2} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img class="ikone" src={Slika3} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
