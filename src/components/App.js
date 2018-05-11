import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TopAppBar from './TopAppBar';
import Planes from './Planes';
import Plane from './Plane';
import GamePanel from './GamePanel';
import Footer from './Footer';
import EOS from 'eosjs';

const styles = {
  root: {
    width: '100%',
  }, 
};

class App extends React.Component {
  constructor() {
    super();

    this.openLoginDialog = this.openLoginDialog.bind(this);
    this.closeLoginDialog = this.closeLoginDialog.bind(this);
    this.loginSucceed = this.loginSucceed.bind(this);
    this.hasLogined = this.hasLogined.bind(this);
    this.logout = this.logout.bind(this);
    this.refreshAccount = this.refreshAccount.bind(this);


    this.state = {
      showLoginDialog: false,
      login: {},
      account: {},
    };
  }

  logout() {
    this.setState({
      login: {},
      account: {},
    });
  }

  hasLogined() {
      return this.state.login["accountName"] != null
  }

  loginSucceed(login, account) {
    this.setState({
      login: login,
      account: account,
    });

    setInterval(() => {
      this.refreshAccount();
    }, 30000);
  }

  refreshAccount() {
    let config = {
      httpEndpoint: 'http://t1readonly.eos.io',
      expireInSeconds: 60,
      broadcast: true,
      debug: true,
      sign: true
    };

    let eos = EOS.Localnet(config);
    if(this.state.login["accountName"]) {
      eos.getAccount(this.state.login["accountName"])
      .then(account => {
        this.setState({
          account: account,
        });
      })
      .catch(result => {});
    }
  }

  openLoginDialog() {
    this.setState({
      showLoginDialog: true
    });
  }

  closeLoginDialog() {
    this.setState({
      showLoginDialog: false
    });
  }

  render() {
    const { classes } = this.props;

    let topBar = <TopAppBar
              showLoginDialog={this.state.showLoginDialog}
              account={this.state.account}
              loginSucceed={this.loginSucceed}
              openLoginDialog={this.openLoginDialog}
              closeLoginDialog={this.closeLoginDialog}
              hasLogined={this.hasLogined}
              logout={this.logout}

            />


    let mainContent = "";

    let footer = <Footer/>

    if(this.props.pathname === "/"){
      mainContent = <Planes/>
    } else if (this.props.pathname.startsWith("/plane/")) {
      mainContent = <Plane
                      planeId={this.props.params['planeId']}
                      account={this.state.account}
                      openLoginDialog={this.openLoginDialog}
                      hasLogined={this.hasLogined}
                    />
    } else if (this.props.pathname.startsWith("/upgrade/")) {
      topBar = "";
      footer = "";
      mainContent = <GamePanel
                      planeId={this.props.params['planeId']}
                    />

    }

    return (
      <div className={classes.root}>
        {topBar}
        {mainContent}
        {footer}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
