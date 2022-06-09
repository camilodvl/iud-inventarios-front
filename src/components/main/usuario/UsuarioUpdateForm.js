import React from "react";
import { useParams } from "react-router-dom";
import { getUsuarioId, updateUsuario } from "../../../services/usuarioService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


export const UsuarioUpdateForm = () => {
  const { id="" } = useParams();
  const [usuario, setUsuario]=useState({});

  const {nombre="", email="", estado="Activo"}=usuario;
  
  const getUsuario = async () =>{

      const {data} = await getUsuarioId(id);
      setUsuario(data)
    try {
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsuario();
  }, [id]);

  const handledOnChange =({target})=>{
    const {name, value} = target;
    setUsuario({...usuario, [name]: value})
    console.log(usuario)
  }

  const sumitFuncion =  (e) =>{
    try {
      e.preventDefault();
      const usuarioInsertar ={id: usuario._id, 
      nombre: usuario.nombre,
      email: usuario.email,
      estado: usuario.estado
    }
    console.log(usuarioInsertar)

      updateUsuario(usuarioInsertar);
    } catch (error) {
     console.log(error) 
    }
    
  }


  return (
    <div className="container">
      <form className="m-3 border border-primary p-1 rounded border-opacity-25"
      onSubmit={(e)=>sumitFuncion(e)}>
        <div className="d-flex justify-content-between">
          <div className="form-group">
            <label>Nombre: </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              aria-describedby="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => handledOnChange(e)}
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
              value={email}
              onChange={(e) => handledOnChange(e)}
            />
          </div>

          <div className="form-group">
            <label>Status: </label>
            <select required className="form-select" name="estado" value={estado} onChange={(e) => handledOnChange(e)}>
              <option value="" defaultValue hidden>
                Seleccione
              </option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary btn-sm m-2">Actualizar</button>
      </form>
    </div>
  );
};
