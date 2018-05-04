import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class NotSaleDialog extends React.Component {

  handleClose = event => {
    this.props.closeNotSaleDialog();
  };

  notSale = event => {
    this.props.notSale();
  };

  render() {

    return (
      <div>

        <Dialog
          open={this.props.showNotSaleDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Not Sale</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure NOT to sale this plane?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.notSale} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

NotSaleDialog.propTypes = {
  showNotSaleDialog: React.PropTypes.bool.isRequired,
  closeNotSaleDialog: React.PropTypes.func.isRequired,
  notSale: React.PropTypes.func.isRequired,

};

export default withStyles(styles)(NotSaleDialog);
