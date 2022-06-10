import React from "react";
import { Header } from "./components/ui/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { UsuarioMain } from "./components/main/usuario/UsuarioMain";
import { MarcaMain } from "./components/main/marca/MarcaMain";
import { TipoMain } from "./components/main/tipo/TipoMain";
import { EstadoEquipoMain } from "./components/main/estado/EstadoEquipoMain";
import './index.css'
import { UsuarioUpdateForm } from "./components/main/usuario/UsuarioUpdateForm";
import { Main } from "./components/main/inventario/InventarioMain";
import { MarcaUpdateForm } from "./components/main/marca/MarcaUpdateForm";
import { EstadoEquipoUpdateForm } from "./components/main/estado/EstadoEquipoUpdateForm";
import { TipoUpdateForm } from "./components/main/tipo/TipoUpdateForm";


export const InventarioApp = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/usuarios' element={<UsuarioMain/>}/> 
          <Route path ='/usuarios/editar/:id' element={<UsuarioUpdateForm/>}/>
          <Route path='/marcas' element={<MarcaMain/>}/>
          <Route path ='/marcas/editar/:id' element={<MarcaUpdateForm/>}/>
          <Route path='/estados' element={<EstadoEquipoMain/>}/>
          <Route path ='/estados/editar/:id' element={<EstadoEquipoUpdateForm/>}/>
          <Route path='/tipos' element={<TipoMain/>}/>
          <Route path ='/tipos/editar/:id' element={<TipoUpdateForm/>}/>
          <Route path='*' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
