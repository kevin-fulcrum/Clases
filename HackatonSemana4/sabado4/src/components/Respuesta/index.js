import React, { useState } from 'react'
import './index.css';
import img from '../../Recursos/Imagenes/bienvenida.png'

const res = (props) => {
    const {nombre,apellido,telefono,fechaNacimiento,direccion}=props
    return(
        <>
            <div className="respuesta">
            <p><label><b>BIENVENIDO</b></label>
            <img src={img} />
            <label><b>{nombre}</b></label>
            <label><b>{apellido}</b></label>
            <label><b>{telefono}</b></label>
            <label><b>{fechaNacimiento}</b></label>
            <label><b>{direccion}</b></label></p>
            </div>
            
        </>
    )
}
export default res;