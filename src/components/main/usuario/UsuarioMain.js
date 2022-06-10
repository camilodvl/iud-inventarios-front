import { React, useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  deleteUsuario,
  getUsuarios,
  postUsuarios,
} from "../../../services/usuarioService";
import { UsuarioForm } from "./UsuarioForm";
import { UsuarioList } from "./UsuarioList";

export const UsuarioMain = () => {
  const [usuarios, setUsuarios] = useState([]); //Lista con la que luego se pintaran los usuarios obtenidos de la bd
  const [usuario, setUsuario] = useState({}); //objeto para enviar al metodo post
  const [controlUsuario, setOpenModal] = useState(0); // se controla para actualizar la pagina

  const handledOnChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handledSubmit = (e) => {
    e.preventDefault();
    try {
      postUsuarios(usuario);
      Swal.fire("Usuario agregado", ` Nombre: ${usuario.nombre} Correo:${usuario.email}`, "success")
    } catch (error) {
      console.log(error)
    }
    
    setOpenModal(controlUsuario + 1);
  };

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
  }, [controlUsuario]);

  return (
    <div className="container-fluid mt-3 mb-2">
     <h2>Usuarios</h2>
      <UsuarioForm
        handledSubmit={handledSubmit}
        handledOnChange={handledOnChange}
      />
      <UsuarioList
        usuarios={usuarios}
        deleteUsuario={deleteUsuario}
        listarUsuarios={listarUsuarios}
      />
    </div>
  );
};
