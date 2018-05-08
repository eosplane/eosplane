import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import SaleDialog from './SaleDialog';
import NotSaleDialog from './NotSaleDialog';
import AuctionDialog from './AuctionDialog';
import BuyDialog from './BuyDialog';
import BidDialog from './BidDialog';
import BidHistory from './BidHistory';
import PlaneTimeLine from './PlaneTimeLine';
import CountDownTimer from './CountDownTimer';
import axios from 'axios';
import { CircularProgress } from 'material-ui/Progress';
import STATUS from '../PlaneStatus'


import bids from '../sample-bids';


const styles = {

  PlaneCard: {
    display: 'block',
    fontFamily: 'sans-serif',
    boxSizing: 'border-box',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '200px',
    height: '250px',
    border: '1px solid teal ',
    borderRadius: '.4rem',
    margin: '10px auto',
  },

  PlaneImage: {
    display: 'block',
    width: '100px',
    height: '100px',
    position: 'relative',
    top: '30%',
    left: '25%',
  },

  PlaneStatus: {
    display: 'block',
    width: '130px',
    height: '25px',
    borderRadius: '.7rem',
    position: 'relative',
    top: '-75px',
    left: '35px',
    backgroundColor: '#b2dfdb',
  },

  PlaneStatusItem: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },

  PlaneStatusItemIcon: {
    verticalAlign: 'sub',
  },

  Icon: {
    backgroundImage: 'url(/image/tag.svg)',
    display: 'inline-block',
    width: '1rem',
    height: '0.9rem',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
  },

  PlaneStatusItemText: {
    color: '#0b0b0b',
    fontSize: '.7rem',
    fontWeight: '500',
    paddingLeft: '.1rem',
    whiteSpace: 'nowrap',
    paddingRight: '.1rem',
    display: 'inline-block',
  },

  PlaneStatusLabel: {
    // verticalAlign: 'sub',
  },

  PlaneStatusNote: {
    opacity: '.5',
  },

  PlaneNewBadge: {

    position: 'relative',
    top: '-126px',
    left: '-1px',
    display: 'block',
    width: '1.8rem',
    height: '1.8rem',
  },

  NewBadge: {
    borderTopLeftRadius: '.4rem',
  },

  PlaneCardDetails: {
    position: 'relative',
    top: '50px',
    display: 'block',
    marginTop: '-.4rem',
    padding: '0 .4rem',
    fontSize: '.8rem',
    fontWeight: '500',
    textAlign: 'left',
  },

  PlaneCardDetailsItem: {
    color: '#82817d',
  },

  PlaneCardDetailsItemHighlight: {
    color: '#2a2825',
  },

  PlaneCardDetailsLevel: {
    float: 'right',
  },

  Progress: {
    marginTop: '10%',
    marginLeft: '45%',
  },

};

class Plane extends React.Component {

  constructor() {
    super();

    this.openSaleDialog = this.openSaleDialog.bind(this);
    this.closeSaleDialog = this.closeSaleDialog.bind(this);
    this.setPrice = this.setPrice.bind(this);

    this.openNotSaleDialog = this.openNotSaleDialog.bind(this);
    this.closeNotSaleDialog = this.closeNotSaleDialog.bind(this);
    this.notSale = this.notSale.bind(this);

    this.openAuctionDialog = this.openAuctionDialog.bind(this);
    this.closeAuctionDialog = this.closeAuctionDialog.bind(this);
    this.auction = this.auction.bind(this);

    this.openBuyDialog = this.openBuyDialog.bind(this);
    this.closeBuyDialog = this.closeBuyDialog.bind(this);
    this.buy = this.buy.bind(this);

    this.openBidDialog = this.openBidDialog.bind(this);
    this.closeBidDialog = this.closeBidDialog.bind(this);
    this.bid = this.bid.bind(this);

    this.goToGamePanel = this.goToGamePanel.bind(this);

    this.state = {
      progress: true,
      plane: {},
      bidHistory: [],
      showSaleDialog: false,
      showNotSaleDialog: false,
      showAuctionDialog: false,
      showBuyDialog: false,
      showBidDialog: false,
    };
  }

  goToGamePanel() {
    this.context.router.transitionTo(`/upgrade/${this.state.plane.id}`);
  }

