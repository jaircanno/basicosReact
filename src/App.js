/* ----- Libraries ------------------------------------------------------------------- */
import React, {Fragment} from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Product from './components/Product.js'

function App() {

    /* ----- Variables -------------------------------------- */
    const empleado = {
        nombre: 'Jair Cano',
        trabajo : 'Desarrollador FullStack'
    };

    const fecha = new Date().getFullYear();

    /* ----- Views Elements --------------------------------- */
    /*
    *   Se pueden declarar props en este componente, dado que es el componente padre,
    *       con la finalidad de emplearlos dichos atributos en el componente hijo.
    *
    *   Hay distintos tipos de props que se pueden declarar, para cada uno se deben
    *       asignar de diferente manera:
    *       - variable = 'contenido'
    *       - string   = { variable }
    */
    return (
      <Fragment>
          <Header
            titulo = 'Tienda virtual'
          />

          <Product />

          <Footer
              fecha = {fecha}
          />
      </Fragment>
    )

}

export default App;
