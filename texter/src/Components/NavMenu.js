import React from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";


export default function NavMenu(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link "  to="/">
                  Functions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Classes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="whitebutton"
                type="button"
                id="flexSwitchCheckDefault"
                onClick={props.togglewhitemode}
              />
            </div>
            <div className="form-check form-switch">
              <input
                className="redbutton"
                type="button"
                id="flexSwitchCheckDefault"
                onClick={props.toggleredmode}
              />
            </div>
            <div className="form-check form-switch">
              <input
                className="grnbutton"
                type="button"
                id="flexSwitchCheckDefault"
                onClick={props.togglegrnmode}
              />
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
                {props.modetext}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
NavMenu.prototype = {
  title: PropTypes.string,
  about: PropTypes.string,
};
NavMenu.defaultProps = {
  title: "Set title ",
  about: "About ",
};
