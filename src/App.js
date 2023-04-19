import React, { useState, useEffect } from 'react';
import CandyForm from './components/Candyform/Candyform';
import CandyList from './components/CandyList/CandyList';
import Cart from './components/Cart/Cart';

function App() {
  const [candies, setCandies] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://crudcrud.com/api/1a0b3c7d68854ba9b2dfd988158655d7/candies')
      .then((response) => response.json())
      .then((data) => setCandies(data));
  }, []);

  function handleAddCandy(candy) {
    fetch('https://crudcrud.com/api/1a0b3c7d68854ba9b2dfd988158655d7/candies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(candy),
    })
      .then((response) => response.json())
      .then((data) => setCandies([...candies, data]));
  }

  function handleAddToCart(candy, quantity) {
    const itemIndex = cart.findIndex((item) => item.candy._id === candy._id);
    if (itemIndex === -1) {
      setCart([...cart, { candy, quantity }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    }
  }

  return (
    <div>
      <CandyForm onAddCandy={handleAddCandy} />
      <CandyList candies={candies} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
