import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    marginBottom: theme.spacing.unit,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabMoveUp: {
    transform: 'translate3d(0, -46px, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  fabMoveDown: {
    transform: 'translate3d(0, 0, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  snackbar: {
    width: '100%',
    position: 'absolute',
  },
  snackbarContent: {
    width: '100%',
    minWidth:'initial',
    maxWidth:'initial'
  }
});

class FabIntegrationSnackbar extends React.Component {
   

  render() {
    const { classes, handleClick, justJoined, open, close} = this.props;
    
    const fabClassName = classNames(classes.fab, open ? classes.fabMoveUp : classes.fabMoveDown);

    console.log(open, close)
    return (
      <div className={classes.root}>
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={() => close()}
            ContentProps={{
              'aria-describedby': 'snackbar-fab-message-id',
              className: classes.snackbarContent,
            }}
            message={<span id="snackbar-fab-message-id">Just Joined: {justJoined}</span>}
            
            className={classes.snackbar}
          />
        </div>
     
    );
  }
}



export default withStyles(styles)(FabIntegrationSnackbar);