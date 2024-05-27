import Slika from "../cw-logo.png";

import Slika2 from "../Steam_icon_logo.svg.png";
import Slika3 from "../insta.webp";
import Slika4 from "../fb.png";

import slikica from "./stipe.png";
import slikica6 from "./izameneje.png";
import slikica2 from "./konfeti.png";
import slikica3 from "./punonas.png";
import slikica4 from "./ja.png";
import slikica5 from "./stipes.png";

export default function Iskustva() {
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
      <center>
        <div class="iskustva">
          <h1 class="naslov-iskustva">Moje iskustvo igranja</h1>
          <p class=" boja-siva malitxt">
            "Content Warning" je savršena igra za opuštena druženja, jer
            omogućava igračima da se povežu na novim razinama kroz zajednički
            humor i kreativnost. Čak i oni koji su u početku skeptični brzo se
            zaraze smijehom i entuzijazmom. Na kraju, svi ostaju s osjećajem da
            su proveli kvalitetno vrijeme zajedno, stvarajući nezaboravne
            uspomene.
          </p>
          <div class="funny">
            <p class="boja-siva">
              U nastavku se nalazi video o smiješnim trenucima s prijateljima:
            </p>
            <iframe
              width="720"
              height="415"
              src="https://www.youtube.com/embed/P8NMW5JdN2k"
              title="Content Warning - Official Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <p class="boja-siva malitxt">
              Igranje igre "Content Warning" s prijateljima je zaista
              jedinstveno iskustvo puno smijeha i neočekivanih preokreta. Svaka
              runda donosi nove izazove i scenarije koji tjeraju igrače na
              razmišljanje izvan okvira. Smijeh je neizbježan, jer igra često
              iznosi na vidjelo najluđe i najkreativnije razgovore. Također,
              pomaže u otkrivanju novih strana naših prijatelja koje možda nismo
              ranije primijetili.
            </p>
          </div>
          <div class="slikice">
            <img src={slikica} />
            <img src={slikica6} />
            <img src={slikica2} />
            <img src={slikica3} />
            <img src={slikica4} />
            <img src={slikica5} />
          </div>
          <div>
            <p class="boja-siva malitxt">
              Jedan od najzabavnijih trenutaka je kada svi igrači bježe od
              stvorenja, često uz dramatične izvedbe koje dodatno pojačavaju
              humor.
            </p>
          </div>
        </div>
      </center>
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
