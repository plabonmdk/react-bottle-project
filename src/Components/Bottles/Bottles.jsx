import React, {use, useEffect, useState} from 'react';
import Bottle from './Bottle/Bottle';
import { addToStoredCart, getStoreCart, removeFromCart } from '../../Utlitis/Localstorage';
import Cart from '../Cart/Cart';





const Bottles = ({bottlesPromise}) => {
const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);
    // console.log(bottles);

    // useEffect
    useEffect(() => {
        const storedCartIds = getStoreCart()
        // console.log(storedCartIds, bottles);
        const storedCart = [];
        for(const id of storedCartIds){
            const cartBottle = bottles.find(bottles => bottles.id === id);
            if(cartBottle){
                storedCart.push(cartBottle) 
            }
        }
        setCart(storedCart)
        
    }, [bottles])
    
    const handleAddToCard = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        
        // save the bottle id in the storage
        addToStoredCart(bottle.id)

    }

    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeFromCart(id)
    }
    
    return (
        <div>
            <h2>Bottles : {bottles.length}</h2>
            <h3>Add To Cart: {cart.length}</h3>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='bottles-container'>
                {
                bottles.map(bottle => <Bottle 
                    handleAddToCard={handleAddToCard}
                    key={bottle.id} bottle={bottle}
                    ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;