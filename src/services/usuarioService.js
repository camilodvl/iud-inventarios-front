import { axiosInstance } from "../helpers/axios-config"

export const getUsuarios = () =>{
    const resp = axiosInstance.get('usuarios');
    return resp;
}