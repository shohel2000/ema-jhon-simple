import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total2, prd) => total2 + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }    
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 15.99;
    }

    let tax = total / 10;
    
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items Ordered: {cart.length}</h3>
            <h4>Total: {formatNumber(total)}</h4>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax: {formatNumber(tax)}</small></p>
            <p>Total including Tax: {formatNumber(total + shipping+ tax)}</p>
        </div>
    );
};

export default Cart;