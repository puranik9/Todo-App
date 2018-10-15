/**
 * Created by puranikk on 2018-10-15.
 */
import React, {Component} from 'react';

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({checked: !this.state.checked})
    }

    createTasks = item => {
        return (
            <div className="created-task">
                <li className={this.state.checked ? 'done' : ''} key={item.key}>
                    <label>
                        <input type="checkbox" onChange={this.handleChange}/>
                    </label>
                    <span>{item.text}</span>
                </li>
                <button onClick={() => this.props.deleteItem(item.key)}>X</button>
            </div>
        )}

    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return <ul className="theList">{listItems}</ul>
    }
}

export default TodoItems;