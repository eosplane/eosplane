import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import AirplanemodeActive from 'material-ui-icons/AirplanemodeActive';
import LoginDialog from './LoginDialog';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class TopAppBar extends React.Component {

  render() {
    const { classes } = this.props;

    let welcome = "";
    if(this.props.account["account_name"] != null){
      welcome =
      <Typography type="title" color="inherit" className={classes.flex}>
        {this.props.account["account_name"]} {this.props.account["eos_balance"]}
      </Typography>
    }

    let loginout = "";
    if( this.props.hasLogined() ) {
      loginout = <Button onClick={this.props.logout} color="contrast">LOG OUT</Button>;
    } else {
      loginout = <Button onClick={this.props.openLoginDialog} color="contrast">LOG IN</Button>
    }

    return (
      <div >
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <AirplanemodeActive />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              EOS Plane is a game on EOSIO and under development. Stay tuned ......
            </Typography>

            {welcome}

            {loginout}

            <LoginDialog
              showLoginDialog={this.props.showLoginDialog}
              loginSucceed={this.props.loginSucceed}
              closeLoginDialog={this.props.closeLoginDialog}
            />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  showLoginDialog: React.PropTypes.bool.isRequired,
  account: React.PropTypes.object.isRequired,
  loginSucceed: React.PropTypes.func.isRequired,
  openLoginDialog: React.PropTypes.func.isRequired,
  closeLoginDialog: React.PropTypes.func.isRequired,
  hasLogined: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired,

};

export default withStyles(styles)(TopAppBar);
