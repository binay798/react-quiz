import React from 'react';
import Homepage from './containers/Homepage/Homepage';
import Store from './Store/Store';


function App() {
  return (
    <Store>
        <div className="App">
          <Homepage />
        </div>
    </Store>
    
  );
}

export default App;
