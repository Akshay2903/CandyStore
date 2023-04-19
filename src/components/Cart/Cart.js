import React from 'react';
import './Cart.css';

function Cart(props) {
  return (
    <div className='cart'>
      <h2>Cart</h2>
      <ul>
        {props.cart.map((item) => (
          <li key={item.candy._id}>
            {item.candy.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
