import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Input from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { getEOS, isPrice, formatPrice } from '../helpers';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class BidDialog extends React.Component {

  constructor() {
    super();

    this.state = {
      newBid: 0,
      validBid: true,
      bidHelpText: "",
      confirmed: false,
      confirmedHelpText: <FormHelperText>Please agree to the above conditions.</FormHelperText>,
    };
  }

  componentWillMount(){
    let startingPrice = 1;
    let currentBid = startingPrice;

    this.props.bidHistory.forEach((item, index, array) => {
      if(currentBid < item.bid) {
        currentBid = item.bid;
      }
    });

    let lowestBid = currentBid + 0.1;
    if(currentBid === startingPrice) {
      lowestBid = startingPrice;
    }

    this.setState({ newBid: lowestBid });
  }

  handleChange = prop => event => {

    if(prop === "confirmed"){
      if (event.target.checked) {
        this.setState({ confirmed: true});
        this.setState({ confirmedHelpText: "" });
      } else {
        this.setState({ confirmed: false});
        let confirmedHelpText = <FormHelperText>Please agree to the above conditions.</FormHelperText>
        this.setState({ confirmedHelpText: confirmedHelpText});
      }
      return;
    }

    let startingPrice = 1;
    let currentBid = startingPrice;

    this.props.bidHistory.forEach((item, index, array) => {
      if(currentBid < item.bid) {
        currentBid = item.bid;
      }
    });

    let lowestBid = currentBid + 0.1;
    if(currentBid === startingPrice) {
      lowestBid = startingPrice;
    }

    let validBid = true;
    let newBid = parseFloat(event.target.value);
    let bidHelpText = "";

    if (!isPrice(newBid)) {
      validBid = false;
      bidHelpText = <FormHelperText>Invalid bid.</FormHelperText>
    } else if (newBid < lowestBid) {
      validBid = false;
      bidHelpText = <FormHelperText>Your bid can NOT be less than {lowestBid} EOS.</FormHelperText>
    } else if (newBid > getEOS(this.props.account["eos_balance"])) {
      validBid = false;
      bidHelpText = <FormHelperText>Sorry, your EOS balance is insufficent.</FormHelperText>
    } else {
      newBid = formatPrice(newBid);
      validBid = true;
    }

    this.setState({ validBid: validBid });
    this.setState({ newBid: newBid });
    this.setState({ bidHelpText: bidHelpText });

  };

  handleClose = event => {
    this.props.closeBidDialog();
  };

  bid = event => {
    if(this.state.validBid && this.state.confirmed) {
      this.props.bid(this.state.newBid);
    }
  };

  render() {

    let myBid = 0;

    this.props.bidHistory.forEach((item, index, array) => {
      if(this.props.account["account_name"] === item.account && myBid < item.bid) {
        myBid = item.bid;
      }
    });

    let deltaBid = formatPrice(this.state.newBid - myBid);

    let conditions = "I have understand and agree that " +  deltaBid + " EOS from my balance will be locked and can NOT be used untill the auction ends.";

    return (
      <div>

        <Dialog
          open={this.props.showBidDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Bid</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please set a price in EOS.
            </DialogContentText>
            <FormControl fullWidth error={!this.state.validBid}>
              <Input autoFocus={true} id="newBid" type="number" value={this.state.newBid} onChange={this.handleChange("newBid")} />
              {this.state.bidHelpText}
            </FormControl>
            <FormControl  fullWidth error={!this.state.confirmed}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.confirmed}
                    onChange={this.handleChange('confirmed')}
                  />
                }
                label={conditions}
              />
              {this.state.confirmedHelpText}
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.bid} color="primary">
              Bid
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

BidDialog.propTypes = {
  plane: React.PropTypes.object.isRequired,
  account: React.PropTypes.object.isRequired,
  showBidDialog: React.PropTypes.bool.isRequired,
  closeBidDialog: React.PropTypes.func.isRequired,
  bid: React.PropTypes.func.isRequired,
  bidHistory: React.PropTypes.array.isRequired,
};

export default withStyles(styles)(BidDialog);
