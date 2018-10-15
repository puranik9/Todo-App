import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {text: '', key: ''}
    };
  }

  handleInput = (event) => {
    const itemText = event.target.value;
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({currentItem})
  }

  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== '') {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {text: '', key: ''}
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
        return item.key !== key
    })
    this.setState({
      items: filteredItems
    })
}

  inputElement = React.createRef();

  render() {
    return (
      <div className="todo-wrapper">
        {this.state.items == 0
            ? <div><h2>No Todos Yet </h2> <p> Add a Todo to get started </p></div>
            : <div> {this.state.items.length} to do </div>}

        <TodoList
          addItem = {this.addItem}
          inputElement={this.inputElement}
          handleInput = {this.handleInput}
          currentItem = {this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem = {this.deleteItem}/>
      </div>
    );
  }
}

export default App;
