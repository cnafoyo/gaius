import React from 'react';

function Product(props) {
    return (
        <React.Fragment>
            <h1>Yolomy Products</h1>
            <p> {props.name} </p>
            <p>Price - {props.price} </p>
        </React.Fragment>
    )
}

export default Product