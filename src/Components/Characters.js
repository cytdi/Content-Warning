import Objekti from "./Objekti";
import Slika from "../cw-logo.png";

import Slika2 from "../Steam_icon_logo.svg.png";
import Slika3 from "../insta.webp";
import Slika4 from "../fb.png";

import M1 from "./slime.webp";
import M2 from "./snail.webp";
import M3 from "./snake.webp";
import M4 from "./iron.webp";
import M5 from "./dog.webp";
import M6 from "./knife.webp";
import M7 from "./star.webp";
import M8 from "./blender.webp";
import M9 from "./ear.webp";
import M10 from "./smile.webp";
import M11 from "./bomber.webp";
import M12 from "./spider.webp";
import M13 from "./gravity.webp";
import M14 from "./man.webp";
import M15 from "./fly.webp";
import M16 from "./flicker.webp";
import M17 from "./angler.jpg";
import M18 from "./mime.webp";
import M19 from "./stream.jpg";
import M20 from "./worm.webp";
import M21 from "./fire.webp";

export default function Characters() {
  let Stvorenja = {
    m1: "Slime Critter",
    m2: "Snail Man",
    m3: "Grabber Snake",
    m4: "Iron Maiden",
    m5: "Robot Attack Dog",
    m6: "Knife Ghost",
    m7: "Ceiling Star",
    m8: "Blender Head",
    m9: "Smiling Little Screamer",
    m10: "Bomber",
    m11: "The Spider",
    m12: "Gravity Monster",
    m13: "Flicker",
    m14: "Angler",
    m15: "Mime",
    m16: "Streamer",
    m17: "Worm",
    m18: "Fire Beast",
    m19: "The Snatcher",
    m20: "Grown-Up Knife Ghost",
    m21: "Puff Ball",
    m22: "The Creep",
  };
  return (
    <div class="cahracters">
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
      <div class="pozadina">
        <h1 class="stvorenja">Stvorenja</h1>
        <p class="malitxt">
          Svijet Content Warninga ispunjen je čudovištima koja vrebaju iz sjene.
          Ponašanje ovih stvorenja varira od agresivnog do gorljivo smrtonosnog.
          Ne uzrokuju sva čudovišta štetu, iako bez obzira na što naiđete, vi i
          vaša posada ćete se suočiti s nekim izazovima (i velikom prilikom za
          snimanje).
        </p>
        <div class="likovi">
          <div class="likovi-item">
            <h1>Slime Critter </h1>
            <img src={M1} />
          </div>
          <div class="likovi-item">
            <h1>Snail Man </h1>
            <img src={M2} />
          </div>
          <div class="likovi-item">
            <h1>Grabber Snake </h1>
            <img src={M3} />
          </div>
          <div class="likovi-item">
            <h1>Iron Maiden </h1>
            <img src={M4} />
          </div>
          <div class="likovi-item">
            <h1>Robot Attack Dog </h1>
            <img src={M5} />
          </div>
          <div class="likovi-item">
            <h1>Knife Ghost </h1>
            <img src={M6} />
          </div>
          <div class="likovi-item">
            <h1>Ceiling Star </h1>
            <img src={M7} />
          </div>
          <div class="likovi-item">
            <h1>Blender Head </h1>
            <img src={M8} />
          </div>
          <div class="likovi-item">
            <h1>Ear Monster </h1>
            <img src={M9} />
          </div>
          <div class="likovi-item">
            <h1>Smiling Little Screamer </h1>
            <img src={M10} />
          </div>
          <div class="likovi-item">
            <h1>Bomber </h1>
            <img src={M11} />
          </div>
          <div class="likovi-item">
            <h1>The Spider </h1>
            <img src={M12} />
          </div>
          <div class="likovi-item">
            <h1>Gravity Monster </h1>
            <img src={M13} />
          </div>
          <div class="likovi-item">
            <h1>Tall Man </h1>
            <img src={M14} />
          </div>
          <div class="likovi-item">
            <h1>The Fly </h1>
            <img src={M15} />
          </div>
          <div class="likovi-item">
            <h1>Flicker </h1>
            <img src={M16} />
          </div>
          <div class="likovi-item">
            <h1>Angler </h1>
            <img src={M17} />
          </div>
          <div class="likovi-item">
            <h1>Mime </h1>
            <img src={M18} />
          </div>
          <div class="likovi-item">
            <h1>Streamer </h1>
            <img src={M19} />
          </div>
          <div class="likovi-item">
            <h1>Worm </h1>
            <img src={M20} />
          </div>
          <div class="fire likovi-item">
            <h1>Fire Beast </h1>
            <img src={M21} />
          </div>
        </div>
      </div>

      <Objekti props={Stvorenja} />
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
