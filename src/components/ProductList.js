import React from 'react';
import Product from './Product';
import '../styles/productList.css';

import tshirt from '../images/products/tshirt.png';
import backpack from '../images/products/backpack.png';
import pants from '../images/products/pants.png';
import trekkingshoes from '../images/products/trekkingshoes.png';
import giacket from '../images/products/giacket.png';
import tshirt_ladies from '../images/products/tshirt_ladies.png';

// ActualProductList.
const actualProductList = [
    {
        name: 'T-Shirt',
        price: '599',
        id: "1"
    },
    {
        name: 'BackPack',
        price: '1500',
        id: "2"
    },
    {
        name: 'Pants',
        price: '1000',
        id: '3'
    },
    {
        name: 'Trekking Shoes',
        price: '2000',
        id: '4'
    },
    {
        name: 'Jacket',
        price: '1500',
        id: '5'
    },
    {
        name: 'T-Shirt Ladies',
        price: '650',
        id: '6'
    }
]

function ProductList() {
    return (
        <React.Fragment>
            <div className='container' id="products">
                <div className="row pdg-line">
                    {/* {Product Title} */}
                    <div className="col-4 col-sm-4 col-md-4">
                        <div className="abt-top-border"></div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <p className="product-title text-center">PRODUCTS</p>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <div className="abt-top-border"></div>
                    </div>
                </div>
                {/* Product List */}
                <div className="men-products">
                    <div className="row">
                        {actualProductList.map((product) =>
                            <product
                                Photo={product.photo}
                                name={product.name}
                                price={product.price}
                                id={product.id}
                                key={product.id} />
                        )}
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}
export default ProductList