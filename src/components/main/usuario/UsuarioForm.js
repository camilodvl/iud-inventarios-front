import React, { useState } from 'react'
import { matchPath } from 'react-router-dom';
import { postUsuarios } from '../../../services/usuarioService';

export const UsuarioForm = () => {

  const [usuario, setUsuario]= useState({});
  
  const handledOnChange = (e) =>{
    console.log(e.target.name, e.target.value)
    setUsuario({ ...usuario, [e.target.name]: e.target.value });;
  }

const {nombre="", email="", estado="Activo"}=usuario;


  const handledSubmint = (e) =>{
    e.preventDefault();
    console.log(usuario)
    postUsuarios(usuario);
  }

  return (
    <form onSubmit={(e)=>handledSubmint(e)} className="m-3 border border-primary p-1 rounded border-opacity-25">

      <div className="d-flex justify-content-between">
      <div className="form-group">
        <label>Nombre: </label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          aria-describedby="nombre"
          placeholder="Nombre"
          onChange={(e)=>handledOnChange(e)}
          
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
          onChange={(e)=>handledOnChange(e)}
          value={email}
        />
      </div>

      <div className="form-group">
      <label>Status: </label>
        <select required className="form-select" name='estado' onChange={(e)=>handledOnChange(e)}>
        <option value="" defaultValue hidden>Seleccione</option>
          <option value='Activo'>Activo</option>
          <option value='Inactivo'>Inactivo</option>
        </select>
      </div>

      </div>
      <button className="btn btn-primary btn-sm m-2" >Registrar</button>


    </form>
  )
}
