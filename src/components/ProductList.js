import React, { Component, Fragment } from 'react';
import Product from './Product.js'

class ProductList extends Component {

    /*  ----- State ------------------------------------------------------------------ */
    /*
    *   El state se puede considerar como el contenido con el que se trabajará dentro
    *       del componente, puntos a considerar:
    *       -   Un state siempre tiene que ser un objeto.
    */
    state = {
        products : [],
    };

    /*  ----- Métdodos de Ciclo de Vida ---------------------------------------------- */
    componentDidMount() {
        console.log(1);

        //  El State siempre debe setearse dentro del método DidMount
        this.setState({
            products : [
                {id: 1, name: 'Camisa ReactJS', price: 50},
                {id: 2, name: 'Camisa NodeJS', price: 40},
                {id: 3, name: 'Camisa VueJS', price: 30},
                {id: 4, name: 'Camisa PHP', price: 20}
            ],
            totalBuy: 500,
            customer: 'Jair Cano'
        })
    }

    componentWillMount() {
        console.log(2)
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(3)
    }

    componentWillUnmount() {
        console.log(4)
    }

    render() {
        console.log(5);
        /*  Aqui todavia es posible utilizar código JS */
        const {products} = this.state;

        /*  Los Props se declararan en el componente hijo, se declara el prop Key para
        *       poder iterar sin errores.
        *
        *   Es necesario implementar Fragment para que la iteración pueda ser
        *       realizada correctamente.
        */
        return (
            <Fragment>
                <h2>Lista de Productos</h2>
                {products.map(product=>(
                    <Product
                        key = {product.id}
                        product = {product}
                    />
                ))}
            </Fragment>
        );
    }
}

export default ProductList;