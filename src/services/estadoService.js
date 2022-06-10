import { axiosInstance } from "../helpers/axios-config";

export const getEstadoEquipo = async () => {
  const resp = await axiosInstance.get("estadoequipo");
  return resp;
};

export const postEstadoEquipo = async (data) => {
  const resp = await axiosInstance.post("estadoequipo", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};

export const deleteEstadoEquipo = async (datas) => {
  const resp = await axiosInstance.delete("estadoequipo", {
    data: { id: datas },
  });
  return resp;
};

export const getEstadoEquipoId = async (id) => {
  const resp = await axiosInstance.get(`estadoequipo/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};

export const updateEstadoEquipo = async (data) => {
  const resp = await axiosInstance.put("estadoequipo", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};
