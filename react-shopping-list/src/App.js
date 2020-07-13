import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './AddItem.js';

class App extends React.Component {
  
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem />
      </div>
    );
  }
}

export default App;
