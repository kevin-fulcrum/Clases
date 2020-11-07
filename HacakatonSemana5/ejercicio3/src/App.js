import React, { useState } from 'react'
import './App.css';
import Formulario from './components/Formulario';

function App() {
  const [nombre, setNombre] = useState('')
  const [nombreres, setNombreres] = useState('')
  const [email, setEmail] = useState('')
  const [emailres, setEmailres] = useState('')
  const [text, setText] = useState('')
  const [textres, setTextres] = useState('')
  const [msgerror, setMsgerror] = useState('')
  
  const enviar=()=>{
    if(!nombre || !email || !text){
      setMsgerror("*Campo obligatorio")
    }else{
      setNombreres(nombre)
      setEmailres(email)
      setTextres(text)
      setMsgerror("")
    }
  }
  return (
    <div className="App">
      <header>
      <section className="login">
            <Formulario setNombre={setNombre} setEmail={setEmail} setText={setText} enviar={enviar} nombre={nombreres} email={emailres} text={textres} msgerror={msgerror}/>  
      </section> 

      </header>
    </div>
  );
}

export default App;