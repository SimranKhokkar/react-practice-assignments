import React from 'react';
import PropTypes from 'prop-types';

const Messages = (props) => {
  return (
    <div>
    <ul className="message-list">
      	{props.messages.map((message, index) => (
        	<li
        	key={index}
        	className={message.username === props.user.username ? 'message sender' : 'message recipient'}
        	>
        	<p>{`${message.username}: ${message.text}`}</p>
        	</li>
      	))}
    </ul>
    </div>
  )
}

Messages.propTypes = {
	messages: PropTypes.array.isRequired,
 	user: PropTypes.object.isRequired,
}

export default Messages;