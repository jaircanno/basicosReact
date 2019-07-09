import React from 'react';

/*  ----- Props ---------------------------------------------------------------------- */
/*
*   En esta ocasión, para la implementación de los props en un componente, es necesario
*       contemplar las propiedades que se declaren en el comp. padre al hijo, en este
*       caso, en el componente hijo, se debe declarar que se utilizar los props, para
*       despues por medio de herencia y como tipo atributos emplearlos.
*
*   Es posible aplicar 'destructuring' a los props para emplearlos de manera más directa
*
        const Header = ({titulo}) => (
            <header>
                <h1>{ titulo }</h1>
            </header>
        );
*
*/
const Header = (props) => (
    <header>
        <h1>{ props.titulo }</h1>
    </header>
);

export default Header;