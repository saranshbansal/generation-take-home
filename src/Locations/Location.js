import React from 'react';

const Location = (props) => {
    return (
        <div className="col-md-3">
            <span>{props.name}</span>
            <span>{props.address}</span>
            <hr />
        </div>
    );
};

export default Location;