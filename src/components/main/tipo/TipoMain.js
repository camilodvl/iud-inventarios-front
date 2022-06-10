import { React, useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  deleteTipo,
  getTipo,
  postTipo,
} from "../../../services/tipoService";
import { TipoForm } from "./TipoForm";
import { TipoList } from "./TipoList";

export const TipoMain = () => {

  const [tipos, setTipos] = useState([]); //Lista con la que luego se pintaran las tipos obtenidos de la bd
  const [tipo, setTipo] = useState({}); //objeto para enviar al metodo post
  const [controlTipo, setOpenModal] = useState(0); // se controla para actualizar la pagina

  const handledOnChange = (e) => {
    setTipo({ ...tipo, [e.target.name]: e.target.value });
  };

  const handledSubmit = (e) => {
    e.preventDefault();
    try {
      postTipo(tipo);
      Swal.fire("Tipo agregado", ` Nombre: ${tipo.nombre}`, "success")
    } catch (error) {
      console.log(error)
    }
    
    setOpenModal(controlTipo + 1);
  };

  const listarTipo = async () => {
    try {
      const resp = await getTipo();
      setTipos(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarTipo();
  }, [controlTipo]);

  
  return (
    <div className="container-fluid mt-3 mb-2">
      <h2>Tipos</h2>
      <TipoForm
        handledSubmit={handledSubmit}
        handledOnChange={handledOnChange}
      />
      <TipoList
        tipos={tipos}
        deleteTipo={deleteTipo}
        listarTipo={listarTipo}
      />
    </div>
  );
}
