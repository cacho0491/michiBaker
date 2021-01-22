import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

import styles from "./Navbar.module.css";
import Button from "../components/Button";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={styles.navBar}>
          <div>
            <Link to="/" className="navbar-item" title="Logo">
              <h1 className={styles.logo}>michiChef</h1>
              {/* <img src={logo} alt="Kaldi" style={{ width: "88px" }} /> */}
            </Link>
          </div>
          <div className={styles.navLinks}>
            <Link to="/about">Quien somos</Link>
            <Link to="/recipes">Recetas</Link>
            <Link to="/tags">Tags</Link>
            <Link to="/contact">Contacto</Link>
          </div>
          <div
            className={`navbar-burger burger ${styles.hamburgerMenu} ${this.state.navBarActiveClass}`}
            // className={`navbar-burger burger ${} ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* -Hamburger navigation- */}
        <div
          id="navMenu"
          style={{ display: this.state.active ? "block" : "none" }}
          // className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              Quien somos
            </Link>
            <Link className="navbar-item" to="/recipes">
              Recetas
            </Link>
            <Link className="navbar-item" to="/tags">
              Tags
            </Link>
            <Link className="navbar-item" to="/contact">
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
