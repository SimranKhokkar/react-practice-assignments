import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNewMessage extends Component {
  state = {
    message: ''
  }

  static propTypes = {
    username: PropTypes.string.isRequired,
    addMessage: PropTypes.func.isRequired
  }

  handleChange = event => {
    this.setState({message: event.target.value})
  }

  isDisabled = () => {
    return this.state.message === '';
  };

 render() {
   return (
     <div>
      <form className="input-group" onSubmit={this.props.addMessage}>
       <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.message} 
		onChange={this.handleChange} />
   		<input type="hidden" value={this.props.username} />
       <div className="input-group-append">
        <button className="btn submit-button" disabled={this.isDisabled()}>
        SEND
        </button>
       </div>
     </form>
     </div>
   )
 } 
}

export default AddNewMessage;