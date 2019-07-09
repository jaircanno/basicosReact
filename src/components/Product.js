import React, { Component } from 'react';

class Product extends Component {

    /*  ----- State ------------------------------------------------------------------ */
    /*
    *   El state se puede considerar como el contenido con el que se trabajará dentro
    *       del componente, puntos a considerar:
    *       -   Un state siempre tiene que ser un objeto.
    */
    state = {
        products : [
            {id: 1, name: 'Camisa ReactJS', precio: 50},
            {id: 2, name: 'Camisa NodeJS', precio: 40},
            {id: 3, name: 'Camisa VueJS', precio: 30},
            {id: 4, name: 'Camisa PHP', precio: 20}
        ]
    };

    render() {

        /*  Aqui todavia es posible utilizar código JS */
        const {products} = this.state;
        console.log(products);

        return (
            <h2>Lista de Productos</h2>
        );
    }
}

export default Product;