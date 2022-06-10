import { React, useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  deleteMarca,
  getMarca,
  postMarca,
} from "../../../services/marcaService";
import { MarcaForm } from "./MarcaForm";
import { MarcaList } from "./MarcaList";

export const MarcaMain = () => {

  const [marcas, setMarcas] = useState([]); //Lista con la que luego se pintaran las marcas obtenidos de la bd
  const [marca, setMarca] = useState({}); //objeto para enviar al metodo post
  const [controlMarca, setOpenModal] = useState(0); // se controla para actualizar la pagina

  const handledOnChange = (e) => {
    setMarca({ ...marca, [e.target.name]: e.target.value });
  };

  const handledSubmit = (e) => {
    e.preventDefault();
    try {
      postMarca(marca);
      Swal.fire("Marca agregado", ` Nombre: ${marca.nombre}`, "success")
    } catch (error) {
      console.log(error)
    }
    
    setOpenModal(controlMarca + 1);
  };

  const listarMarca = async () => {
    try {
      const resp = await getMarca();
      setMarcas(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarMarca();
  }, [controlMarca]);

  
  return (
    <div className="container-fluid mt-3 mb-2">
      <h2>Marcas</h2>
      <MarcaForm
        handledSubmit={handledSubmit}
        handledOnChange={handledOnChange}
      />
      <MarcaList
        marcas={marcas}
        deleteMarca={deleteMarca}
        listarMarca={listarMarca}
      />
    </div>
  );
}
