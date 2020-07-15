import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow.js';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    users: [
      { username: 'Amy' }, 
      { username: 'John' }
    ],
    messages: []
  }

 addNewMessage = (event) => {
   event.preventDefault();
   const message = {
     username: event.target[1].value,
     text: event.target[0].value,
   }
   this.setState((currState) => ({
    messages: [...currState.messages, message]
  }));
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    	{this.state.users.map((user) => (
          	<ChatWindow key={user.username} user={user} messages={this.state.messages} addMessage={this.addNewMessage} />
		))}
        </div>
    </div>
    );
  }
}

export default App;
