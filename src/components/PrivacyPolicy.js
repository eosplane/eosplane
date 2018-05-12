import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';


const styles = {
  PagePrivacyPolicy: {
    fontFamily: 'Proxima Nova,sans-serif',
    color: '#605c6d',
    lineHeight: '24px',
    paddingBottom: '50px',
    fontSize: '16px',
    marginTop: '50px',
  },

  container: {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: '15px',
    paddingLeft: '15px',
    width: '75%',
  },

  h1: {
    fontSize: '45px',
    lineHeight: '60px',
    color: '#393742',
    textAlign: 'center',
    marginBottom: '40px',
    fontWeight: '300',
  },

  h3 : {
    fontSize: '25px',
    lineHeight: '24px',
    color: '#605c6d',
    fontWeight: '400',
    marginTop: '30px',
  },

  h4 : {
    fontSize: '20px',
    lineHeight: '24px',
    color: '#605c6d',
    fontWeight: '400',
    marginTop: '30px',
  },

  p: {
    marginTop: '.11in',
    fontWeight: '100',
  },

  a: {
    color: '#667d9a',
    fontWeight: '600',
    backgroundImage: 'linear-gradient(180deg,transparent,transparent 91%,#667d9a 91.1%,#667d9a 96%,transparent 96.1%,transparent)',
    textDecoration: 'none',
    fontWeight: '100',

  }

};

class PrivacyPolicy extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.PagePrivacyPolicy}>
        <div className={classes.container}>
          <h1 className={classes.h1}> Privacy Policy </h1>
          <div>
            <p className={classes.p}>
              This Privacy Policy is designed to assist you with understanding how EOS Plane ("EOS Plane", "we", "us" or "our") collect, use and disclose the information you provide us when accessing or using the website, <a className={classes.a} href="/">eosplane.top</a>.
            </p>

            <h3 className={classes.h3}> Changes to our Privacy Policy </h3>
            <p className={classes.p}>
              While our values will not shift, the App will evolve over time, and this Policy will change to reflect that evolution. If we make changes, we will notify you by revising the date at the top of this Policy. In some cases, if we make significant changes, we may give you additional notice by adding a statement to our homepage, or by sending you an email notification. We encourage you to review this Policy periodically to stay informed about our practices.
            </p>

            <h3 className={classes.h3}> Information Collection </h3>

            <h4 className={classes.h4}> What Information Do We Collect? </h4>
            <p className={classes.p}>
              We will ask you to provide us with your EOS account name.
              <br/><br/>
              We also collect basic analytics and log-in information when you use the App. This sort of information may be collected from third-party providers like Facebook or Google Analytics, and includes, among other things, the type of device you use, access times, IP address, hardware model, operating system and version, and other unique device identifiers. Some of these third-party providers may place cookies or pixels - small data files stored on your hard drive or in device memory - on your browser or hard drive. Note that this Policy does not cover the use of cookies or pixels by such third parties. Most web browsers are set to accept cookies and pixels by default, but you can usually set your browser to remove or reject browser cookies or pixels. If you do choose to remove or reject cookies or pixels, however, your ability to use the App might be affected.
            </p>

            <h4 className={classes.h4}> What Information We Don’t Collect？ </h4>
            <p className={classes.p}>
              We do not collect any EOS private keys and other personally-identifiable information about you, unless you give it to us directly: by filling out a form, creating an account, giving us written feedback, communicating with us via third party social media sites, or otherwise communicating with us via the App or any other means. We do not collect any payment information from you, other than your EOS account name.
            </p>

            <h3 className={classes.h3}> Use of Information </h3>

            <h4 className={classes.h4}> What We Do With Information We Collect? </h4>
            <p className={classes.p}>
              We use the information we collect in the following ways:
              <br/><br/>
              <li>To analyze trends for how the App is being used;</li>
              <li>To improve the App;</li>
              <li>To help personalize your experience of the App; and</li>
              <li>If you gave us your contact information, we will use it to send you data as part of making the App available to you. We may also use that information to contact you to send you technical notices, updates, confirmations, security alerts, to provide support to you, to tell you about other products and services that we think might interest you, or to respond to your comments or questions.</li>
              <br/>
              We may share the information we collect with third parties who need to access it in order to do work on our behalf, including doing things like helping us make the App available, or providing analytics services for us. We work hard to ensure that these third parties only access and use your information as necessary to perform their functions.
              <br/><br/>
              We will create aggregations and anonymizations that contain your information in a way that does not directly identify you. We may use and/or share those aggregations and anonymizations for a variety of purposes related to the App, or our company and its business.
            </p>

            <h4 className={classes.h4}> What We Don’t Do With Information We Collect? </h4>
            <p className={classes.p}>
              We do not share any information that directly identifies you with any third party, except in the following limited cases:
              <br/><br/>
              <li>As required to comply with applicable law or regulation, or to comply with law enforcement;</li>
              <li>To respond to claims and/or legal process;</li>
              <li>To protect our rights or our property, or to enforce our terms of service;</li>
              <li>To prevent behavior that is (or that we think may be) illegal or unethical;</li>
              <li>With your consent, or at your request or direction; or</li>
              <li>As otherwise set forth in this Policy.</li>
            </p>

            <h4 className={classes.h4}> Information Processing </h4>
            <p className={classes.p}>
              Depending on where you are located, your information may need to be transferred to different servers around the world as part of using the App. Since we are based in China, any information we collect is governed by Chinese law. You acknowledge that, as part of making the App available to you, we may transfer your information to or maintain your information on computers located outside of your state, province, country, or other governmental jurisdiction, where the privacy laws may not be as protective as those in your jurisdiction. If you are located outside of China and you choose to provide your information to us, you agree that we have the right to transfer your information to China and process it there. By using the App, or by otherwise providing any information to us, you consent to the processing and transfer of that information in and to China and other countries.
            </p>

            <h3 className={classes.h3}> Information Security </h3>
            <p className={classes.p}>
              We take safeguarding your information seriously. We will take reasonable administrative, physical, and electronic measures to help protect your information from loss, theft, misuse, unauthorized access, disclosure, alteration or destruction. All that said, no method of transmitting or storing information over the Internet is completely secure. With that in mind, we cannot guarantee the absolute security of your information.
            </p>

            <h3 className={classes.h3}> Our Policy Towards Children </h3>
            <p className={classes.p}>
              The App is not intended for use by children under the age of 13. If you are the parent or guardian of a child under the age of 13 and you become aware that your child has provided personally identifiable information to us without your and their consent, contact us at support@eosplane.top. If we become aware that a child under the age of 13 has provided us with their personally identifiable information, we will remove that information from our files.
            </p>

            <h3 className={classes.h3}> Contact Us </h3>
            <p className={classes.p}>
              If you have any questions about this Privacy Policy, please contact us at <a className={classes.a} href="mailto:support@eosplane.top">support@eosplane.top</a>.
            </p>

            <p className={classes.p}>
              <br/>
              Dated: May 11, 2018
            </p>

          </div>
        </div>
      </div>
    );
  }
}

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrivacyPolicy);
