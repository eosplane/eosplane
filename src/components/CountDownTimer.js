import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    color: '#82817d',
  },
});

class CountDownTimer extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 5 };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let days = Math.floor(secs / (60 * 60 * 24));

    let divisor_for_hours = secs % (60 * 60 * 24);
    let hours = Math.floor(divisor_for_hours / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "d": days,
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentWillMount() {
    this.setState({
      time: this.secondsToTime(this.props.seconds),
      seconds: this.props.seconds,
    });

    this.timer = setInterval(this.countDown, 1000);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {

    const { classes } = this.props;

    let timeLeft = "";

    if (this.state.time.d > 0) {
      timeLeft = this.state.time.d + "d " + this.state.time.h + "h " + this.state.time.m + "m " + this.state.time.s + "s";
    } else if (this.state.time.h > 0) {
      timeLeft = this.state.time.h + "h " + this.state.time.m + "m " + this.state.time.s + "s";
    } else if (this.state.time.m > 0) {
      timeLeft = this.state.time.m + "m " + this.state.time.s + "s";
    } else {
      timeLeft = this.state.time.s + "s";
    }

    return(
      <span className={classes.root}>{timeLeft}</span>
    );
  }
}

CountDownTimer.propTypes = {
  classes: PropTypes.object.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default withStyles(styles)(CountDownTimer);
