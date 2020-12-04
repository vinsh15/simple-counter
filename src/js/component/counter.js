import React from "react";
import { Button } from "./button";
import PropTypes from "prop-types";

export class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			intervalId: null
		};
		this.startCounter = this.startCounter.bind(this);
		this.stopCounter = this.stopCounter.bind(this);
	}

	startCounter() {
		if (this.state.intervalId == null) {
			var id = setInterval(() => {
				this.setState({
					counter: this.state.counter + 1
				});
			}, 1000);
		}
		this.setState({
			intervalId: id
		});
	}

	componentDidMount() {
		this.startCounter();
	}

	stopCounter(event) {
		if (this.state.intervalId != null) {
			clearInterval(this.state.intervalId);
			this.setState({
				intervalId: null
			});
		}
	}

	render() {
		return (
			<div className="mt-5" id="principal">
				<div id="icon">
					<i className="far fa-clock" />
				</div>
				<div id="1">
					<h2>Weeks</h2>
					<h2>{Math.floor(this.state.counter / 604800)}</h2>
				</div>
				<div id="1">
					<h2>Days</h2>
					<h2>{Math.floor(this.state.counter / 86400) % 7}</h2>
				</div>
				<div id="1">
					<h2>Hrs</h2>
					<h2>{Math.floor(this.state.counter / 3600) % 24}</h2>
				</div>
				<div id="1">
					<h2>Min</h2>
					<h2>{Math.floor(this.state.counter / 60) % 60}</h2>
				</div>
				<div id="1">
					<h2>Sec</h2>
					<h2>{Math.floor(this.state.counter % 60)}</h2>
				</div>
				<div id="btn">
					<button
						className="btn btn-success"
						onClick={this.startCounter}
						id="buttons">
						Start!
					</button>
					<button
						className="btn btn-danger"
						onClick={this.stopCounter}
						id="buttons">
						Stop!
					</button>
					<button
						className="btn btn-warning"
						id="buttons"
						onClick={e => this.setState({ counter: 0 })}>
						Reset!
					</button>
					{/* <Button
						label="AAAAAA"
						type="btn btn-danger"
						function={this.stopCounter}
					/> */}
				</div>
			</div>
		);
	}
}
