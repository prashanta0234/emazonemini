import React from 'react';

import './Cart.css'
const Cart = (props) => {

    const {cart}=props;
      
    
    let total=0;
    let totalquantity=0;
    
    for(const productp of cart){
        
        if(!productp.quantity){
            productp.quantity=1;
        }
        total= total +productp.price;
       totalquantity= totalquantity + productp.quantity;
       
    }
   
    let shiping=0;
    for(const ship of cart){
        shiping=shiping+ship.shipping
    }
    const tax= (total+shiping)*0.20;
     
    
     
     

    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Orderd:{totalquantity} </h4>
            <h5>Total: {parseFloat(total).toFixed(2)}</h5>
            <h5>Shiping:{parseFloat(shiping).toFixed(2)}</h5>
            <h5>Tax: {tax.toFixed(2)}</h5>            
             {props.children}
            
        </div>
    );
};

export default Cart;