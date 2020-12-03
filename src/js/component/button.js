import React from "react";
import PropTypes from "prop-types";

export class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: "",
			id: ""
		};
	}

	render() {
		return (
			<button className="btn btn-success" id="btn">
				STOP!
			</button>
		);
	}
}

Button.PropTypes = {
	function: PropTypes.string
};
