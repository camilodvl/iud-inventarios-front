import { useEffect, useState, React } from "react";
import { getInventarios } from "../../../services/inventarioService";

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
      <div className="row ">
        {inventarios.map((inventario) => {
          return (
            <div
              key={inventario._id}
              className="col-xl-6 col-md-auto col-lg-auto col-md-auto"
            >
              <div className="card mt-1 mb-1">
                <img
                  className="Imagen"
                  src="https://us.123rf.com/450wm/scanrail/scanrail1701/scanrail170100025/68835630-abstracto-creativo-tecnolog%C3%ADa-de-negocios-concepto-de-la-oficina-de-comunicaci%C3%B3n-de-internet-web-3d-.jpg?ver=6"
                  alt="Card image cap"
                />
                <div className="class-body">
                  <h5 className="card-title">Serial: {inventario.serial}</h5>
                  <p className="card-text">
                    Descripcion: {inventario.descripcion}
                  </p>
                  <p className="card-text">Modelo: {inventario.modelo}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
