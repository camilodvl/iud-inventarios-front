import React from "react";
import { NavLink } from "react-router-dom";

export const MarcaList = ({ marcas, deleteMarca, listarMarca }) => {
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
          {marcas.map((marca) => {
            return (
              <tr key={marca._id}>
                <th scope="row">1</th>
                <td>{marca.nombre}</td>
                <td>{marca.estado}</td>
                <td>{marca.fechaCreacion}</td>
                <td>{marca.fechaActualizacion}</td>

                <td>
                  <NavLink
                    to={`editar/${marca._id}`}
                    className="btn btn-info"
                  >
                    Editar
                  </NavLink>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      deleteMarca(marca._id);
                      listarMarca();
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
