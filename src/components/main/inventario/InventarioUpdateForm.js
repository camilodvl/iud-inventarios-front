import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEstadoEquipo } from "../../../services/estadoService";
import { getInventarioId, postInventario, updateInventario } from "../../../services/inventarioService";
import { getMarca } from "../../../services/marcaService";
import { getTipo } from "../../../services/tipoService";
import { getUsuarios } from "../../../services/usuarioService";

export const InventarioUpdateForm = () => {
  const { id = "" } = useParams();
  const [usuarios, setUsuarios] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [estados, setEstados] = useState([]);
  const [formulario, setFormulario] = useState({});

  const getInventario = async () => {
    const { data } = await getInventarioId(id);
    setFormulario(data)
    let date = new Date(data.fechaCompra)
    console.log(date.toLocaleDateString());
    console.log(date)
    console.log(data.fechaCompra)
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const {
    serial = "",
    modelo = "",
    descripcion = "",
    foto = "",
    fechaCompra = "",
    precio = 0,
    usuario = "",
    marca = "",
    tipoEquipo = "",
    estadoEquipo = "",
  } = formulario;


  useEffect(()=>{
    getInventario();
  },[])

  useEffect(() => {
    const listarUsuarios = async () => {
      try {
        const { data } = await getUsuarios();
        setUsuarios(data);
      } catch (error) {}
    };
    listarUsuarios();
  }, []);

  useEffect(() => {
    const listarMarcas = async () => {
      try {
        const { data } = await getMarca();
        setMarcas(data);
      } catch (error) {}
    };
    listarMarcas();
  }, []);

  useEffect(() => {
    const listarTipos = async () => {
      try {
        const { data } = await getTipo();
        setTipos(data);
      } catch (error) {}
    };
    listarTipos();
  }, []);

  useEffect(() => {
    const listarEstados = async () => {
      try {
        const { data } = await getEstadoEquipo();
        setEstados(data);
      } catch (error) {}
    };
    listarEstados();
  }, []);

  const handledSubmit = (e) => {
    e.preventDefault();
    const inventarioGuardar = {
      id:id,
      serial:formulario.serial,
      modelo:formulario.modelo,
      descripcion:formulario.descripcion,
      foto:formulario.foto,
      fechaCompra:formulario.fechaCompra,
      precio,
      usuario: {
        _id: usuario,
      },
      marca: {
        _id: marca,
      },
      tipoEquipo: {
        _id: tipoEquipo,
      },
      estadoEquipo: {
        _id: estadoEquipo,
      },
    };
    
    updateInventario(inventarioGuardar);
  };

  const handledOnChange = ({ target }) => {
    const { name, value } = target;
    setFormulario({ ...formulario, [name]: value });
  };

  return (
    <div className="container">
      <form
        onSubmit={(e) => handledSubmit(e)}
        className="m-3 border border-primary p-1 rounded border-opacity-25"
      >
        <div className="d-flex justify-content-between">
          <div className="form-group">
            <label>Serial: </label>
            <input
              value={serial}
              required
              type="text"
              className="form-control"
              name="serial"
              aria-describedby="serial"
              placeholder="serial"
              onChange={(e) => handledOnChange(e)}
            />
          </div>

          <div className="form-group">
            <label>Modelo: </label>
            <input
              value={modelo}
              required
              type="text"
              className="form-control"
              name="modelo"
              aria-describedby="modelo"
              placeholder="modelo"
              onChange={(e) => handledOnChange(e)}
            />
          </div>

          <div className="form-group">
            <label>Descripcion: </label>
            <input
              value={descripcion}
              required
              type="text"
              className="form-control"
              name="descripcion"
              aria-describedby="descripcion"
              placeholder="descripcion"
              onChange={(e) => handledOnChange(e)}
            />
          </div>

          <div className="form-group">
            <label>Foto: </label>
            <input
              value={foto}
              required
              type="text"
              className="form-control"
              name="foto"
              aria-describedby="foto"
              placeholder="foto"
              onChange={(e) => handledOnChange(e)}
            />
          </div>

          <div className="form-group">
            <label>Fecha Compra: </label>
            <input
              value={fechaCompra}
              required
              type="date"
              className="form-control"
              name="fechaCompra"
              aria-describedby="fechaCompra"
              placeholder="fechaCompra"
              onChange={(e) => handledOnChange(e)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="form-group">
            <label>Precio: </label>
            <input
              value={precio}
              required
              type="number"
              className="form-control"
              name="precio"
              aria-describedby="precio"
              placeholder="precio"
              onChange={(e) => handledOnChange(e)}
            />
          </div>

          <div className="form-group">
            <label>Usuario: </label>
            <select
              value={usuario}
              required
              className="form-select"
              name="usuario"
              onChange={(e) => handledOnChange(e)}
            >
              <option defaultValue="">--SELECCIONAR--</option>
              {usuarios.map((usuario) => {
                return (
                  <option key={usuario._id} value={usuario._id}>
                    {usuario.nombre}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label>Marca: </label>
            <select
              value={marca}
              required
              className="form-select"
              name="marca"
              onChange={(e) => handledOnChange(e)}
            >
              <option defaultValue="">--SELECCIONAR--</option>
              {marcas.map((marca) => {
                return (
                  <option key={marca._id} value={marca._id}>
                    {marca.nombre}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label>tipo Equipo: </label>
            <select
              value={tipoEquipo}
              required
              className="form-select"
              name="tipoEquipo"
              onChange={(e) => handledOnChange(e)}
            >
              <option defaultValue="">--SELECCIONAR--</option>
              {tipos.map((tipo) => {
                return (
                  <option key={tipo._id} value={tipo._id}>
                    {tipo.nombre}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label>Estado Equipo: </label>
            <select
              value={estadoEquipo}
              required
              className="form-select"
              name="estadoEquipo"
              onChange={(e) => handledOnChange(e)}
            >
              <option defaultValue="">--SELECCIONAR--</option>
              {estados.map((estado) => {
                return (
                  <option key={estado._id} value={estado._id}>
                    {estado.nombre}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button className="btn btn-primary btn-sm m-2">Registrar</button>
      </form>
    </div>
  );
};
