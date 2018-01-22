import React from 'react';

const PinnedStoreRecord = (props) => {
    
    const rowData = Object.values(props.rowData).map((row, index) => {
        return (
            <tr key={index} className="capitalize">
                <td>
                    <span>
                        {index + 1 + '.'}
                    </span>
                </td>
                <td>
                    <span>
                        {row.name}
                    </span>
                </td>
                <td>
                    <span>
                        {row.address}
                    </span>
                </td>
                <td>
                    <span>
                        {row.latlong ? (row.latlong.lat() + ', ' + row.latlong.lng()) : ''}
                    </span>
                </td>
            </tr>
        );
    });
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="col col-xs-1 col-md-1">{''}</th>
                        <th className="col col-xs-4 col-md-3">{'Store Name'}</th>
                        <th className="col col-xs-5 col-md-6">{'Store Address'}</th>
                        <th className="col col-xs-5 col-md-2">{'Latitude/Longitude'}</th>
                    </tr>
                </thead>
                <tbody>
                    {rowData}
                </tbody>
            </table>
        </div>
    );
};

export default PinnedStoreRecord;
