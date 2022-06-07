import React from 'react'

export const UsuarioForm = () => {
  return (
    <form className="m-3 border border-primary p-1 rounded border-opacity-25">

      <div className="d-flex justify-content-between">
      <div className="form-group">
        <label>Nombre: </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          aria-describedby="nombre"
          placeholder="Nombre"
        />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
      <label>Status: </label>
        <select className="form-select">
          <option value='Activo'>Activo</option>
          <option value='Inactivo'>Inactivo</option>
        </select>
      </div>

      </div>
      <button type="button" className="btn btn-primary btn-sm m-2">Registrar</button>


    </form>
  )
}
