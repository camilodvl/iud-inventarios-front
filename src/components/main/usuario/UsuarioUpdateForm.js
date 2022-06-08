import React from "react";
import { useParams } from "react-router-dom";
import { getUsuarioId } from "../../../services/usuarioService";
import { useEffect, useState } from "react";

export const UsuarioUpdateForm = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="container">
      <form className="m-3 border border-primary p-1 rounded border-opacity-25">
        <div className="d-flex justify-content-between">
          <div className="form-group">
            <label>Nombre: </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              aria-describedby="nombre"
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Status: </label>
            <select required className="form-select" name="estado">
              <option value="" defaultValue hidden>
                Seleccione
              </option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary btn-sm m-2">Registrar</button>
      </form>
    </div>
  );
};
