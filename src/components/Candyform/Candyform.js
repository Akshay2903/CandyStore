import React, { useState } from 'react';
import './CandyForm.css';


function CandyForm(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const candy = { name, description, price };
    props.onAddCandy(candy);
    setName('');
    setDescription('');
    setPrice('');
  }

  return (
    <form onSubmit={handleSubmit} className='candy-form'>
      <label>
        Candy Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Candy Description:
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>
        Candy Price:
        <input type="text" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <button type="submit">Add Candy</button>
    </form>
  );
}

export default CandyForm;
