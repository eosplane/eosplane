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
import Select from 'material-ui/Select';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { isPrice, formatPrice } from '../helpers';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class AuctionDialog extends React.Component {

  constructor() {
    super();

    this.state = {
      startingPrice: 1,
      validPrice: true,
      priceHelpText: "",
      days: 0,
      hours: 0,
      minutes: 5,
      confirmed: false,
      confirmedHelpText: <FormHelperText>Please agree to the above conditions.</FormHelperText>,
    };
  }

  handleChange = prop => event => {

    if(prop === "days"){
      this.setState({ days: event.target.value});
      return;
    }

    if(prop === "hours"){
      this.setState({ hours: event.target.value});
      return;
    }

    if(prop === "minutes"){
      this.setState({ minutes: event.target.value});
      return;
    }

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

    // starting price changed
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
    }

    this.setState({ validPrice: validPrice });
    this.setState({ startingPrice: price });
    this.setState({ priceHelpText: priceHelpText });

  };

  handleClose = event => {
    this.props.closeAuctionDialog();
  };

  auction = event => {

    if(this.state.validPrice && this.state.confirmed) {
      let duration = this.state.days * 24 * 60 * 60 + this.state.hours * 60 * 60 + this.state.minutes * 60;
      this.props.auction(this.state.startingPrice, duration);
    }
  };

  render() {

    const { classes } = this.props;

    return (
      <div>

        <Dialog
          open={this.props.showAuctionDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Auction</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To auction this plane, please set a starting price in EOS and duration.
              Once auction ends in success, you will receive the highest bid excluding 1% fee (0.1 EOS minimal).
            </DialogContentText>
            <FormControl fullWidth error={!this.state.validPrice}>
              <InputLabel>Starting Price</InputLabel>
              <Input autoFocus={true} id="startingPrice" type="number" value={this.state.startingPrice} onChange={this.handleChange("startingPrice")} />
              {this.state.priceHelpText}
            </FormControl>

            <DialogContentText>
              <br/><br/>
              The auction will end in:
            </DialogContentText>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="duration">Days</InputLabel>
              <Select
                native
                value={this.state.days}
                onChange={this.handleChange('days')}
                input={<Input id="days" />}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="duration">Hours</InputLabel>
              <Select
                native
                value={this.state.hours}
                onChange={this.handleChange('hours')}
                input={<Input id="hours" />}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
                <option value={21}>21</option>
                <option value={22}>22</option>
                <option value={23}>23</option>
                <option value={24}>24</option>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="duration">Minutes</InputLabel>
              <Select
                native
                value={this.state.minutes}
                onChange={this.handleChange('minutes')}
                input={<Input id="minutes" />}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>24</option>
                <option value={30}>30</option>
                <option value={35}>35</option>
                <option value={40}>40</option>
                <option value={45}>45</option>
                <option value={50}>50</option>
                <option value={55}>55</option>
                <option value={60}>60</option>
              </Select>
            </FormControl>

            <FormControl  fullWidth error={!this.state.confirmed}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.confirmed}
                    onChange={this.handleChange('confirmed')}
                  />
                }
                label="I have understand and agree that I can NOT operate my plane during the auction."
              />
              {this.state.confirmedHelpText}
            </FormControl>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.auction} color="primary">
              Auction
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AuctionDialog.propTypes = {
  showAuctionDialog: React.PropTypes.bool.isRequired,
  closeAuctionDialog: React.PropTypes.func.isRequired,
  auction: React.PropTypes.func.isRequired,
};

export default withStyles(styles)(AuctionDialog);
