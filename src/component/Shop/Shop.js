import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [items,setItems]=useState([]);
    const [cart,setCart]=useState([]);
    const[displayProduct,setdisplayProduct]=useState([])
    useEffect( ()=>{
        fetch('products.JSON')
        .then(res=>res.json())
        .then(data=>{setItems(data);
            setdisplayProduct(data)})
    },[])
    useEffect(()=>{
        const storderproduct=getStoredCart();
        const savedProduct=[];
        
        if(items.length){
            for(const key in storderproduct){
                
                const addedProduct= items.find(product => product.key===key);
                if(addedProduct){
                    const quantity=storderproduct[key]
                    savedProduct.push(addedProduct);
                    addedProduct.quantity=quantity;
                }
               
               
             }
        }
        setCart(savedProduct)
        
    },[items])
    const click = (product) => {
      const exist=cart.find(pd=>pd.key===product.key);
      let newCart=[];
      if(exist){
          const rest=cart.filter(pd=>pd.key  !== product.key);
          exist.quantity=exist.quantity+1;
          newCart=[...rest,product]


      }
      else{
          product.quantity=1
          newCart=[...cart,product]
      }
    //   let cartItem=[...cart, products];
      setCart(newCart);
      addToDb(product.key)
    }
    const handleSearch= event =>{
        const inputValue=event.target.value;
        console.log(inputValue);
        const matched=items.filter(product=> product.name.toLowerCase().includes(inputValue.toLowerCase()));
        console.log(matched.length);
        setdisplayProduct(matched)
        

    }
    return (
        <>
            <div className="inputFeilld">
                <input type="text" placeholder="Search your product" onChange={handleSearch} />
            </div>
            <div className="shop">
                <div></div>
                <div>
                {
                    displayProduct.map(item=> <Product item={item} key={item.key} click={click}
                    handleSearch={handleSearch}></Product>)
                }
                </div>
                <div className="cartpage">
                <Cart cart={cart}></Cart>
                    <NavLink to="/review">
                        <button className="addCartButton">
                            Order Review
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Shop;