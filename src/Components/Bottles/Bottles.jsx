import React, {use, useState} from 'react';
import Bottle from './Bottle/Bottle';





const Bottles = ({bottlesPromise}) => {
const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);
    // console.log(bottles);
    
    const handleAddToCard = (bottle) => {

        setCart([...cart,bottle])
        console.log(cart);
        
    }
    
    return (
        <div>
            <h2>Bottles : {bottles.length}</h2>
            <h3>Add To Cart: {cart.length}</h3>
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