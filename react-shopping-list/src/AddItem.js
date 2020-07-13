import React, {Component} from 'react';
import DeleteItem from './DeleteItem.js';
import ListItems from './ListItems.js';

class AddItem extends Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
      value:''
    }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };
  
   deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

 render() {
   return (
   <div>
   <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
	<DeleteItem onDeleteItem={this.deleteLastItem} noItems={this.noItemsFound} />
	<ListItems items={this.state.items} />
	</div>
   )
 }
}

export default AddItem;