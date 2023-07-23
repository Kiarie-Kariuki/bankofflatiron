import React from 'react';
import Transactions from './Transactions';
import AddTransaction from './AddTransaction';

function App() {
  return (
      <div className="App">
        <Transactions transactions={Transactions} />
        <AddTransaction  />
      </div>
  );
}

export default App;
