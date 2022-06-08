import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getUsuarios, postUsuarios } from "../../../services/usuarioService";
import { UsuarioForm } from "./UsuarioForm";

export const UsuarioMain = () => {
  const [usuarios, setUsuarios] = useState([]);
  
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
    listarUsuarios();
  }



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
                  <NavLink to={usuario._id} type="button" className="btn btn-secondary">
                    Editar
                  </NavLink>
                </td>
                <td>
                  <NavLink to={"/eliminar/"+usuario._id} type="button" className="btn btn-danger">
                    Eliminar
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
