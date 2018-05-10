import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import AirplanemodeActive from 'material-ui-icons/AirplanemodeActive';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/newStyle.css';
import '../css/main.css';

const HISTORY_ACTION = {
  CREATE: 1,
  SALE: 2,
  AUCTION: 3,

}

const styles = theme => ({
  root: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    display: 'block',
    margin: '0 auto',
  },

  timeLine: {
    background: 'teal',
  },
});



class PlaneTimeLine extends React.Component {

  render() {

    const { classes } = this.props;

    let chartData = [];
    let timelineData = [];

    for (let i = 0, length = this.props.plane.history.length; i < length; i++) {

      // chart data
      const chartItem = this.props.plane.history[length - i - 1];
      chartData[i] = {};
      chartData[i].name = chartItem.timestamp;
      if (chartItem.action === HISTORY_ACTION.CREATE) {
        chartData[i].price = 0;
      } else {
        chartData[i].price = chartItem.price;
      }

      // timeline data
      const timelineItem = this.props.plane.history[i];

      timelineData[i] = {};
      timelineData[i].timestamp = timelineItem.timestamp

      if (timelineItem.action === HISTORY_ACTION.CREATE){
        timelineData[i].action = "Create";
        timelineData[i].desc = "Created by factory.";
      } else if (timelineItem.action === HISTORY_ACTION.SALE){
        timelineData[i].action = "Sale";
        timelineData[i].desc = timelineItem.buyer + " bought the plane from " + timelineItem.saler + " at " + timelineItem.price + " EOS.";
      } else if (timelineItem.action === HISTORY_ACTION.AUCTION){
        timelineData[i].action = "Auction";
        timelineData[i].desc = timelineItem.buyer + " won the auction at " + timelineItem.price + " EOS.";
      }
    }

    return (
      <div className={classes.root}>
        <AreaChart className="areaChart" width={360} height={180} data={chartData}
              margin={{top: 10, right: 10, left: -20, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='price' stroke='teal' fill='#e0f2f1' />
        </AreaChart>

        <VerticalTimeline >

          {timelineData.map(item => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={item.timestamp}
            iconStyle={{ background: '#e0f2f1'}}
            icon={<AirplanemodeActive />}
          >
            <h3 >{item.action}</h3>
            <p>
              {item.desc}
            </p>
          </VerticalTimelineElement>
          ))}

        </VerticalTimeline>
    </div>
    );
  }
}

PlaneTimeLine.propTypes = {
  classes: PropTypes.object.isRequired,
  plane: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaneTimeLine);
