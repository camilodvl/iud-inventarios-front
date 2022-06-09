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


export const deleteUsuario = (datas) =>{
    const resp = axiosInstance.delete('usuarios', {
        data:{id:datas}
    });
    return resp;
}

export const getUsuarioId = (id) =>{
    const resp = axiosInstance.get(`usuarios/${id}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;


}

export const updateUsuario = (data) =>{
    console.log(`servicio ${data}`)
    const resp = axiosInstance.put('usuarios',data, {
        headers:{
            'Content-type': 'application/json'
        }
    });
    return resp
}