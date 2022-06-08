import React from "react";
import { NavLink } from "react-router-dom";

export const UsuarioList = ({ usuarios, deleteUsuario, listarUsuarios }) => {
  return (
    <div>
      <table className="table m-2 mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Estado</th>
            <th scope="col">Fecha Creacion</th>
            <th scope="col">Fecha Actualizacion</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return (
              <tr key={usuario._id}>
                <th scope="row">1</th>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.estado}</td>
                <td>{usuario.fechaCreacion}</td>
                <td>{usuario.fechaActualizacion}</td>

                <td>
                  <NavLink to={`editar/${usuario._id}`} className="btn btn-secondary">
                    Editar
                  </NavLink>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      deleteUsuario(usuario._id);
                      listarUsuarios();
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
