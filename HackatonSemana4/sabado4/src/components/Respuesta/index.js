import React, { useState } from 'react'
import './index.css';
import img from '../../Recursos/Imagenes/bienvenida.jpg'

const res = (props) => {
    const {nombre,apellido,telefono,fechaNacimiento,direccion}=props
    return(
        <>
            <div className="respuesta">
            <p><label><b>BIENVENIDO</b></label>
            <img src={img} />
            <label>{nombre}</label>
            <label>{apellido}</label>
            <label>{telefono}</label>
            <label>{fechaNacimiento}</label>
            <label>{direccion}</label></p>
            </div>
            
        </>
    )
}
export default res;