import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';


const styles = {
  PageTermsOfUse: {
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

class TermsOfUse extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.PageTermsOfUse}>
        <div className={classes.container}>
          <h1 className={classes.h1}> Terms of Use </h1>
          <div>
            <p className={classes.p}>
              EOS Plane is a distributed application that runs on the EOSIO blockchain, using specially-developed smart contracts (each, a “Smart Contract”) to enable users to own, trade, and upgrade genetically unique digital planes, which can then be visualized on a website that the user can interact with (the “Site”). The Smart Contracts and the Site are collectively referred to in these Terms as the “App”. Using the App, users can view their planes and use the Smart Contracts to acquire, trade, and upgrade planes with other App users.
              <br/><br/>
              EOS Plane ("EOS Plane", "we", or "us") is making the App available to you. Before you use the App, the Smart Contracts, or the Site, however, you will need to agree to these Terms of Use and any terms and conditions incorporated herein by reference (collectively, these “Terms"). PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE APP, THE SMART CONTRACTS, OR THE SITE. THESE TERMS GOVERN YOUR USE OF THE APP, THE SMART CONTRACTS, AND THE SITE, UNLESS WE HAVE EXECUTED A SEPARATE WRITTEN AGREEMENT WITH YOU FOR THAT PURPOSE. WE ARE ONLY WILLING TO MAKE THE APP, THE SMART CONTRACTS, AND THE SITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS. BY USING THE APP, THE SMART CONTRACTS, THE SITE, OR ANY PART OF THEM, OR BY CLICKING “I ACCEPT” BELOW OR INDICATING YOUR ACCEPTANCE IN AN ADJOINING BOX, YOU ARE CONFIRMING THAT YOU UNDERSTAND AND AGREE TO BE BOUND BY ALL OF THESE TERMS. IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO ACCEPT THESE TERMS ON THAT ENTITY’S BEHALF, IN WHICH CASE “YOU” WILL MEAN THAT ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT ACCEPT ALL OF THESE TERMS, THEN WE ARE UNWILLING TO MAKE THE APP, THE SMART CONTRACTS, OR THE SITE AVAILABLE TO YOU. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE APP, THE SMART CONTRACTS, OR THE SITE.
              <br/><br/>
              1. Our Planes
              <br/><br/>
              A. We have utilized Smart Contracts to develop our planes. We will release a certain number of planes and make them available for claim on the days we first launch the App. We will then release an additional plane at least every five minutes, and we will make each newly-released plane available for purchase.
              <br/><br/>
              B. The owner could upgrade planes via an air fight game.
              <br/><br/>
              C. The plane could be trade and auction in the market.
              <br/><br/>
              2. The App
              <br/><br/>
              A. To most easily use the App, you must install the Google Chrome, FireFox or other web browsers.
              <br/><br/>
              B. Transactions that take place on the App are managed and confirmed via the EOSIO blockchain. You understand that your EOS account name will be made publicly visible whenever you engage in a transaction on the App.
              <br/><br/>
              C. We neither own nor control private keys, web browsers, the EOSIO blockchain, or any other third party site, product, or service that you might access, visit, or use for the purpose of enabling you to use the various features of the App. We will not be liable for the acts or omissions of any such third parties, nor will we be liable for any damage that you may suffer as a result of your transactions or any other interaction with any such third parties.
              <br/><br/>
              3. Fees and Payment
              <br/><br/>
              A. If you elect to purchase, trade, or auction planes on the App, or with or from other users via the App, any financial transactions that you engage in will be conducted solely through the EOSIO blockchain. We will have no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions. With that in mind, we will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage in via the App, or using the Smart Contracts, or any other transactions that you conduct via the EOSIO blockchain.
              <br/><br/>
              B. Each time you utilize a Smart Contract to conduct a transaction with another user via the App, you authorize us to collect a commission of 1% of the total value of that transaction (each, a “Commission”). You acknowledge and agree that the Commission will be transferred directly to us through the EOSIO blockchain as part of your payment. We will not collect a Commission for interactions that do not involve our App marketplace.
              <br/><br/>
              C. As between us, you will be solely responsible to pay any and all sales, use, value-added and other taxes, duties, and assessments (except taxes on our net income) now or hereafter claimed or imposed by any governmental authority (collectively, “Taxes”) associated with your use of the App (including, without limitation, any Taxes that may become payable as the result of your ownership, trade any of your planes). Except for income taxes levied on EOS Plane, you: (i) will pay or reimburse us for all national, federal, state, local or other taxes and assessments of any jurisdiction, including value added taxes and taxes as required by international tax treaties, customs or other import or export taxes, and amounts levied in lieu thereof based on charges set, services performed or payments made hereunder, as are now or hereafter may be imposed under the authority of any national, state, local or any other taxing jurisdiction; and (ii) shall not be entitled to deduct the amount of any such taxes, duties or assessments from payments made to us pursuant to these Terms.
              <br/><br/>
              4. Ownership; Restrictions
              <br/><br/>
              A. You acknowledge and agree that we (or, as applicable, our licensors) own all legal right, title and interest in and to all elements of the App, and all intellectual property rights therein. The visual interfaces, graphics (including, without limitation, all art and drawings associated with the plane), design, systems, methods, information, computer code, software, services, “look and feel”, organization, compilation of the content, code, data, and all other elements of the App (collectively, the “EOS Plane Materials”) are owned by EOS Plane, and are protected by copyright, trade dress, patent, and trademark laws, international conventions, other relevant intellectual property and proprietary rights, and applicable laws.  All EOS Plane Materials are the copyrighted property of EOS Plane or its licensors, and all trademarks, service marks, and trade names contained in the EOS Plane Materials are proprietary to EOS Plane or its licensors. Except as expressly set forth herein, your use of the App does not grant you ownership of or any other rights with respect to any content, code, data, or other materials that you may access on or through the App. We reserve all rights in and to the EOS Plane Materials not expressly granted to you in the Terms. For the sake of clarity, you understand and agree: (i) that your “purchase” of a plane, whether via the App or otherwise, does not give you any rights or licenses in or to the EOS Plane Materials (including, without limitation, our copyright in and to the art and drawings associated with that plane) other than those expressly contained in these Terms; and (ii) that you do not have the right to reproduce, distribute, or otherwise commercialize any elements of the EOS Plane Materials (including, without limitation, our copyright in and to the art and drawings associated with that plane) in any way without our prior written consent in each case, which consent we may withhold in our sole and absolute discretion.
              <br/><br/>
              B. You may choose to submit comments, bug reports, ideas or other feedback about the App, including without limitation about how to improve the App (collectively, “Feedback”). By submitting any Feedback, you agree that we are free to use such Feedback at our discretion and without additional compensation to you, and to disclose such Feedback to third parties (whether on a non-confidential basis, or otherwise). You hereby grant us a perpetual, irrevocable, nonexclusive, worldwide license under all rights necessary for us to incorporate and use your Feedback for any purpose.
              <br/><br/>
              C. You agree that you are responsible for your own conduct while accessing or using the App, and for any consequences thereof. You agree to use the App only for purposes that are legal, proper and in accordance with these Terms and any applicable laws or regulations. By way of example, and not as a limitation, you may not, and may not allow any third party to: (i) send, upload, distribute or disseminate any unlawful, defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable content; (ii) distribute viruses, worms, defects, Trojan horses, corrupted files, hoaxes, or any other items of a destructive or deceptive nature; (iii) impersonate another person (via the use of an email address or otherwise); (iv) upload, post, transmit or otherwise make available through the App any content that infringes the intellectual proprietary rights of any party; (v) use the App to violate the legal rights (such as rights of privacy and publicity) of others; (vi) engage in, promote, or encourage illegal activity (including, without limitation, money laundering); (vii) interfere with other users’ enjoyment of the App; (viii) exploit the App for any unauthorized commercial purpose; (ix) modify, adapt, translate, or reverse engineer any portion of the App; (x) remove any copyright, trademark or other proprietary rights notices contained in or on the App or any part of it; (xi) reformat or frame any portion of the App; (xii) display any content on the App that contains any hate-related or violent content or contains any other material, products or services that violate or encourage conduct that would violate any criminal laws, any other applicable laws, or any third party rights; (xiii) use any robot, spider, site search/retrieval application, or other device to retrieve or index any portion of the App or the content posted on the App, or to collect information about its users for any unauthorized purpose; (xiv) create user accounts by automated means or under false or fraudulent pretenses; or (xv) access or use the App for the purpose of creating a product or service that is competitive with any of our products or services.
              <br/><br/>
              5. Termination
              <br/><br/>
              You may terminate these Terms at any time by canceling your EOS account and discontinuing your access to and use of the App. You will not receive any refunds if you cancel your account, or otherwise terminate these Terms. You agree that we, in our sole discretion and for any or no reason, may terminate these Terms and suspend and/or terminate your account(s) for the App. You agree that any suspension or termination of your access to the App may be without prior notice, and that we will not be liable to you or to any third party for any such suspension or termination. If we terminate these Terms or suspend or terminate your access to or use of the App due to your breach of these Terms or any suspected fraudulent, abusive, or illegal activity, then termination of these Terms will be in addition to any other remedies we may have at law or in equity. Upon any termination or expiration of these Terms, whether by you or us, you may no longer have access to information that you have posted on the App or that is related to your account, and you acknowledge that we will have no obligation to maintain any such information in our databases or to forward any such information to you or to any third party. Sections 2.C and 3 through 16 will survive the termination or expiration of these Terms for any reason.
              <br/><br/>
              6. Disclaimers
              <br/><br/>
              A. YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND USE OF THE APP IS AT YOUR SOLE RISK, AND THAT THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS MAKE NO EXPRESS WARRANTIES AND HEREBY DISCLAIM ALL IMPLIED WARRANTIES REGARDING THE APP AND ANY PART OF IT (INCLUDING, WITHOUT LIMITATION, THE SITE, ANY SMART CONTRACT, OR ANY EXTERNAL WEBSITES), INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, CORRECTNESS, ACCURACY, OR RELIABILITY. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT REPRESENT OR WARRANT TO YOU THAT: (I) YOUR ACCESS TO OR USE OF THE APP WILL MEET YOUR REQUIREMENTS, (II) YOUR ACCESS TO OR USE OF THE APP WILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERROR, (III) USAGE DATA PROVIDED THROUGH THE APP WILL BE ACCURATE, (III) THE APP OR ANY CONTENT, SERVICES, OR FEATURES MADE AVAILABLE ON OR THROUGH THE APP ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR (IV) THAT ANY DATA THAT YOU DISCLOSE WHEN YOU USE THE APP WILL BE SECURE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
              <br/><br/>
              B. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET, AND AGREE THAT WE HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.
              <br/><br/>
              C. WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU INCUR AS THE RESULT OF YOUR USE OF THE EOSIO BLOCKCHAIN OR THE EOSIO ELECTRONIC WALLET, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (A) USER ERROR, SUCH AS FORGOTTEN PASSWORDS OR INCORRECTLY CONSTRUED SMART CONTRACTS OR OTHER TRANSACTIONS; (B) SERVER FAILURE OR DATA LOSS; (C) CORRUPTED WALLET FILES; (D) UNAUTHORIZED ACCESS OR ACTIVITIES BY THIRD PARTIES, INCLUDING BUT NOT LIMITED TO THE USE OF VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST THE APP, EOSIO BLOCKCHAIN, OR THE EOSIO ELECTRONIC WALLET.
              <br/><br/>
              D. PLANES ARE INTANGIBLE DIGITAL ASSETS THAT EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE EOSIO BLOCKCHAIN. ALL SMART CONTRACTS ARE CONDUCTED AND OCCUR ON THE DECENTRALIZED LEDGER WITHIN THE EOSIO PLATFORM. WE HAVE NO CONTROL OVER AND MAKE NO GUARANTEES OR PROMISES WITH RESPECT TO SMART CONTRACTS.
              <br/><br/>
              E. EOS PLANE IS NOT RESPONSIBLE FOR LOSSES DUE TO BLOCKCHAINS OR ANY OTHER FEATURES OF THE EOSIO BLOCKCHAIN OR THE EOSIO ELECTRONIC WALLET, INCLUDING BUT NOT LIMITED TO LATE REPORT BY DEVELOPERS OR REPRESENTATIVES (OR NO REPORT AT ALL) OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING THE EOSIO NETWORK, INCLUDING FORKS, TECHNICAL NODE ISSUES, OR ANY OTHER ISSUES HAVING FUND LOSSES AS A RESULT.
              <br/><br/>
              7. Limitation of Liability
              <br/><br/>
              A. YOU UNDERSTAND AND AGREE THAT WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY INCUR, HOWSOEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT LIMITATION, ANY LOSS OF PROFITS (WHETHER INCURRED DIRECTLY OR INDIRECTLY), LOSS OF GOODWILL OR BUSINESS REPUTATION, LOSS OF DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER INTANGIBLE LOSS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              <br/><br/>
              B. YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE APP AVAILABLE TO YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH HEREIN, WHICH REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN THE PARTIES AND FORM AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN US. WE WOULD NOT BE ABLE TO PROVIDE THE APP TO YOU WITHOUT THESE LIMITATIONS.
              <br/><br/>
              C. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, AND SOME JURISDICTIONS ALSO LIMIT DISCLAIMERS OR LIMITATIONS OF LIABILITY FOR PERSONAL INJURY FROM CONSUMER PRODUCTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO PERSONAL INJURY CLAIMS.
              <br/><br/>
              8. Assumption of Risk
              <br/><br/>
              You accept and acknowledge each of the following:
              <br/><br/>
              A. The prices of blockchain assets are extremely volatile. Fluctuations in the price of other digital assets could materially and adversely affect the value of your planes, which may also be subject to significant price volatility. We cannot guarantee that any purchasers of planes will not lose money.
              <br/><br/>
              B. You are solely responsible for determining what, if any, taxes apply to your planes-related transactions. EOS Plane is not responsible for determining the taxes that apply to your transactions on the App, the Site, or the Smart Contracts.
              <br/><br/>
              C. The App does not store, send, or receive planes. This is because planes exist only by virtue of the ownership record maintained on the App’s supporting blockchain in the EOSIO network. Any transfer of planes occurs within the supporting blockchain in the EOSIO network, and not on the App.
              <br/><br/>
              D. There are risks associated with using an Internet-based currency, including, but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet. You accept and acknowledge that EOS Plane will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the EOSIO network, however caused.
              <br/><br/>
              E. A lack of use or public interest in the creation and development of distributed ecosystems could negatively impact the development of the planes ecosystem, and therefore the potential utility or value of planes.
              <br/><br/>
              F. The regulatory regime governing blockchain technologies, cryptocurrencies, and tokens is uncertain, and new regulations or policies may materially adversely affect the development of the planes ecosystem, and therefore the potential utility or value of planes.
              <br/><br/>
              G. Upgrades by EOSIO to the EOSIO platform, a hard fork in the EOSIO platform, or a change in how transactions are confirmed on the EOSIO platform may have unintended, adverse effects on all blockchains using the EOSIO standard, including the planes ecosystem.
              <br/><br/>
              9. Indemnification
              <br/><br/>
              You agree to hold harmless and indemnify EOS Plane and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any claim, liability, loss, damage (actual and consequential) of any kind or nature, suit, judgment, litigation cost, and attorneys’ fees arising out of or in any way related to (i) your breach of these Terms, (ii) your misuse of the App, or (iii) your violation of applicable laws, rules or regulations in connection with your access to or use of the App.  You agree that EOS Plane will have control of the defense or settlement of any such claims.
              <br/><br/>
              10. External Sites
              <br/><br/>
              The App may include hyperlinks to other web sites or resources (collectively, “External Sites”), which are provided solely as a convenience to our users. We have no control over any External Sites. You acknowledge and agree that we are not responsible for the availability of any External Sites, and that we do not endorse any advertising, products or other materials on or made available from any External Sites. Furthermore, you acknowledge and agree that we are not liable for any loss or damage which may be incurred as a result of the availability or unavailability of the External Sites, or as a result of any reliance placed by you upon the completeness, accuracy or existence of any advertising, products or other materials on, or made available from, any External Sites.
              <br/><br/>
              11. Changes to the Terms
              <br/><br/>
              The App may include hyperlinks to other web sites or resources (collectively, “External Sites”), which are provided solely as a convenience to our users. We have no control over any External Sites. You acknowledge and agree that we are not responsible for the availability of any External Sites, and that we do not endorse any advertising, products or other materials on or made available from any External Sites. Furthermore, you acknowledge and agree that we are not liable for any loss or damage which may be incurred as a result of the availability or unavailability of the External Sites, or as a result of any reliance placed by you upon the completeness, accuracy or existence of any advertising, products or other materials on, or made available from, any External Sites.
              <br/><br/>
              12. Changes to the App
              <br/><br/>
              We may make changes to the Terms from time to time. When we make changes, we will make the updated Terms available on the App and update the date at the end of these Terms accordingly. Please check these Terms periodically for changes. Any changes to the Terms will apply on the date that they are made, and your continued access to or use of the App after the Terms have been updated will constitute your binding acceptance of the updates.  If you do not agree to any revised Terms, you may not access or use the App.
              <br/><br/>
              13. Children
              <br/><br/>
              You affirm that you are over the age of 13, as the App is not intended for children under 13. IF YOU ARE 13 OR OLDER BUT UNDER THE AGE OF 18, OR THE LEGAL AGE OF MAJORITY WHERE YOU RESIDE IF THAT JURISDICTION HAS AN OLDER AGE OF MAJORITY, THEN YOU AGREE TO REVIEW THESE TERMS WITH YOUR PARENT OR GUARDIAN TO MAKE SURE THAT BOTH YOU AND YOUR PARENT OR GUARDIAN UNDERSTAND AND AGREE TO THESE TERMS. YOU AGREE TO HAVE YOUR PARENT OR GUARDIAN REVIEW AND ACCEPT THESE TERMS ON YOUR BEHALF. IF YOU ARE A PARENT OR GUARDIAN AGREEING TO THE TERMS FOR THE BENEFIT OF A CHILD OVER 13, THEN YOU AGREE TO AND ACCEPT FULL RESPONSIBILITY FOR THAT CHILD’S USE OF THE APP, INCLUDING ALL FINANCIAL CHARGES AND LEGAL LIABILITY THAT HE OR SHE MAY INCUR.
              <br/><br/>
              14. Privacy Policy
              <br/><br/>
              Our <a className={classes.a} href="/privacy-policy">Privacy Policy</a> describes the ways we collect, use, store and disclose your personal information, and is hereby incorporated by this reference into these Terms. You agree to the collection, use, storage, and disclosure of your data in accordance with our <a className={classes.a} href="/privacy-policy">Privacy Policy</a>.
              <br/><br/>
              15. General
              <br/><br/>
              These Terms constitute the entire legal agreement between you and EOS Plane, govern your access to and use of the App, and completely replace any prior or contemporaneous agreements between the parties related to your access to or use of the App, whether oral or written. There are no third party beneficiaries to these Terms. The parties are independent contractors, and nothing in these Terms create any agency, partnership, or joint venture. The language in these Terms will be interpreted as to its fair meaning, and not strictly for or against any party. You may not assign any or your rights or obligations under these Terms, whether by operation of law or otherwise, without our prior written consent. We may assign our rights and obligations under these Terms in our sole discretion to an affiliate, or in connection with an acquisition, sale or merger. Should any part of these Terms be held invalid or unenforceable, that portion shall be construed consistent with applicable law and the remaining portions will remain in full force and effect. Our failure to enforce any provision of these Terms will not be deemed a waiver of such provision, nor of the right to enforce such provision. We will not be liable for any failure or delayed performance of our obligations that result from any condition beyond our reasonable control, including, but not limited to, governmental action, acts of terrorism, earthquake, fire, flood, acts of God, labor conditions, power failures, Internet disturbances, or acts or omissions of third parties. You agree that we may provide you with notices (including, without limitation those regarding changes to these Terms) by postings on the App.
              <br/><br/>
              Dated: May 11, 2018
            </p>

          </div>
        </div>
      </div>
    );
  }
}

TermsOfUse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TermsOfUse);
