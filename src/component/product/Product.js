import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating'
// import { clearTheCart } from '../../utilities/fakedb';
const Product = (props) => {
    console.log(props.item);
    const {name,seller,price,img,stock,star}=props.item;
    const element = <FontAwesomeIcon icon={faCartPlus} />

    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div className="product-infromation">
            <h4>Product Name:{name}</h4>
            <h5>By;{seller}</h5>
            <h5>Price:{price}</h5>
            <h5>only {stock} left in stock - order soon</h5>
            <Rating className="rating"
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
            initialRating={star}
            />
            <br />
            <button
            onClick={()=>props.click(props.item)}
            className="addCartButton"> {element} add to cart</button>
            
            </div>
            
        </div>
    );
};

export default Product;