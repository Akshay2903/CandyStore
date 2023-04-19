import React from 'react';
import './CandyList.css';


function CandyList(props) {
  return (
    <div className='candy-list'>
      {props.candies.map((candy) => (
        <div key={candy._id} >
          <h3>{candy.name}</h3>
          <p>{candy.description}</p>
          <p>{candy.price}</p>
          <button onClick={() => props.onAddToCart(candy, 1)}>Add 1 to Cart</button>
          <button onClick={() => props.onAddToCart(candy, 2)}>Add 2 to Cart</button>
          <button onClick={() => props.onAddToCart(candy, 3)}>Add 3 to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default CandyList;
