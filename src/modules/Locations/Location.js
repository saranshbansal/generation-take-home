import React from 'react';

const Location = (props) => {
    return (
        <div className="col-lg-3 col-xs-6">
            <div className="card card-info">
                <a className="name" title="Add to Favorites" onClick={e => { props.onSelectLocation(props.name, props.address, e) }}><b>{props.name}</b></a>
                <br />
                <span className="desc">{props.address}</span>
            </div>
        </div>
    );
};

export default Location;