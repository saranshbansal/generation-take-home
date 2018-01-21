import React from 'react';

const Location = (props) => {
    let badgeStyle = props.isFavorited ? props.msg === '' ? 'badge badge-success pull-right green' : 'badge badge-success pull-right orange' : 'badge badge-success pull-right';
    return (
        <div className="col-lg-3 col-xs-6">
            <div className={props.className + ' mouse-pointer'}>
                <span className={badgeStyle} title={props.tooltip} onClick={e => { props.onSelectLocation(props.name, props.address, e) }}>✶</span>
                <span className="name"><b>{props.name}</b></span>
                <br />
                <span className="desc">{props.address}</span>
                {props.msg && (
                    <div className='error-msg'>{props.msg}</div>
                )}
            </div>
        </div>
    );
};

export default Location;