import React, { useState } from 'react';

const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Create a new transaction object with the form data
    const newTransaction = {
      description,
      amount: (amount),
      category,
    };
    // Here you can add the newTransaction to the transactions list or send it to the server (optional)
    // Reset the form fields
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className="add-transaction">
      <h1>Add New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
