import { useEffect, useState, React } from "react";
import { getInventarios } from "../../../services/inventarioService";
import { NavLink } from "react-router-dom";
import { deleteInventario } from "../../../services/inventarioService";


export const Main = () => {
  const [inventarios, setInventarios] = useState([]);

  const listarInventarios = async () => {
    try {
      const resp = await getInventarios();
      setInventarios(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listarInventarios();
  }, []);

  return (

    
    <div className="container mt-3">
      <div>
        
      <NavLink
                    to={`/inventarionew`}
                    className="btn btn-lg btn-success ajustado opacity-75"
                  >
                    Insertar Nuevo
                  </NavLink>
      </div>
      
      <div className="row ">
        {inventarios.map((inventario) => {
          return (
            <div
              key={inventario._id}
              className="col-xl-6 col-md-auto col-lg-auto col-md-auto"
            >
              <div className="card mt-1 mb-1">
                <img className="Imagen" src={inventario.foto} />
                <div className="class-body">
                  <h5 className="card-title">Serial: {inventario.serial}</h5>
                  <p className="card-text">Modelo: {inventario.descripcion}</p>
                  <p className="card-text">Modelo: {inventario.modelo}</p>
                  <p className="card-text">Precio: {inventario.precio}</p>
                  <p className="card-text">Fecha Compra: {inventario.fechaCompra}</p>
                  <div className="d-flex justify-content-between m-2">

                  <NavLink
                    to={`/inventario/editar/${inventario._id}`}
                    className="btn btn-info"
                  >
                    Editar
                  </NavLink>
                  <button
                    onClick={(e) => {
                      deleteInventario(inventario._id);
                      listarInventarios();
                    }}
                    type="button"
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                  </div>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
