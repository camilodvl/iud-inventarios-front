import { React, useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  deleteEstadoEquipo,
  getEstadoEquipo,
  postEstadoEquipo,
} from "../../../services/estadoService";
import { EstadoEquipoForm } from "./EstadoEquipoForm";
import { EstadoEquipoList } from "./EstadoEquipoList";

export const EstadoEquipoMain = () => {

  const [estadoEquipos, setEstadoEquipos] = useState([]); //Lista con la que luego se pintaran las estados obtenidos de la bd
  const [estadoEquipo, setEstadoEquipo] = useState({}); //objeto para enviar al metodo post
  const [controlEstadoEquipo, setOpenModal] = useState(0); // se controla para actualizar la pagina

  const handledOnChange = (e) => {
    setEstadoEquipo({ ...estadoEquipo, [e.target.name]: e.target.value });
  };

  const handledSubmit = (e) => {
    e.preventDefault();
    try {
      postEstadoEquipo(estadoEquipo);
      Swal.fire("Estado agregado", ` Nombre: ${estadoEquipo.nombre}`, "success")
    } catch (error) {
      console.log(error)
    }
    
    setOpenModal(controlEstadoEquipo + 1);
  };

  const listarEstadoEquipo = async () => {
    try {
      const resp = await getEstadoEquipo();
      setEstadoEquipos(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarEstadoEquipo();
  }, [controlEstadoEquipo]);

  
  return (
    <div className="container-fluid mt-3 mb-2">
      <h2>Estados Equipos</h2>
      <EstadoEquipoForm
        handledSubmit={handledSubmit}
        handledOnChange={handledOnChange}
      />
      <EstadoEquipoList
        estadoEquipos={estadoEquipos}
        deleteEstadoEquipo={deleteEstadoEquipo}
        listarEstadoEquipo={listarEstadoEquipo}
      />
    </div>
  );
}
