import React from 'react';
import Typography from '@material-ui/core/Typography';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date(), start: new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		this.end();
		clearInterval(this.timerID)
	}

	tick() {
		if (!this.props.stop) {
			this.setState({
				date: new Date()
			});
		} else {
			this.setState({
				date: new Date("0000-01-01T00:00:00"),
			});
		}	
	}


	end() {
		let estimated = Math.floor(new Date() - this.state.start)/1000;
		console.log("Time Estimated? " + estimated.toString() + " seconds");
	}

	render() {
		return (
			<div style={{marginTop: '32px', marginLeft: '10px'}}>
				<Typography variant="h6"> this is {!this.props.stop?this.state.date.toLocaleTimeString():"stopped timer :)"}</Typography>
			</div>
		)
	};
}

Clock.defaultProps = {
	stop: false
};

export default Clock;