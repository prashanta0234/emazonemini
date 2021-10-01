import React from 'react';
import { NavLink} from 'react-router-dom';
// import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useproduct';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Review from '../review/Review';

const Order = () => {
    // const history = useHistory()
    const [products]=useProduct();
    const [cart,setCart]=useCart(products);
    // console.log(cart)
    const remove=key=>{
        const newCart=cart.filter(product =>product.key !== key);
        setCart(newCart)
        deleteFromDb(key)

    }
    const handlePlaceOrder =()=>{
        // history.push('/placeorder');
        setCart([]);
        clearTheCart();

    }
    return (
        <div>
             <div className="shop">
                <div></div>
                <div>
                    {
                        cart.map(product => <Review
                        product={product}
                        key={product.key}
                        remove={remove} >                                
                        </Review>)
                    }
                </div>
                <div className="cartpage">
                <Cart cart={cart}>
                    <NavLink to="/placeorder">
                        <button className="addCartButton"  onClick={handlePlaceOrder}> Place Order</button>
                    </NavLink>
                </Cart>
                
                </div>
            </div>
        </div>
    );
};

export default Order;