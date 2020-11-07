import React, { useState } from 'react'
import './App.css';
import Formulario from './components/Formulario';

function App() {
  const [amount, setAmount] = useState('')
  const [divisaOrigen, setDivisaOrigen] = useState('')
  const [divisaDestino, setDivisaDestino] = useState('')
  const [rate, setRate] = useState('')
  const [msgerror, setMsgerror] = useState('')
  
  const enviar=()=>{
    if(!amount){
      setMsgerror("*Campo obligatorio")
    }else{
      setRate(cambio(amount,divisaOrigen,divisaDestino))
    }
  }

  const cambio=(a,x,y)=>{
    let resultado=0
    if ((x==='1' && y==='1') || (x==='2' && y==='2')){
      resultado=a
    } else if (x==='1' && y==='2'){
      resultado=a/3.50
    } else if (x==='2' && y==='1'){
      resultado=a*3.5
    }
    return resultado;
  }
  return (
    <div className="App">
      <header>
      <section className="login">
              <Formulario setAmount={setAmount} setDivisaOrigen={setDivisaOrigen} setDivisaDestino={setDivisaDestino} rate={rate} enviar={enviar} msgerror={msgerror}/>
      </section>  
      </header>
    </div>
  );
}

export default App;
