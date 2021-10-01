import React from 'react';
import './Review.css'
const Review = (props) => {
    console.log(props.product)
    const {name,price,quantity,seller,key}=props.product
    const{remove}=props;
    return (
        <div className="review">
            <div className="product-info">
               <h4>{name}</h4> 
            </div>
            <div  className="product-infromation">
                <div> 
                   <h4>Price: {price}</h4> 
                    <h4>Seller: {seller}</h4> 
                    <h4>Quantity: {quantity}</h4>
                    <button className="addCartButton"
                        onClick={()=>remove(key)}
                    > Remove</button> 
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Review;