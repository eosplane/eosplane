import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import AirplanemodeActive from 'material-ui-icons/AirplanemodeActive';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/newStyle.css';
import '../css/main.css';


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

    const data = [
          {name: '2017-02-28 13:23:22', price: 1},
          {name: '2017-03-28 13:23:22', price: 1.33},
          {name: '2017-04-28 13:23:22', price: 2},
          {name: '2017-05-28 13:23:22', price: 5.7},
          {name: '2017-06-28 13:23:22', price: 4.3},
          {name: '2017-07-28 13:23:22', price: 2.1},
          {name: '2017-08-28 13:23:22', price: 3.2},
    ];

    return (
      <div className={classes.root}>
        <AreaChart className="areaChart" width={360} height={180} data={data}
              margin={{top: 10, right: 10, left: -20, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='price' stroke='teal' fill='#e0f2f1' />
        </AreaChart>

        <VerticalTimeline >
          <VerticalTimelineElement
            // className="vertical-timeline-element--work"
            date="2017-02-28 13:23:22"
            iconStyle={{ background: '#e0f2f1'}}
            icon={<AirplanemodeActive />}
          >
            <h3 >Sale</h3>
            <p>
              The plane was saled to Alice at 2.32 EOS.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: '#e0f2f1'}}
            icon={<AirplanemodeActive />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: '#e0f2f1'}}
            icon={<AirplanemodeActive />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: '#e0f2f1'}}
            icon={<AirplanemodeActive />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: '#e0f2f1'}}
            icon={<AirplanemodeActive />}
          >
            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>
              Strategy, Social Media
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    );
  }
}

PlaneTimeLine.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaneTimeLine);
