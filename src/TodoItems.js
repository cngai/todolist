import React, { Component } from "react";

class TodoItems extends Component {
	createTasks(item) {
		return <li key={item.key}>{item.text}</li>
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