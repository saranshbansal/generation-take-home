import React from 'react';
import { Glyphicon } from 'react-bootstrap';

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
                <td>
                    <span className="danger mouse-pointer" title="Remove From Favorites" onClick={e => {props.removeStoreFromFavorites(e, row)}}>
                        <Glyphicon glyph="remove" />
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
                        <th className="col col-xs-4 col-md-2">{'Store Name'}</th>
                        <th className="col col-xs-5 col-md-6">{'Store Address'}</th>
                        <th className="col col-xs-5 col-md-2">{'Latitude/Longitude'}</th>
                        <th className="col col-xs-1 col-md-1">{'Remove'}</th>
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
