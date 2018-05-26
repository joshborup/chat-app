import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import Save from '@material-ui/icons/Save';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import StatusSnackBar from '../GroupChat/SnackBar'

const styles = {
    root: {
      width: '25%',
      minWidth: '320px'
    }
}

class UsersList extends Component{
    constructor(props){
        super(props)
        this.state = {
            mobileOpen: false
        }
    }

    componentDidMount(){
        if(window.innerWidth <= 1199){
            console.log(`window screen width is ${window.innerWidth}`)
        } 
    }

    handleDrawerToggle = () => {
        this.setState({ 
            mobileOpen: !this.state.mobileOpen 
        });
    };

    render(){
    let usersList = this.props.usersList.map((user) => {
       return <div className='user-card'>

                <div>
                    <img src={user.picture} />
                </div>
                
                <div>
                    {user.name}
                </div>

                <div>
                    <div className='online'>

                    </div>
                </div>

            </div>
    })
    
    return (
        <div className='drawer-container' >
            <button className='hamburger-button' onClick={this.handleDrawerToggle}>&#x2630;</button>

        <Hidden classes={
        styles.root
      } className='users-list-container mobile-drawer' mdUp>
          <Drawer
            variant="temporary"
            anchor='left'
            onClose={this.handleDrawerToggle}
            open={this.state.mobileOpen}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className='close-save-container'>
                <CSVLink className='download-convo-button' data={this.props.csvData}  target="_blank" >
                    <Button title='Save chat conversation'  variant="raised" size="small">
                        <Save />
                            Save
                    </Button>
                </CSVLink>
                <button className='close-button' style={{position: 'absolute', top:'10px', right:'10px', fontSize: '20px'}} onClick={this.handleDrawerToggle}>X</button>
                <a href='/'>
                <button><AccountCircle/></button>
            </a>
            </div>
            {usersList}
            <StatusSnackBar justJoined={this.props.justJoined} close={this.props.snackBarClose} open={this.props.snackBarOpen}/>
          </Drawer>
        </Hidden>
        <Hidden classes={
        styles.root
      } className='users-list-container' smDown implementation="css">
          <Drawer
            variant="permanent"
            open
          >
        <div className='desktop-sidebar'>
            <CSVLink className='download-convo-button' data={this.props.csvData}  target="_blank" >
                <Button title='Save chat conversation'  variant="raised" size="small">
                    <Save />
                        Save
                </Button>
            </CSVLink>
            <a href='/'>
                <button><AccountCircle/></button>
            </a>
        </div>
            {usersList}
            <StatusSnackBar justJoined={this.props.justJoined} close={this.props.snackBarClose} open={this.props.snackBarOpen}/>
          </Drawer>
        </Hidden>
        </div>
    );
    }  
};

UsersList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(UsersList);


