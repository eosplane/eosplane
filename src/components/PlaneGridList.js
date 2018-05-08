import React from 'react';
import ReactPaginate from 'react-paginate';
import CountDownTimer from './CountDownTimer'
import PropTypes from 'prop-types';
import { translate, Trans } from 'react-i18next';
import { withStyles } from 'material-ui/styles';
import '../css/main.css';



const styles = theme => ({
  root: {
    display: 'block',
  },

  PlaneCard: {
    display: 'inline-block',
    fontFamily: 'sans-serif',
    boxSizing: 'border-box',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '200px',
    height: '250px',
    border: '1px solid rgba(77, 182, 172, .3) ',
    borderRadius: '.4rem',
    margin: '10px 10px',
    '&:hover': {
      border: '1px solid teal',
      cursor: 'pointer',
    },


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

  Pagination: {
    display: 'inline-block',
    paddingLeft: '0',
    margin: '20px 0',
    borderRadius: '4px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    color: 'teal',
  },

  Page: {
    boxSizing: 'border-box',
    display: 'inline-block',
    width: '40px',
    height: '35px',
    lineHeight: '35px',
    borderRadius: '.3rem',
    cursor: 'pointer',
    marginRight: '10px',
    '&:hover': {
      backgroundColor: '#e0f2f1',
    },
  },

  Break: {
    boxSizing: 'border-box',
    display: 'inline-block',
    width: '40px',
    height: '35px',
    borderRadius: '.3rem',
    // cursor: 'pointer',
  },

  Previous: {
    display: 'inline-block',

  },

  Next: {
    display: 'inline-block',

  },

  Active: {
    boxSizing: 'border-box',
    width: '40px',
    height: '35px',
    backgroundColor: 'teal',
    color: 'white',
    '&:hover': {
      backgroundColor: 'teal',
      cursor: 'auto',
    },
  },

  PageLink: {
    boxSizing: 'border-box',
    position: 'relative',
    paddingTop: '6px',
    paddingRight: '10px',
    paddingBottom: '8px',
    paddingLeft: '10px',
  },



});

class PlaneGridList extends React.Component {

  constructor() {
    super();

    this.state = {
      activePage: 3,

    };
  }

  handlePageChange = (data) => {
    this.props.handlePageChange(data);
  };


  goToPlane(planeId) {
    this.context.router.transitionTo(`/plane/${planeId}`);
  }

  render() {
    const { t, i18n } = this.props;
    const { classes } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div className={classes.root}>
        <button onClick={() => changeLanguage('zh')}>zh</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <div className="planeCardTable">
          {this.props.planes.map(plane => (
                <div className={classes.PlaneCard} key={plane.id} onClick={() => this.goToPlane(plane.id)}>
                  <img className={classes.PlaneImage} src={plane.image} alt={plane.status}/>
                  <div className={classes.PlaneStatus}>
                    <div className={classes.PlaneStatusItem}>
                      <span className={classes.PlaneStatusItemIcon}>
                        <i className={classes.Icon}></i>
                      </span>
                      <span className={classes.PlaneStatusItemText}>
                        <span className={classes.PlaneStatusLabel}>For sale</span>
                      <span className={classes.PlaneStatusNote}><small> Ξ </small>{plane.price.quantity}</span>
                      </span>
                    </div>
                  </div>

                  <span className={classes.PlaneNewBadge}>
                    <svg className={classes.NewBadge} width="100%" height="100%" viewBox="0 0 38 38">
                      <g fill="none" fillRule="evenodd">
                        <path d="M37.985 0L0 37.985V0h37.985z" fill="#E96BD4"></path>
                        <text fill="#FFF" fontSize="11" fontWeight="500" letterSpacing=".4" transform="rotate(-45 13.581 14.581)">
                          <tspan x="3.081" y="16.581">New</tspan>
                        </text>
                      </g>
                    </svg>
                  </span>
                  <div className={classes.PlaneCardDetails}>
                    <div className={classes.PlaneCardDetailsLevel}><img src="/image/diamond1.gif" alt="d"/><img src="/image/diamond2.gif" alt="d"/><img src="/image/diamond2.gif" alt="2"/></div>
                    <div className={classes.PlaneCardDetailsItemHighlight}>Plane <span className={classes.PlaneCardDetailsItem}>{plane.id}</span></div>
                    <div className={classes.PlaneCardDetailsItemHighlight}>Score <span className={classes.PlaneCardDetailsItem}>{plane.score}</span></div>
                  <div className={classes.PlaneCardDetailsItemHighlight}>{t('time_left')} <CountDownTimer className={classes.PlaneCardDetailsItem} seconds={56352} /></div>

                  </div>
                </div>
          ))}
        </div>
        <div className="paginator">
          <ReactPaginate
            // previousLabel={"previous"}
            //              nextLabel={"next"}
                      //  breakLabel={<a href="">...</a>}
                      //  breakClassName={"break-me"}
                       pageCount={999}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={3}
                       onPageChange={this.handlePageChange}
                       containerClassName={classes.Pagination}
                       pageClassName={classes.Page}
                       breakClassName={classes.Break}
                       previousClassName={classes.Previous}
                       nextClassName={classes.Next}
                       activeClassName={classes.Active}
                       pageLinkClassName={classes.PageLink}
                       nextLabel=""
                       previousLabel=""
                      //  subContainerClassName={"pages pagination"}
                      //  activeClassName={"active"}
          />
        </div>
      </div>
    )
  }
}


PlaneGridList.contextTypes = {
  router: React.PropTypes.object
};

PlaneGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  planes: PropTypes.object.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};


export default translate('translations')(withStyles(styles)(PlaneGridList));
