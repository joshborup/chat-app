import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { CSVLink } from 'react-csv';
import Save from '@material-ui/icons/Save';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/icons/Menu'; 
import PropTypes from 'prop-types';




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
        this.setState({ mobileOpen: !this.state.mobileOpen });
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
            <button onClick={this.handleDrawerToggle}>&#x2630;</button>

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
                <button style={{position: 'absolute', top:'10px', right:'10px', fontSize: '20px'}} onClick={this.handleDrawerToggle}>X</button>
            </div>
            {usersList}
          </Drawer>
        </Hidden>
        <Hidden classes={
        styles.root
      } className='users-list-container' smDown implementation="css">
          <Drawer
            variant="permanent"
            open
          >

        <CSVLink className='download-convo-button' data={this.props.csvData}  target="_blank" >
            <Button title='Save chat conversation'  variant="raised" size="small">
                <Save />
                    Save
            </Button>
        </CSVLink>
            
            
            {usersList}
            
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