  openSaleDialog() {
    this.setState({
      showSaleDialog: true
    });
  }

  closeSaleDialog() {
    this.setState({
      showSaleDialog: false
    });
  }

  setPrice(price) {
    const plane = {...this.state.plane};
    plane['price'] = price;
    plane['status'] = STATUS.FOR_SALE;
    this.setState({ plane });

    this.closeSaleDialog();
  }

  openNotSaleDialog() {
    this.setState({
      showNotSaleDialog: true
    });
  }

  closeNotSaleDialog() {
    this.setState({
      showNotSaleDialog: false
    });
  }

  notSale() {
    const plane = {...this.state.plane};
    plane['price'] = 0;
    plane['status'] = STATUS.NOT_FOR_SALE;
    this.setState({ plane });

    this.closeNotSaleDialog();
  }

  openAuctionDialog() {
    this.setState({
      showAuctionDialog: true
    });
  }

  closeAuctionDialog() {
    this.setState({
      showAuctionDialog: false
    });
  }

  auction(startingPrice, duration) {
    const plane = {...this.state.plane};
    plane['price'] = startingPrice;
    plane['status'] = STATUS.FOR_BID;
    this.setState({ plane });

    console.log("the auction will end in " + duration + " seconds");

    this.closeAuctionDialog();
  }

  openBuyDialog() {
    this.setState({
      showBuyDialog: true
    });
  }

  closeBuyDialog() {
    this.setState({
      showBuyDialog: false
    });
  }

  buy() {
    const plane = {...this.state.plane};
    plane['price'] = 0;
    plane['status'] = STATUS.NOT_FOR_SALE;
    plane['owner'] = this.props.account['account_name'];
    this.setState({ plane });

    this.closeBuyDialog();
  }

  openBidDialog() {
    this.setState({
      showBidDialog: true
    });
  }

  closeBidDialog() {
    this.setState({
      showBidDialog: false
    });
  }

  bid(price) {
    const plane = {...this.state.plane};
    plane['price'] = price;
    this.setState({ plane });

    this.closeBidDialog();
  }

  upgrade(score) {
    console.log("upgrade score: " + score);
    const plane = {...this.state.plane};
    plane['score'] = score;
    this.setState({ plane });
  }

