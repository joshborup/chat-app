import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import Save from '@material-ui/icons/Save';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Snackbar } from '@material-ui/core';
import StatusSnackBar from '../GroupChat/SnackBar'


class ResponsiveDrawer extends React.Component {
  
    state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {


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
        <div className='drawer-container'>
        <button className='hamburger-button' onClick={this.handleDrawerToggle}>&#x2630;</button>

            <Hidden >
            <Drawer
                className='mobile-drawer-content'
                variant="temporary"
                anchor='right'
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
                    <button className='close-button' onClick={this.handleDrawerToggle}>X</button>
                    <Link to='/'>
                    <button><AccountCircle/></button>
                </Link>
                </div>
                {usersList}
                <StatusSnackBar justJoined={this.props.justJoined} close={this.props.snackBarClose} open={this.props.snackBarOpen}/>
            </Drawer>
            </Hidden>
            <Hidden>
            <Drawer
                className='desktop-drawer-content'
                variant="permanent"
                open
            >
            <div>
                <CSVLink data={this.props.csvData}  target="_blank" >
                    <Button title='Save chat conversation'  variant="raised" size="small">
                        <Save />
                            Save
                    </Button>
                </CSVLink>
                <Link to='/'>
                    <button><AccountCircle/></button>
                    </Link>
            </div>
                {usersList}
                <StatusSnackBar justJoined={this.props.justJoined} close={this.props.snackBarClose} open={this.props.snackBarOpen}/>
            </Drawer>
            </Hidden>
        </div>
    );
  }
}
  
export default ResponsiveDrawer;