import React from "react";
import { useParams } from "react-router-dom";
import { getMarcaId, updateMarca } from "../../../services/marcaService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const MarcaUpdateForm = () => {
  const { id = "" } = useParams();
  const [marca, setMarca] = useState({});

  const { nombre = "", estado = "Activo" } = marca;

  const getMarca = async () => {
    const { data } = await getMarcaId(id);
    setMarca(data);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMarca();
  }, [id]);

  const handledOnChange = ({ target }) => {
    const { name, value } = target;
    setMarca({ ...marca, [name]: value });
  };

  const submitFunction = (e) => {
    try {
      e.preventDefault();
      const MarcaInsertar = {
        id: marca._id,
        nombre: marca.nombre,
        marca: marca.estado,
      };

      updateMarca(MarcaInsertar);
      Swal.fire(
        "Marca actualizado",
        ` Nombre: ${marca.nombre}`,
        "success"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form
        className="m-3 border border-primary p-1 rounded border-opacity-25"
        onSubmit={(e) => submitFunction(e)}
      >
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
            <label>Status: </label>
            <select
              required
              className="form-select"
              name="estado"
              value={estado}
              onChange={(e) => handledOnChange(e)}
            >
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
