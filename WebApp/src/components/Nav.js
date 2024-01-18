import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand h1" to="/">Blood Bank</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/donate">Donate</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/track">Track</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/history">History</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Nav;