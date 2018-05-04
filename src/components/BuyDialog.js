import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { getEOS } from '../helpers';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class BuyDialog extends React.Component {

  handleClose = event => {
    this.props.closeBuyDialog();
  };

  buy = event => {
    this.props.buy();
  };

  render() {

    let contentText = "";
    let actions = "";

    if(getEOS(this.props.account["eos_balance"]) < this.props.plane["price"]) {
      contentText = <DialogContentText>
                      Sorry, your EOS balance is insufficent.<br/>
                      The plane price is {this.props.plane["price"]} EOS
                      while your balance is {this.props.account["eos_balance"]}.
                    </DialogContentText>

      actions = <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                </DialogActions>;
    } else {
      contentText = <DialogContentText>
                      Are you sure to buy this plane at the price {this.props.plane['price']} EOS?
                    </DialogContentText>

      actions = <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.buy} color="primary">
                    Confirm
                  </Button>
                </DialogActions>;
    }

    return (
      <div>

        <Dialog
          open={this.props.showBuyDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Buy</DialogTitle>
          <DialogContent>
            {contentText}
          </DialogContent>
          {actions}
        </Dialog>
      </div>
    );
  }
}

BuyDialog.propTypes = {
  plane: React.PropTypes.object.isRequired,
  account: React.PropTypes.object.isRequired,
  showBuyDialog: React.PropTypes.bool.isRequired,
  closeBuyDialog: React.PropTypes.func.isRequired,
  buy: React.PropTypes.func.isRequired,
};

export default withStyles(styles)(BuyDialog);
