import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart= products=>{
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const storderproduct=getStoredCart();
        const savedProduct=[];
        
        if(products.length){
            for(const key in storderproduct){
                
                const addedProduct= products.find(product => product.key===key);
                if(addedProduct){
                    const quantity=storderproduct[key]
                    savedProduct.push(addedProduct);
                    addedProduct.quantity=quantity;
                }
               
               
             }
            setCart(savedProduct)
        }
        
    },[products])
    return [cart,setCart];
}
export default  useCart;