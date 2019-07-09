import React from 'react';

/*
*   En esta ocación se empleo la creación de un componente padre (ProductList), el cual
*       se utiliza para iterar a cada uno de los elementos (state) con los que cuenta,
*       para ello se le asigno al componente hijo (Product) ciertas props con los cuales
*       se desea que itere cada vez que se le mande llamar por medio de un map()
* */
const Product = (props) => {
    return ( <h4> ${props.product.price} {props.product.name} </h4>);
};

export default Product;