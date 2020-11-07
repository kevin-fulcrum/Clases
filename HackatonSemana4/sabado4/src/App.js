import React, { useState } from 'react'
import './App.css';
import Formulario from './components/Formulario';
import Respuesta from './components/Respuesta'

function App() {
  const [nombre, setNombre] = useState('')
  const [nombreres, setNombreres] = useState('')
  const [apellido, setApellido] = useState('')
  const [apellidores, setApellidores] = useState('')
  const [telefono, setTelefono] = useState('')
  const [telefonores, setTelefonores] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [fechaNacimientores, setFechaNacimientores] = useState('')
  const [direccion, setDireccion] = useState('')
  const [direccionres, setDireccionres] = useState('')
  const [msgerror, setMsgerror] = useState('')
  
  const enviar=()=>{
    if(!nombre || !apellido || !telefono || !fechaNacimiento || !direccion){
      setMsgerror("*Campo obligatorio")
    }else{
      setNombreres(nombre)
      setApellidores(apellido)
      setTelefonores(telefono)
      setFechaNacimientores(fechaNacimiento)
      setDireccionres(direccion)
      setMsgerror("")
    }
  }
  return (
    <div className="App">
      <header>
      <section className="login">
            <div className="loginContainerprimero">
              <Respuesta nombre={nombreres} apellido={apellidores} telefono={telefonores} fechaNacimiento={fechaNacimientores} direccion={direccionres}/>
            </div>
              <Formulario setNombre={setNombre} setApellido={setApellido} setTelefono={setTelefono} setFechaNacimiento={setFechaNacimiento} setDireccion={setDireccion} enviar={enviar} msgerror={msgerror}/>
      </section>  
      </header>
    </div>
  );
}

export default App;
