import React, { useState, } from 'react';

import useStore from '/somaReducer'


function ReducerHook() {
//declarando as variaveis
  const [ numero, setNumero ] = useState('')
  const [ segundoNumero, setSegundoNumero ] = useState('')

  const [ store, dispatch ] = useStore()


  const somar = () => {
    const numeroInt = parseInt(numero)
    const segNumeroInt = parseInt(segundoNumero)

  }

 

  return (
   
    <div>

Número 1:<br />
      <input type="text" value={numero} 
             onChange={e => setNumero(e.target.value)} /><br />


      Número 2:<br />
      <input type="text" value={segundoNumero}
              onChange={e => setSegundoNumero(e.target.value)} /><br />


      <button onClick={somar}>Somar</button> <br />
      
      Resultado:<br />
      <input type="text" value={resultado} /><br />
    </div>
  );
}

export default ReducerHook;


/*outra forma de declarar as variaveis
const [ state, setState] = useState({
  numero: 0,
  segundoNumero: 0,
  resultado: 0
})*/
