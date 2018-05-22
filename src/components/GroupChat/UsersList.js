import React from 'react';
import {CSVLink} from 'react-csv';

const UsersList = (props) => {

    let usersList = props.usersList.map((user) => {
       return <div className='user-card'>

                <div>
                    <img src={user.picture} />
                </div>
                
                <div>
                    {user.name}
                </div>

            </div>
    })

    return (
        <div className='users-list-container'>
            
            <CSVLink data={props.csvData} className="download-convo-button" target="_blank" >
                Download Conversation
            </CSVLink>
            {usersList}
        </div>
    );
};

export default UsersList;