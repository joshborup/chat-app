import React, {Component} from 'react';
import friendsButton from './media/friends_button.svg';
import closeFriends from '../shared/media/closeFriends.svg';
import {Link} from 'react-router-dom';

class ResponsiveDrawer extends Component {



  render() {
    console.log(this.props.usersList);
    let usersList = this.props.usersList ? this.props.usersList.map((user) => {
        
        return <Link key={user.id} to={`/user/user_profile/${user.id}`}>
            <div className='user-card'>
 
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
             </Link>
     }) : 'loading';
    
    let open = this.props.open ? 'drawer-container open' : 'drawer-container close'

    return (
       
            <div className={open}>
                <button className='friends-toggle' onClick={this.props.drawerToggle}>{this.props.open ? <img src={closeFriends}/> : <img src={friendsButton}/>  }</button>
                <div className='room-info'>
                    <div>
                        Room: {this.props.room}
                    </div>
                    <div>
                        Online: {this.props.count}
                    </div>
                </div>
                {usersList}
            </div>
    );
  }
}
  
export default ResponsiveDrawer;