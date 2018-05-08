import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Select from 'material-ui/Select';
import { withStyles } from 'material-ui/styles';
import PlaneGridList from './PlaneGridList';
import axios from 'axios';
import { CircularProgress } from 'material-ui/Progress';
import STATUS from '../PlaneStatus';
import crc from 'js-crc';

const PLANES_PER_PAGE = 12;

const styles = theme => ({
  root: {
    // display: 'block',
  },

  AppBar: {
    position: 'static',
    backgroundColor: 'white',
    color: 'black',
    boxShadow: '0 0',
    borderBottom: '1px solid rgba(77, 182, 172, .3)',
    display: 'inline-block',
  },

  Tabs: {
    position: 'relative',
    bottom: '-5px',
    display: 'inline-block',
    margin: '0 0 0 16%',
  },

  Tab: {
    float: 'left',

  },

  SortByContainer: {
    position: 'relative',
    border: "1px solid rgba(77, 182, 172, .3)",
    borderRadius: '99rem',
    marginTop: '10px',
    marginBottom: '10px',
    padding: '0 9px 0px 9px',
    float: 'right',
    display: 'inline-block',
    margin: '0 19% 0 0',
    bottom: '-5px',
  },

  SortBy: {
    // marginTop: theme.spacing.unit * 2,
    minWidth: '130px',
    fontSize: '12px',
    // border: "1px solid rgba(77, 182, 172, .3)",
    // width: 0,
    // height: 0,
    // float: 'right',
  },

  Progress: {
    marginTop: '10%',
    marginLeft: '45%',
  }
});

class Planes extends React.Component {

  constructor() {
    super();

    this.state = {
      progress: true,
      planes: [],
      count: 0,
      selectedStatus: STATUS.FOR_SALE,
      sortBy: 0,
    };
  }

  handlePageChange = (data) => {

    this.fetchManyPlanes(this.state.selectedStatus, -1, data.selected * PLANES_PER_PAGE, PLANES_PER_PAGE);

  };

  handleTabChange = (event, selectedStatus) => {

    this.setState({ selectedStatus: selectedStatus });
    this.fetchManyPlanes(selectedStatus, -1, 0, PLANES_PER_PAGE);

  };

  handleSortChange = name => event => {
    this.setState({ sortBy: event.target.value });

    this.setState({progress: true});
    setTimeout(() => {
      this.setState({
        progress: false,
      });
    }, 2e3);
  };

  goToPlane(planeId) {
    this.context.router.transitionTo(`/plane/${planeId}`);
  }

  fetchManyPlanes = (status, sort, skip, limit) => {
    // get plane
    axios.get('http://localhost:8080/fetch_many_planes?status=' + status + '&sort=' + sort + '&skip=' + skip + '&limit=' + limit)
      .then( (response) => {
        this.setState({
          planes: response.data.planes,
          count: response.data.count,
          progress: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentWillMount() {

    this.fetchManyPlanes(STATUS.FOR_SALE, -1, 0, PLANES_PER_PAGE);

  }

  render() {
    const { classes } = this.props;

    let planeList = "";

    if(this.state.progress) {
      planeList = <div className={classes.Progress}>
                    <CircularProgress/>
                </div>
    } else {
        planeList = <PlaneGridList planes={this.state.planes} pageCount={Math.ceil(this.state.count/PLANES_PER_PAGE)} handlePageChange={this.handlePageChange}/>;
    }


    return (

      <div className={classes.root}>
        <AppBar className={classes.AppBar}>

          <div className={classes.SortByContainer}>
              <Select
                native
                value={this.state.sortBy}
                onChange={this.handleSortChange('age')}
                className={classes.SortBy}
              >
                <option value={0}>Most expensive first</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </div>

          <Tabs
            center
            className={classes.Tabs}
            value={this.state.selectedStatus}
            onChange={this.handleTabChange}
            indicatorColor="teal">
            <Tab value={STATUS.FOR_SALE} className={classes.Tab} label="For Sale" />
            <Tab value={STATUS.FOR_BID} className={classes.Tab} label="Auction" />
            <Tab value={STATUS.ALL} className={classes.Tab} label="All Planes"/>
          </Tabs>

        </AppBar>
        {planeList}
      </div>
    )
  }
}


Planes.contextTypes = {
  router: React.PropTypes.object
};

Planes.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Planes);
