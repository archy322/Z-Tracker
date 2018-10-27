import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import PostCardsList from "../PostCardsList/PostCardsList";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 70,
    height: theme.spacing.unit * 100,
    boxShadow: theme.shadows[5],
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


const card = {
  "id": 1896584268071972630,
  "text": "I'll never meet the ground",
  "created_at": new Date().toISOString().slice(0, 10),
  "display_url": "https://instagram.fiev15-1.fna.fbcdn.net/vp/23a1afc3a3ee1e0bba9baeeaeb63cab9/5C6CCDE8/t51.2885-15/e35/44741347_717604408595777_7196075761032818946_n.jpg"
};

class Album extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      cards: []
    }
  }

  componentDidMount = () => {
    fetch('http://b1f6106e.ngrok.io')
        .then(response => response.json())
        .then(response => {
          console.log(response);
        })
  };

  render = () => {
    const {classes} = this.props;
    const {cards} = this.state;
    return (
        <React.Fragment>
          <CssBaseline/>
          <Header/>
          {
            this.state.cards.length > 0
                ? <PostCardsList postCards={cards} classes={classes}/>
                : <Typography gutterBottom variant="h4" component="h2">
                    There is no luxury photo materials(
                  </Typography>
          }

          <Footer className={classes.footer}/>
        </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);