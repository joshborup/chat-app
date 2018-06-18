import React, {Component} from 'react';
import friendsButton from './media/friends_button.svg'

class ResponsiveDrawer extends Component {

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
    
    let open = this.props.open ? 'drawer-container open' : 'drawer-container close'

    return (
       
            <div className={open}>
                <button className='friends-toggle' onClick={this.props.drawerToggle}><img src={friendsButton}/></button>
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