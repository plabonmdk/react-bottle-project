import React from 'react';
import "./Bottle.css"

const Bottle = ({bottle, handleAddToCard}) => {
    // console.log(bottle);
    
    return (
        <div className='bottle-card'>
            <img className='image' src={bottle.image} alt="" />
            <div className='name-prai'>
                <h2>{bottle.name}</h2>
            <h2>৳{bottle.price}</h2>
            </div>
            <div className='name-prai'>
                <p>Brand: {bottle.brand}</p>
            <p>Capacity: {bottle.capacity}</p>
            </div>
            <button onClick={() => handleAddToCard(bottle)}>By Now</button>
        </div>
    );
};

export default Bottle;