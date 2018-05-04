import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: '0 auto',
  },
  title: {
    flex: '0 0 auto',
  },
  table: {
    // minWidth: 700,
  },
});



class BidHistory extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <div className={classes.title}>
          <Typography type="title"><br/>&nbsp;&nbsp;&nbsp;Bid History</Typography>
        </div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {/* <TableCell>Seq</TableCell> */}
              <TableCell>Timestamp</TableCell>
              <TableCell numeric>Bid (EOS)</TableCell>
              <TableCell>Account</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.bidHistory.map(bid => (
                <TableRow key={bid.seq}>
                  {/* <TableCell>{bid.seq}</TableCell> */}
                  <TableCell>{bid.timestamp}</TableCell>
                  <TableCell numeric>{bid.bid}</TableCell>
                  <TableCell>{bid.account}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

BidHistory.propTypes = {
  classes: PropTypes.object.isRequired,
  bidHistory: React.PropTypes.array.isRequired,
};

export default withStyles(styles)(BidHistory);
