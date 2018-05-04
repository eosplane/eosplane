import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { isPrice, formatPrice } from '../helpers';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class SaleDialog extends React.Component {

  constructor() {
    super();

    this.state = {
      price: 0,
      validPrice: true,
      priceHelpText: "",
    };
  }

  componentWillMount(){
    this.setState({ price: this.props.plane['price'] });
  }

  handleChange = prop => event => {

    let validPrice = true;
    let price = parseFloat(event.target.value);
    let priceHelpText = "";

    if (!isPrice(price)) {
      validPrice = false;
      priceHelpText = <FormHelperText>Invalid price</FormHelperText>
    } else if (price < 0.1) {
      validPrice = false;
      priceHelpText = <FormHelperText>Price must > 0.1 EOS</FormHelperText>
    } else {
      price = formatPrice(price);
      validPrice = true;
      let fee = 0.1;
      if(price*0.01 > 0.1){
        fee = price*0.01
      }
      priceHelpText = <FormHelperText>You will get {formatPrice(price - fee)} EOS</FormHelperText>
    }

    this.setState({ validPrice: validPrice });
    this.setState({ price: price });
    this.setState({ priceHelpText: priceHelpText });

  };

  handleClose = event => {
    this.props.closeSaleDialog();
  };

  setPrice = event => {
    if(this.state.validPrice) {
      this.props.setPrice(this.state.price);
    }
  };

  render() {

    return (
      <div>

        <Dialog
          open={this.props.showSaleDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Set Price</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To sale this plane, please set a price in EOS. Once someone buys it,
              you will receive the amount of EOS excluding 1% fee (0.1 EOS minimal).
            </DialogContentText>
            <FormControl fullWidth error={!this.state.validPrice}>
              <InputLabel>Price</InputLabel>
              <Input autoFocus={true} id="price" type="number" value={this.state.price} onChange={this.handleChange("price")} />
              {this.state.priceHelpText}
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.setPrice} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SaleDialog.propTypes = {
  plane: React.PropTypes.object.isRequired,
  showSaleDialog: React.PropTypes.bool.isRequired,
  closeSaleDialog: React.PropTypes.func.isRequired,
  setPrice: React.PropTypes.func.isRequired,

};

export default withStyles(styles)(SaleDialog);
