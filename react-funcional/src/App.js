import React, { useState, useEffect } from 'react';

import ReducerHook from  './reducer'

function App() {
    return (
      <ReducerHook/>
    )
}

export default App;


/*outra forma de declarar as variaveis
const [ state, setState] = useState({
  numero: 0,
  segundoNumero: 0,
  resultado: 0
})*/
