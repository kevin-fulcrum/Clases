import React from 'react'
import './index.css'

const Formulario = (props) => {
    const { 
        msgerror,
        enviar,
        setNombre,
        setApellido,
        setTelefono,
        setFechaNacimiento,
        setDireccion
    } = props
    return (
        <>
            <div className="loginContainer">
                <label><h1>Suscribete</h1></label>
                <label>Nombre (*)</label>
                <input type="text"  autoFocus required autoComplete="none" onChange={e=>setNombre(e.target.value)} />
                <label>Apellido (*)</label>
                <input type="text" required autoComplete="none" onChange={e=>setApellido(e.target.value)} />
                <label>Teléfono (*)</label>
                <input type="text" required autoComplete="none" maxLength="9" onChange={e=>setTelefono(e.target.value)} />
                <label>Fecha de Nacimiento (*)</label>
                <input type="date" required autoComplete="none" onChange={e=>setFechaNacimiento(e.target.value)} />
                <label>Dirección (*)</label>
                <input type="text" required autoComplete="none" onChange={e=>setDireccion(e.target.value)} />
                <label className="errorMsg">{msgerror}</label>
                            <button className="block" onClick={enviar}>Submit</button>
            </div>
     </>
    )
}

export default Formulario;