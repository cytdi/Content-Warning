import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slika from "../cw-logo.png";

import Slika2 from "../Steam_icon_logo.svg.png";
import Slika3 from "../insta.webp";
import Slika4 from "../fb.png";

export class Signup extends Component {
  state = { ime: "Ivana", prezime: "", lozinka: "" };
  onSumbit = (e) => {
    e.preventdefault();
    console.log("Forma je potvrđena", this.state.ime);
  };
  render() {
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
        <div class="sign">
          <h1> Prijavite se {this.state.ime} </h1>
          <form>
            <input
              className="ime input"
              placeholder="Ime"
              value={this.state.ime}
              onChange={(e) => this.setState({ ime: e.target.value })}
            />
            <br />
            <input
              className="input"
              placeholder="Prezime"
              value={this.state.prezime}
              onChange={(e) => this.setState({ prezime: e.target.value })}
            />
            <br />
            <input
              className="input"
              placeholder="Lozinka"
              value={this.state.lozinka}
              onChange={(e) => this.setState({ lozinka: e.target.value })}
            />
            <br />
            <button className="potvrdi" onClick={(e) => this.onSubmit(e)}>
              Potvrdi
            </button>
          </form>
          <br />
          <Link to="/">Povratak na naslovnu</Link>
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
}
export default Signup;
