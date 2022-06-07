import { axiosInstance } from "../helpers/axios-config"

const getInventarios = () =>{
    const resp = axiosInstance.get('inventario');
    return resp;
}

const setInventarios = (data) =>{
    const resp = axiosInstance.post('inventario', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
}


const updateInventarios = (data, idInventario) =>{
    const resp = axiosInstance.post(`inventario/${idInventario}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resp;
    
}

export {getInventarios, setInventarios, updateInventarios};