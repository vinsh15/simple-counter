import React from "react";
import PropTypes from "prop-types";

// export class Button extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<button
// 				className={this.props.type}
// 				onClick={this.props.function}
// 				id="btn">
// 				{this.props.label}
// 			</button>
// 		);
// 	}
// }

export const Button = props => {
	return (
		<button
			className={this.props.type}
			onClick={this.props.function}
			id="btn">
			{this.props.label}
		</button>
	);
};

Button.PropTypes = {
	function: PropTypes.function,
	type: PropTypes.string,
	label: PropTypes.string
};
