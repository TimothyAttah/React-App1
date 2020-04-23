import React, { Component } from 'react';
class Counter extends Component {
	state = {
		count: 0,
	};

	incrementCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<h1>React App</h1>
				<div>
					<span className={this.getColorClasses()}>{this.formatCount()}</span>
					<button onClick={this.incrementCount} className="btn-plus">
						Increment
					</button>
				</div>
			</div>
		);
	}

	getColorClasses() {
		let classes = 'zero-';
		classes += this.state.count === 0 ? 'primary' : 'warning';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;
