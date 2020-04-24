import React, { Component } from 'react';
class Counter extends Component {
	getColorClasses() {
		let classes = 'zero-';
		classes += this.props.counter.value === 0 ? 'primary' : 'warning';
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
	render() {
		return (
			<div>
				<h1>React App</h1>
				<div>
					<span className={this.getColorClasses()}>{this.formatCount()}</span>
					<button
						onClick={() => this.props.onIncrement(this.props.counter)}
						className="btn-plus"
					>
						Increment
					</button>

					<button
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className="delete-btn"
					>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

export default Counter;
