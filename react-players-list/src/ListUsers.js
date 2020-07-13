import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListUsers extends Component {
  state = {
    hide: 0
  }

  static propTypes = {
    users: PropTypes.array.isRequired,
  }

  hideContent = () => {
    this.setState((currState) => ({ hide: currState.hide === 0 ? 1 : 0 }));
  }

render() {
  return (
  	<div>
     <ol>
     { this.props.users.map((user) => (
  		<li key={ user.username }>
		{ user.username } played {this.state.hide === 0 ? user.noOfGames : '*' } games
		</li>
  	 ))}
     </ol><br></br>
	 <button onClick={ this.hideContent }>
	 { this.state.hide === 0 ? 'Hide the Number of Games Played' : 'Show the Number of Games Played' }
	 </button>
    </div>
  )
}
}

export default ListUsers;