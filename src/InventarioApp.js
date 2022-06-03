import React from "react";
import { Header } from "./components/ui/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Main } from "./components/main/Main";
import { UsuarioMain } from "./components/main/usuario/UsuarioMain";
import { MarcaMain } from "./components/main/marca/MarcaMain";
import { TipoMain } from "./components/main/tipo/TipoMain";
import { EstadoMain } from "./components/main/estado/EstadoMain";

export const InventarioApp = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/usuarios' element={<UsuarioMain/>}/>
          <Route path='/marcas' element={<MarcaMain/>}/>
          <Route path='/estados' element={<EstadoMain/>}/>
          <Route path='/tipos' element={<TipoMain/>}/>
          <Route path='*' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
