/**
 * Created by puranikk on 2018-10-15.
 */
import React, {Component} from 'react';

class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }
    render() {
        return (
            <div className = "todo-main">
                <div className = "todo-header">
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder= "New Todo"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="Submit">Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;