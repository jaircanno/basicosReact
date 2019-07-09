/* ----- Libraries ---------------------------------------------------- */
import React from 'react';

/* ----- First Functional Component ----------------------------------- */

/* ----- Function App Syntax -----------------------------------
*   - Utilizada para los componentes padres
*/
function functionApp() {
    return ( <h3> Hello, with Function App syntax </h3> )
}


/* ----- Function Expression Syntax ----------------------------
*   - Empleada para los métodos
*   - Suele utilizarse más para los Stateless Functional Components
*/
const functionExpressionOne = () => {
    return ( <h3> Hello, with Functional Expression 1 </h3> );
};


/*  Otra sintaxis para la función
*   - Con return opcional
*   - El return viene implicito en los paréntesis
*/
const functionExpressionTwo = () => ( <h3>Hello, with Functional Expression 2</h3> );

export default functionExpressionOne;