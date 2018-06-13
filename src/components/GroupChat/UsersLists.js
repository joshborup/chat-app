import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';


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
    

    return (
        <div className='drawer-container'>
            {usersList}
        </div>
    );
  }
}
  
export default ResponsiveDrawer;