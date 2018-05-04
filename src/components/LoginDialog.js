import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import EOS from 'eosjs';
import ecc from 'eosjs-ecc';


class LoginDialog extends React.Component {

  constructor() {
    super();

    this.state = {
      login: {},
      showPassword: false,
      validAccountName: true,
      validOwnerKey: true,
      validActiveKey: true,
    };
  }

  handleChange = prop => event => {
    const login = {...this.state.login};
    login[prop] = event.target.value;
    this.setState({ login });

    if(prop === "accountName"){
      this.setState({ validAccountName: event.target.value !== null && event.target.value !== ""})
    }

    if(prop === "ownerKey"){
      this.setState({ validOwnerKey: event.target.value !== null && event.target.value !== ""})
    }

    if(prop === "activeKey"){
      this.setState({ validActiveKey: event.target.value !== null && event.target.value !== ""})
    }

  };

  handleClose = event => {
    this.clearDaiglog();
    this.props.closeLoginDialog();
  };

  clearDaiglog = event => {
    this.setState({
      login: {},
      validAccountName: true,
      validOwnerKey: true,
      validActiveKey: true,
    })
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  loginToEOS = () => {

    let config = {
      httpEndpoint: 'http://t1readonly.eos.io',
      expireInSeconds: 60,
      broadcast: true,
      debug: true,
      sign: true
    };

    let eos = EOS.Localnet(config);

    if(this.state.login["accountName"] !== null && this.state.login["accountName"] !== ""){
      this.setState({ validAccountName: true });
    } else {
      this.setState({ validAccountName: false });
    }

    if(this.state.login["ownerKey"] !== null && this.state.login["ownerKey"] !== ""){
      this.setState({ validOwnerKey: true });
    } else {
      this.setState({ validOwnerKey: false });
    }

    if(this.state.login["activeKey"] !== null && this.state.login["activeKey"] !== ""){
      this.setState({ validActiveKey: true });
    } else {
      this.setState({ validActiveKey: false });
    }

    if(!this.state.validAccountName || !this.state.validOwnerKey || !this.state.validActiveKey) {
      return;
    }

    //login logic
    if(this.state.login["accountName"] && this.state.login["ownerKey"] && this.state.login["activeKey"]) {
      eos.getAccount(this.state.login["accountName"])
      .then(account => {
        // check private keys
        account["permissions"].forEach((item, index, array) => {
          if(item["perm_name"] === "owner"){
            //owner key
            const pubkey = item["required_auth"]["keys"][0]["key"];
            if(!ecc.isValidPrivate(this.state.login["ownerKey"]) || ecc.privateToPublic(this.state.login["ownerKey"]) !== pubkey){
              this.setState({ validOwnerKey: false });
            }
          }

          if(item["perm_name"] === "active"){
            //active key
            const pubkey = item["required_auth"]["keys"][0]["key"];
            if(!ecc.isValidPrivate(this.state.login["activeKey"]) || ecc.privateToPublic(this.state.login["activeKey"]) !== pubkey){
              this.setState({ validActiveKey: false });
            }
          }
        });

        if(this.state.validAccountName && this.state.validOwnerKey && this.state.validActiveKey){
          this.props.loginSucceed(this.state.login, account);
          this.handleClose();
        }
      })
      .catch(result => {
        //account not found
        this.setState({ validAccountName: false });
      });
    }
  }

  render() {
    let accountNameHelpText = "";
    let ownerKeyHelpText = "";
    let activeKeyHelpText = "";

    if (!this.state.validAccountName) {
      accountNameHelpText = <FormHelperText>Invalid EOS account name</FormHelperText>
    }

    if (!this.state.validOwnerKey) {
      ownerKeyHelpText = <FormHelperText>Invalid Owner Key</FormHelperText>;
    }

    if (!this.state.validActiveKey) {
      activeKeyHelpText = <FormHelperText>Invalid Active Key</FormHelperText>;
    }

    return (
      <div>

        <Dialog
          open={this.props.showLoginDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">LOG IN</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>

            <FormControl fullWidth error={!this.state.validAccountName}>
              <InputLabel>EOS Account Name</InputLabel>
              <Input autoFocus={true} id="accountName" value={this.state.name} onChange={this.handleChange("accountName")} />
              {accountNameHelpText}
            </FormControl>

            <FormControl fullWidth error={!this.state.validOwnerKey}>
              <InputLabel>Owner Key</InputLabel>
              <Input
                id="ownerKey"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleChange('ownerKey')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={this.handleClickShowPasssword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {ownerKeyHelpText}
            </FormControl>

            <FormControl fullWidth error={!this.state.validActiveKey}>
              <InputLabel>Active Key</InputLabel>
              <Input
                id="activeKey"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleChange('activeKey')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={this.handleClickShowPasssword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {activeKeyHelpText}
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.loginToEOS} color="primary">
              LOG IN
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

LoginDialog.propTypes = {
  showLoginDialog: React.PropTypes.bool.isRequired,
  loginSucceed: React.PropTypes.func.isRequired,
  closeLoginDialog: React.PropTypes.func.isRequired,
};

export default LoginDialog;
