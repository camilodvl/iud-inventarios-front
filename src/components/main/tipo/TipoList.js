import React from "react";
import { NavLink } from "react-router-dom";

export const TipoList = ({ tipos, deleteTipo, listarTipo }) => {
  return (
    <div>
      <table className="table m-2 mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha Creacion</th>
            <th scope="col">Fecha Actualizacion</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tipos.map((tipo) => {
            return (
              <tr key={tipo._id}>
                <th scope="row">1</th>
                <td>{tipo.nombre}</td>
                <td>{tipo.estado}</td>
                <td>{tipo.fechaCreacion}</td>
                <td>{tipo.fechaActualizacion}</td>

                <td>
                  <NavLink
                    to={`editar/${tipo._id}`}
                    className="btn btn-info"
                  >
                    Editar
                  </NavLink>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      deleteTipo(tipo._id);
                      listarTipo();
                    }}
                    type="button"
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
