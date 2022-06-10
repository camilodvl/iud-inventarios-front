import React from "react";
import { useParams } from "react-router-dom";
import { getEstadoEquipoId, updateEstadoEquipo } from "../../../services/estadoService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const EstadoEquipoUpdateForm = () => {
  const { id = "" } = useParams();
  const [estadoEquipo, setEstadoEquipo] = useState({});

  const { nombre = "", estado = "Activo" } = estadoEquipo;

  const getEstadoEquipo = async () => {
    const { data } = await getEstadoEquipoId(id);
    setEstadoEquipo(data);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEstadoEquipo();
  }, [id]);

  const handledOnChange = ({ target }) => {
    const { name, value } = target;
    setEstadoEquipo({ ...estadoEquipo, [name]: value });
  };

  const submitFunction = (e) => {
    try {
      e.preventDefault();
      const estadoEquipoInsertar = {
        id: estadoEquipo._id,
        nombre: estadoEquipo.nombre,
        estado: estadoEquipo.estado,
      };

      updateEstadoEquipo(estadoEquipoInsertar);
      Swal.fire(
        "Estadi actualizado",
        ` Nombre: ${estadoEquipo.nombre}`,
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
