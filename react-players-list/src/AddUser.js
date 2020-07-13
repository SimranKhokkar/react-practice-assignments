import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    exists: 0
  }

static propTypes = {
  addUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}

handleChange = (name,value) => {
    this.setState((currState) => ({
      [name]: value,
    }));
 };

updateState() {
  this.setState({ firstname: '', lastname: '', username: '', exists: 0 });
}

handleSubmit = event => {
  event.preventDefault();
    if((this.props.users.filter((user) => user.username === this.state.username)).length > 0) {
    this.setState(() => ({exists: 1}))
  } else {
  	const user = {
  		firstname: this.state.firstname,
  		lastname: this.state.lastname,
  		username: this.state.username,
  		noOfGames: 0
	}
	 this.updateState();
	 this.props.addUser(user);
 }
}

inputIsEmpty = () => {
    if(this.state.firstname === '' || this.state.lastname === '' || this.state.username === '') {
      return true;
    }
  return false;
};

render() {
  return (
  	<div>
      <form onSubmit={this.handleSubmit}>
  		<input type="text" placeholder="Enter Firstname" value={this.state.firstname} 
		onChange={event => this.handleChange('firstname', event.target.value)}/>
		<input type="text" value={this.state.lastname} placeholder="Enter Lastname" 
		onChange={event => this.handleChange('lastname', event.target.value)}/>
		<input type="text" value={this.state.username} placeholder="Enter Username" 
		onChange={event => this.handleChange('username', event.target.value)}/>
		{this.state.exists === 1 ? <p className="error">Username already exists</p> : ''}
		<button disabled={this.inputIsEmpty()}>Add User</button>
  	  </form>
    </div>
  )
}
}

export default AddUser;