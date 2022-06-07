import { React, useState, useEffect } from "react";
import { getUsuarios } from "../../../services/usuarioService";
import { UsuarioForm } from "./UsuarioForm";

export const UsuarioMain = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [i, setI]=useState(1);



  const listarUsuarios = async () => {
    try {
      const resp = await getUsuarios();
      setUsuarios(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  return (
    <>
      <UsuarioForm />

      <table className="table m-2 mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return (
              <tr key={usuario._id}>
                <th scope="row">{i}</th>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                
                <td>
                  <button type="button" className="btn btn-secondary">
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
