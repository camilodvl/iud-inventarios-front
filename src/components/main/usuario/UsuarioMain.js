import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  deleteUsuario,
  getUsuarios,
  postUsuarios,
} from "../../../services/usuarioService";
import { UsuarioForm } from "./UsuarioForm";
import { UsuarioList } from "./UsuarioList";
import { UsuarioUpdateForm } from "./UsuarioUpdateForm";

export const UsuarioMain = () => {
  const [usuarios, setUsuarios] = useState([]);//Lista con la que luego se pintaran los usuarios obtenidos de la bd
  const [usuario, setUsuario] = useState({});//objeto para enviar al metodo post
  const [openModal, setOpenModal]=useState(false);

  const handledOnChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const { nombre = "", email = "", estado = "Activo" } = usuario;

  const handledSubmint = (e) => {
    e.preventDefault();
    postUsuarios(usuario);
    listarUsuarios();
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
  }, [usuarios]);

  return (
    <>
      <UsuarioForm handledSubmint={handledSubmint} handledOnChange={handledOnChange}/>
      <UsuarioList usuarios={usuarios} deleteUsuario={deleteUsuario} listarUsuarios={listarUsuarios}/>
      
      
    </>
  );
};
