import React from 'react'
import './index.css'
import img from '../Recursos/Imagenes/repeat.svg'
import peru from '../Recursos/Imagenes/peru.svg'

const Formulario = (props) => {
    const { 
        msgerror,
        enviar,
        setAmount,
        setDivisaOrigen,
        setDivisaDestino,
        rate
    } = props
    return (
        <>
            <div className="loginContainer">
                <label><h1><center>Exchage Rate</center></h1></label>
                <label><center><h1>${rate}</h1></center></label>
                <label>Amount (*)</label>
                <input type="text" required autoComplete="none" onChange={e=>setAmount(e.target.value)} />
                <label className="errorMsg">{msgerror}</label>
                <label>From</label>
                <div className="ot">
                    <select onChange={e=>setDivisaOrigen(e.target.value)}>
                        <option>seleccione</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <img src={img} alt="img"></img>
                    <select onChange={e=>setDivisaDestino(e.target.value)}>
                        <option>seleccione</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                </div>                
                    <button className="block" onClick={enviar}>CONVERT</button>
            </div>
     </>
    )
}

export default Formulario;