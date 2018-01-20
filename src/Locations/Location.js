import React from 'react';

const Location = (props) => {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.address}</span>
            <hr />
        </div>
    );
};

export default Location;