import React, { Component } from "react";

class TodoItems extends Component {
	constructor(props) {
		super(props);

		this.createTasks = this.createTasks.bind(this);
	}

	delete(key) {
		this.props.delete(key);
	}

	createTasks(item) {
		return <li onClick={() => this.delete(item.key)}
				key={item.key}>{item.text}</li>
	}

	render() {
		/* take todo items and turn them into JSX/HTML elements */
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return (
		/* array of li items */
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
};

export default TodoItems;