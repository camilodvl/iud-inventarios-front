import { axiosInstance } from "../helpers/axios-config";

export const getUsuarios = async () => {
  const resp = await axiosInstance.get("usuarios");
  return resp;
};

export const postUsuarios = async (data) => {
  const resp = await axiosInstance.post("usuarios", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};

export const deleteUsuario = async (datas) => {
  const resp = await axiosInstance.delete("usuarios", {
    data: { id: datas },
  });
  return resp;
};

export const getUsuarioId = async (id) => {
  const resp = await axiosInstance.get(`usuarios/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};

export const updateUsuario = async (data) => {
  const resp = await axiosInstance.put("usuarios", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};
