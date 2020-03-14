import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg">
      <a className="navbar-brand" href="#">
        <a className="navlogo">
          <img
            src="https://fontmeme.com/permalink/200218/26f4873e9ddf07482a0d69174b97dd7b.png"
            alt="the-forest-video-game-font"
            border="0"
          ></img>
        </a>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link className="nav-link home" to="/">
              <img
                src="https://fontmeme.com/permalink/200218/3db5a856a6e3e51f9ebd25ee9b897b9f.png"
                alt="the-forest-video-game-font"
                border="0"
              ></img>
             
              <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link ourMission" to="/mission">
              <img
                src="https://fontmeme.com/permalink/200218/6d92e6f976df0fed4e020c0405fe2d85.png"
                alt="the-forest-video-game-font"
                border="0"
              ></img>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link signIn" to="/signin">
              <img
                src="https://fontmeme.com/permalink/200303/5ab3165ad068110b4db639d2d573fe7c.png" 
                alt="the-forest-video-game-font"
                border="0"
              ></img>
            </Link>
          </li>
          {/* <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a>
                <img
                  src="https://fontmeme.com/permalink/200218/639ebb6e0892ce1e9c0443a718bc9b33.png"
                  alt="the-forest-video-game-font"
                  border="0"
                ></img>
              </a>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link class="dropdown-item" to="/give">
                Make Donations
              </Link>
              <Link class="dropdown-item" to="/receive">
                Receive Donations
              </Link>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
