import React from 'react';
import PropTypes from 'prop-types';
import Messages from './Messages.js';
import AddNewMessage from './AddNewMessage.js';

const ChatWindow = (props) => { 
    return (
      <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      	<div className="name sender">{ props.user.username}</div>
		<Messages messages={props.messages} user={props.user}/>
		<AddNewMessage username={props.user.username} addMessage={props.addMessage}/>
	  </div>
    )
  }

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired,
}

export default ChatWindow;