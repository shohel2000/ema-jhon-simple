import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    console.log(props)
    const {img, name, seller, price, stock} = props.item;
    return (
        <div className="products">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
            <h3 className="product-name">{name}</h3>
            <br/>
            <p><small>by: {seller}</small></p>
            <br/>
            <p>${price}</p>
            <br/>
            <p><small>only {stock} left in stock - order soon</small></p>
            <br/>
            <button className="add-cart-btn" onClick = {() => props.handleAddBtn(props.item)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;