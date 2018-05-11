import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  SectionMiniFooter: {
    fontSize: '12px',
    color: '#c7c5cc',
    background: '#009688',
    textAlign: 'center',
    verticalAlign: 'baseline',
  },

  container: {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: '15px',
    paddingLeft: '15px',
    width: '75%',
  },

  row: {
    marginRight: '-15px',
    marginLeft: '-15px',
    paddingTop: '42px',
    paddingRight: '0px',
    paddingBottom: '47px',
    paddingLeft: '0px',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    position: 'relative',
  },

  col: {
    textAlign: 'right',
    width: '50%',
    paddingLeft: '0',
    paddingRight: '0',
    flexBasis: '0',
    flexGrow: '1',
    maxWidth: '100%',
  },

  logos: {
    display: 'flex',
    width: '220px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  BoxMiniSocial: {
    display: 'block',
    width: '38px',
    height: '38px',
  },

  iconGithub: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: 'url(/image/github_grey.78484eab.svg)',
  },

  iconTweeter: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: 'url(/image/twitter_grey.54ab045b.svg)',
  },

  iconFacebook: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: 'url(/image/facebook_grey.9ac652eb.svg)',
  },

  iconChat: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: 'url(/image/chat_grey.1e1b40aa.svg)',
  },

  link: {
    color: '#c7c5cc',
    textDecoration: 'none',
    cursor: 'pointer',
    textAlign: 'right',
    verticalAlign: 'baseline',
    margin: '0',
    padding: '0',
    border: '0',
  },

  copyright: {
    fontSize: '10px',
    width: 'auto',
    position: 'absolute',
    right: '0',
    bottom: '9px',
    paddingLeft: '0',
    paddingRight: '0',
  }
};

class App extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <footer>
          <div className={classes.SectionMiniFooter}>
            <div className={classes.container}>
              <div className={classes.row}>
                <div className={classes.col}>
                  <div className={classes.logos}>
                    <a href="https://github.com/eosplane/eosplane" target="_blank">
                      <div className={classes.BoxMiniSocial}><i className={classes.iconGithub}></i></div>
                    </a>
                    <a href="https://twitter.com/EOS_Plane" target="_blank">
                      <div className={classes.BoxMiniSocial}><i className={classes.iconTweeter}></i></div>
                    </a>
                    <a href="https://www.facebook.com/eos.plane" target="_blank">
                      <div className={classes.BoxMiniSocial}><i className={classes.iconFacebook}></i></div>
                    </a>
                    <a href="https://t.me/EOSPlane" target="_blank">
                      <div className={classes.BoxMiniSocial}><i className={classes.iconChat}></i></div>
                    </a>
                  </div>
                </div>

                <div className={classes.col}>
                  <div >
                    <a className={classes.link} href="/terms-of-use">Terms of Use</a><span> | </span><a className={classes.link} href="/privacy-policy">Privacy Policy</a>
                  </div>
                </div>
                <div>
                  <span className={classes.copyright}>Copyright © 2018 EOS Plane<span> | </span>All rights reserved</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
