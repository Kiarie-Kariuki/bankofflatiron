import React, { useState, useEffect } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTransaction, setSearchTransaction] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = event => {
    setSearchTransaction(event.target.value);
  };

  const handleDelete = e => {
    const transactionIdToDelete = e.target; 

fetch(`http://localhost:3000/transactions/${transactionIdToDelete}`, {
  method: "DELETE",
})
  .then(response => {
    if (response.ok) {
      console.log("Transaction deleted successfully.");
    } else {
      console.error("Failed to delete transaction.");
    }
  })
  .catch(error => console.error("Error deleting transaction:", error));

  }

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.includes(searchTransaction)
  );

  return (
    <div className="transactions">
      <h1>All Transactions</h1>
      <input
        type="text"
        placeholder="Search by description..."
        value={searchTransaction}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
            {/* <td> */}
              {/* Delete button to delete ttransaction  with transaction.id */}
              {/* <button onClick={handleDelete}>
                Delete
              </button> */}
            {/* </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
