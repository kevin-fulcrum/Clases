import React from 'react'
import './index.css'

const Formulario = (props) => {
    const { 
        msgerror,
        setNombre,
        setEmail,
        setText,
        enviar,
        nombre,
        email,
        text
    } = props
    return (
        <>  
            <div className="loginContainer">
                <label><h1>Suscribete</h1></label>
                <label>Nombre (*)</label>
                <input type="text"  autoFocus required autoComplete="none" onChange={e=>setNombre(e.target.value)} />
                <label>Email (*)</label>
                <input type="text" required autoComplete="none" onChange={e=>setEmail(e.target.value)} />
                <label>Text (*)</label>
                <textarea rows="10" required autoComplete="none"  onChange={e=>setText(e.target.value)} />
                <label className="errorMsg">{msgerror}</label>
                <span>{nombre}{email}{text}</span>
            </div>
            <div className="loginContainerButton">
                <button onClick={enviar}>SEND</button>
            </div>
            
     </>
    )
}

export default Formulario;