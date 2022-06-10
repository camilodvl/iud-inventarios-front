import { axiosInstance } from "../helpers/axios-config";

export const getTipo = async () => {
  const resp = await axiosInstance.get("tipoequipo");
  return resp;
};

export const postTipo = async (data) => {
  const resp = await axiosInstance.post("tipoequipo", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};

export const deleteTipo = async (datas) => {
  const resp = await axiosInstance.delete("tipoequipo", {
    data: { id: datas },
  });
  return resp;
};

export const getTipoId = async (id) => {
  const resp = await axiosInstance.get(`tipoequipo/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};

export const updateTipo = async (data) => {
  const resp = await axiosInstance.put("tipoequipo", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};
