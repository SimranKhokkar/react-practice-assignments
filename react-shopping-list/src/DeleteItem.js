import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DeleteItem extends Component {
  static proptypes = {
  onDeleteItem: PropTypes.func.isRequired,
  noItems: PropTypes.func.isRequired
  }
render() {
  const { onDeleteItem, noItems } = this.props;
  
  return (
    <button onClick={() => onDeleteItem()} disabled={noItems()}>
          Delete Last Item
    </button>
  )
}
}

export default DeleteItem;