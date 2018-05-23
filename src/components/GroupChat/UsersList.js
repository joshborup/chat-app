import React from 'react';
import Button from '@material-ui/core/Button';
import {CSVLink} from 'react-csv';
import Save from '@material-ui/icons/Save';

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

        <CSVLink className='download-convo-button' data={props.csvData}  target="_blank" >
        <Button title='Save chat conversation'  variant="raised" size="small">
        <Save />
                Save
      </Button>
            </CSVLink>
            
            
            {usersList}
        </div>
    );
};

export default UsersList;