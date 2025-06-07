import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slika from "../cw-logo.png";
import Slika2 from "../Steam_icon_logo.svg.png";
import Slika3 from "../insta.webp";
import Slika4 from "../fb.png";

export class Signup extends Component {
  state = { 
    ime: "", 
    prezime: "", 
    email: "", 
    lozinka: "",
    message: "",
    isSuccess: false
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost/CONTENT-WARNING/api/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: this.state.ime,
          last_name: this.state.prezime,
          email: this.state.email,
          password: this.state.lozinka
        })
      });
      
      const data = await response.json();
      
      if(data.status === 'success') {
        this.setState({
          message: 'Registration successful!',
          isSuccess: true,
          ime: '',
          prezime: '',
          email: '',
          lozinka: ''
        });
      } else {
        this.setState({
          message: data.message,
          isSuccess: false
        });
      }
    } catch (error) {
      this.setState({
        message: 'An error occurred. Please try again.',
        isSuccess: false
      });
    }
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
          <img class="logo" src={Slika} alt="Logo" />
          <br />
          <p class="imme">Ivana Bilić</p>
        </div>
        <div class="sign">
          <h1> Prijavite se </h1>
          {this.state.message && (
            <div className={this.state.isSuccess ? "success-message" : "error-message"}>
              {this.state.message}
            </div>
          )}
          <form onSubmit={this.handleSubmit}>
            <input
              className="ime input"
              placeholder="Ime"
              value={this.state.ime}
              onChange={(e) => this.setState({ ime: e.target.value })}
              required
            />
            <br />
            <input
              className="input"
              placeholder="Prezime"
              value={this.state.prezime}
              onChange={(e) => this.setState({ prezime: e.target.value })}
              required
            />
            <br />
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
            <br />
            <input
              className="input"
              type="password"
              placeholder="Lozinka"
              value={this.state.lozinka}
              onChange={(e) => this.setState({ lozinka: e.target.value })}
              required
            />
            <br />
            <button className="potvrdi" type="submit">
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
                  <img class="ikone facebook" src={Slika4} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://store.steampowered.com">
                  <img class="ikone" src={Slika2} alt="Steam" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <img class="ikone" src={Slika3} alt="Instagram" />
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