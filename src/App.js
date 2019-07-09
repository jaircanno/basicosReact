/* ----- Libraries ---------------------------------------------------- */
import React, {Fragment} from 'react';
import PrimerComponente from './components/PrimerComponente.js'

function App() {

    /* ----- Variables -------------------------------------- */
    const empleado = {
        nombre: 'Jair Cano',
        trabajo : 'Desarrollador FullStack'
    };

    /* ----- Views Elements --------------------------------- */
  return (
      <Fragment>
          < PrimerComponente />
          <h2> {empleado.nombre} </h2>
          <p> {empleado.trabajo} </p>
          { 2 + 2 }
      </Fragment>
  )

}

export default App;
