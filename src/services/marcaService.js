import { axiosInstance } from "../helpers/axios-config";

export const getMarca = async () => {
  const resp = await axiosInstance.get("marca");
  return resp;
};

export const postMarca = async (data) => {
  const resp = await axiosInstance.post("marca", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};

export const deleteMarca = async (datas) => {
  const resp = await axiosInstance.delete("marca", {
    data: { id: datas },
  });
  return resp;
};

export const getMarcaId = async (id) => {
  const resp = await axiosInstance.get(`marca/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};

export const updateMarca = async (data) => {
  const resp = await axiosInstance.put("marca", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resp;
};
