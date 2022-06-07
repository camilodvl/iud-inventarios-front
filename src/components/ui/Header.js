import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            Inventario
          </NavLink>
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
                <NavLink to="/" className="nav-link" activeclassname="active">
                  Activos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/usuarios"
                  className="nav-link"
                  activeclassname="active"
                >
                  Usuarios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/marcas"
                  className="nav-link"
                  activeclassname="active"
                >
                  Marcas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/estados"
                  className="nav-link"
                  activeclassname="active"
                >
                  Estados
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/tipos"
                  className="nav-link"
                  activeclassname="active"
                >
                  Tipos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
