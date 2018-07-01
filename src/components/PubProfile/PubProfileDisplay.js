import React from 'react';

const PubProfileDisplay = (props) => {
    console.log(props);
    return (
        <div>
            <div>
                {props.pubUser.name}
           </div>
           <div>
                {props.pubUser.id}
           </div>
        </div>
    );
};

export default PubProfileDisplay;