import { axiosInstance } from "../helpers/axios-config"

export const getUsuarios = () =>{
    const resp = axiosInstance.get('usuarios');
    return resp;
}

export const postUsuarios = (data) =>{
    const resp = axiosInstance.post('usuarios',data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}