  componentWillMount() {
    // get plane
    axios.get('http://localhost:8080/getPlane?id=' + this.props.planeId)
      .then( (response) => {
        let plane = {
          id: response.data.plane_id,
          image: "/planes/XPlane.png",
          desc: response.data.desc,
          score: response.data.score,
          price: response.data.price.quantity,
          status: response.data.status,
          owner: response.data.owner
        }

        this.setState({
          plane: plane,
          progress: false,
        });

        // get bid history
        if(plane.status === STATUS.FOR_BID) {
          this.setState({
            bidHistory: bids,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    const { classes } = this.props;

    let upgradeButton = "";
    let saleButton = "";
    let changePriceButton = "";
    let notSaleButton = "";
    let auctionButton = "";
    let bidButton = "";
    let buyButton = "";
    let bidHistory = "";

    //owner's action
    if(this.props.account['account_name'] === this.state.plane['owner']){

      upgradeButton = <Button dense color="primary" onClick={this.goToGamePanel} >
                        upgrade
                      </Button>

      if(this.state.plane['status'] === STATUS.NOT_FOR_SALE){
        saleButton = <Button dense color="primary" onClick={this.openSaleDialog} >
                        sale
                      </Button>

        auctionButton = <Button dense color="primary" onClick={this.openAuctionDialog}>
                          auction
                        </Button>
      }

      if(this.state.plane['status'] === STATUS.FOR_SALE){
        changePriceButton = <Button dense color="primary" onClick={this.openSaleDialog}>
                              change price
                            </Button>

        notSaleButton = <Button dense color="primary" onClick={this.openNotSaleDialog}>
                          not sale
                        </Button>
      }
    }

    //others' action
    if(this.props.account['account_name'] !== this.state.plane['owner']){

      if(this.state.plane['status'] === STATUS.FOR_SALE){
        if (this.props.hasLogined()) {
          buyButton = <Button dense color="primary" onClick={this.openBuyDialog}>
                          buy
                      </Button>
        } else {
          buyButton = <Button dense color="primary" onClick={this.props.openLoginDialog}>
                          buy
                      </Button>
        }
      }

      if(this.state.plane['status'] === STATUS.FOR_BID){

        bidHistory = <BidHistory bidHistory={this.state.bidHistory} />

        if (this.props.hasLogined()) {
          bidButton = <Button dense color="primary" onClick={this.openBidDialog}>
                          bid
                      </Button>
        } else {
          bidButton = <Button dense color="primary" onClick={this.props.openLoginDialog}>
                          bid
                      </Button>
        }
      }

    }

    let planePanel = "";

    if(this.state.progress) {
      planePanel = <div className={classes.Progress}>
                    <CircularProgress/>
                </div>
    } else {
      planePanel =
          <div>
                <div className={classes.PlaneCard} >
                  <img className={classes.PlaneImage} src={this.state.plane.image} alt={this.state.plane.status}/>
                  <div className={classes.PlaneStatus}>
                    <div className={classes.PlaneStatusItem}>
                      <span className={classes.PlaneStatusItemIcon}>
                        <i className={classes.Icon}></i>
                      </span>
                      <span className={classes.PlaneStatusItemText}>
                        <span className={classes.PlaneStatusLabel}>For sale</span>
                      <span className={classes.PlaneStatusNote}><small> Ξ </small>{this.state.plane.price}</span>
                      </span>
                    </div>
                  </div>

                  <div className={classes.PlaneCardDetails}>
                    <div className={classes.PlaneCardDetailsLevel}><img src="/image/diamond1.gif" alt="d"/><img src="/image/diamond2.gif" alt="d"/><img src="/image/diamond2.gif" alt="2"/></div>
                    <div className={classes.PlaneCardDetailsItemHighlight}>Plane <span className={classes.PlaneCardDetailsItem}>{this.state.plane.id}</span></div>
                    <div className={classes.PlaneCardDetailsItemHighlight}>Score <span className={classes.PlaneCardDetailsItem}>{this.state.plane.score}</span></div>
                    <div className={classes.PlaneCardDetailsItemHighlight}>Time left <CountDownTimer className={classes.PlaneCardDetailsItem} seconds={56352} /></div>

                  </div>
                </div>
                <div style={{width: '200px', margin: '0 auto' }}>
                  {upgradeButton}
                  {saleButton}
                  {changePriceButton}
                  {notSaleButton}
                  {auctionButton}
                  {bidButton}
                  {buyButton}
                </div>

              <PlaneTimeLine/>
              {bidHistory}
              <SaleDialog
                plane={this.state.plane}
                showSaleDialog={this.state.showSaleDialog}
                setPrice={this.setPrice}
                closeSaleDialog={this.closeSaleDialog}
              />
              <NotSaleDialog
                showNotSaleDialog={this.state.showNotSaleDialog}
                notSale={this.notSale}
                closeNotSaleDialog={this.closeNotSaleDialog}
              />
              <AuctionDialog
                showAuctionDialog={this.state.showAuctionDialog}
                auction={this.auction}
                closeAuctionDialog={this.closeAuctionDialog}
              />
              <BuyDialog
                plane={this.state.plane}
                account={this.props.account}
                showBuyDialog={this.state.showBuyDialog}
                buy={this.buy}
                closeBuyDialog={this.closeBuyDialog}
              />
              <BidDialog
                plane={this.state.plane}
                account={this.props.account}
                bidHistory={this.state.bidHistory}
                showBidDialog={this.state.showBidDialog}
                bid={this.bid}
                closeBidDialog={this.closeBidDialog}
              />
            </div>
    }


    return (
      <div className="center">
        {planePanel}
      </div>
    )
  }
}

Plane.contextTypes = {
  router: React.PropTypes.object
}

Plane.propTypes = {
  classes: React.PropTypes.object.isRequired,
  planeId: React.PropTypes.string.isRequired,
  account: React.PropTypes.object.isRequired,
  openLoginDialog: React.PropTypes.func.isRequired,
  hasLogined: React.PropTypes.func.isRequired,
};


export default withStyles(styles)(Plane);
