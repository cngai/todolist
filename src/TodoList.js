import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
	constructor(props) {
		super(props);

		/* define state object in constructor */
		this.state = {
			items: []		//items array to store various items that you can enter
		};

		this.addItem = this.addItem.bind(this);
	}

	addItem(e) {
		if (this._inputElement.value !== "") {
			//create variable that will store an object
			var newItem = {
				text: this._inputElement.value,			//entered text
				key: Date.now()							//unique key value set by current time
			};

			//set state's 'items' property
			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)	//ensure state object isn't modified
				};
			});

			this._inputElement.value = "";		//clear value of input element to make room for next todo item
		}

		console.log(this.state.items);

		//override event's default behavior
		//don't want to reload page and clear all itmes
		e.preventDefault();
	}

	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={ (a) => this._inputElement = a}
							placeholder="enter task">
						</input>
						<button type="submit">add</button>
					</form>
				</div>

				<TodoItems entries={this.state.items}/>
			</div>
		);
	}
}

export default TodoList;