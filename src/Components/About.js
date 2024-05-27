import Slika from "../cw-logo.png";

import Slika2 from "../Steam_icon_logo.svg.png";
import Slika3 from "../insta.webp";
import Slika4 from "../fb.png";

export default function About() {
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

      <div class="pozadina">
        <div class="div">
          <div class="livi">
            <div class="vid1">
              <h2>OVO JE PLAN!</h2>
              <p>
                Postani slavan ili umri pokušavajući! Content Warning je
                kooperativna horor igra u kojoj snimate sablasne stvari sa
                svojim prijateljima kako biste pokušali postati viralni.
              </p>
              <iframe
                class="videoo"
                width="620"
                height="415"
                src="https://images.squarespace-cdn.com/content/v1/55dc59cae4b07dc2ebbe3ea3/7e0e940f-da64-4aae-a436-7939f88a6ce0/The-Plan.gif?format=1000w"
                title="Content Warning - Official Trailer"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h1>Prvi korak: Siđite u Stari svijet</h1>
              <p class="razmak">
                Tamo dolje ćete naići na zastrašujuća fizikalno animirana
                čudovišta, uklete relikvije i druge stvari!
              </p>
              <iframe
                class="treci"
                width="700"
                height="415"
                src="https://images.squarespace-cdn.com/content/v1/55dc59cae4b07dc2ebbe3ea3/6db06ede-e72f-4913-b54a-c1f35ae3ba76/WhatCouldGoWrong.gif?format=1000w"
                title="Content Warning - Official Trailer"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h1>Treći korak: prenesite na SpöökTube</h1>
              <p class="razmak">
                Prenesite svoje snimke na SpööktTube, smjestite se na zabavu
                gledanja i pričekajte da broj gledatelja naraste!
              </p>
            </div>
          </div>
          <div class="desni">
            <div class="des1">
              <p class="film">
                Snimi svoje prijatellje dok pronalaze strašne stvari kako bi
                postali SpöökTube poznati!
              </p>
              <br />
              <ul>
                <li>2-4 igrača online</li>
                <li>Video kamera u igri</li>
                <li>Glasovni razgovor</li>
                <li>ASCII prilagodba lica</li>
                <li>Napravite i spremite snimke u igri</li>
                <li>Vaši prijatelji izgledaju i ponašaju se blesavo</li>
                <li>Zastrašujuća animirana čudovišta </li>
                <li>Zabava s prijateljima </li>
              </ul>
              <div class="vid2">
                <iframe
                  width="700"
                  height="415"
                  src="https://images.squarespace-cdn.com/content/v1/55dc59cae4b07dc2ebbe3ea3/c81a8d03-ec3f-4918-b74c-14dde201d0cf/DivingBellSmall.gif?format=1000w"
                  title="Content Warning - Official Trailer"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <h1>Drugi korak: Snimite nešto zastrašujuće </h1>
            <p>
              Snimite što više strašnih stvari prije nego ostanete bez kisika,
              baterije kamere ili prijatelja…
            </p>
            <iframe
              class="treci"
              width="700"
              height="415"
              src="https://images.squarespace-cdn.com/content/v1/55dc59cae4b07dc2ebbe3ea3/ddaab01a-87cc-4a6c-a1e3-4d34cd26f57a/watchparty.gif?format=1000w"
              title="Content Warning - Official Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
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
