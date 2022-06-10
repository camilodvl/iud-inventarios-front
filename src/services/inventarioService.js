import { axiosInstance } from "../helpers/axios-config"

export const getInventarios = () =>{
    const resp = axiosInstance.get('inventario');
    return resp;
}

export const postInventario = async (data) => {
    const resp = await axiosInstance.post("inventario", data, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return resp;
  };

  export const deleteInventario = async (datas) => {
    const resp = await axiosInstance.delete("inventario", {
      data: { id: datas },
    });
    return resp;
  };
  
  export const getInventarioId = async (id) => {
    const resp = await axiosInstance.get(`inventario/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return resp;
  };

  export const updateInventario = async (data) => {
    const resp = await axiosInstance.put("inventario", data, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return resp;
  };
