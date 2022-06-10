import React from "react";
import { NavLink } from "react-router-dom";

export const EstadoEquipoList = ({ estadoEquipos, deleteEstadoEquipo, listarEstadoEquipo }) => {
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
          {estadoEquipos.map((estadoEquipo) => {
            return (
              <tr key={estadoEquipo._id}>
                <th scope="row">1</th>
                <td>{estadoEquipo.nombre}</td>
                <td>{estadoEquipo.estado}</td>
                <td>{estadoEquipo.fechaCreacion}</td>
                <td>{estadoEquipo.fechaActualizacion}</td>

                <td>
                  <NavLink
                    to={`editar/${estadoEquipo._id}`}
                    className="btn btn-info"
                  >
                    Editar
                  </NavLink>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      deleteEstadoEquipo(estadoEquipo._id);
                      listarEstadoEquipo();
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
