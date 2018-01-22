import React, { Component } from 'react';
import { Button, Modal, Glyphicon } from 'react-bootstrap';
import PinnedStoreRecord from './PinnedStoreRecord';

class PinnedStoreList extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showModalFlg} onHide={() => this.props.openModalHandler(false)} bsSize="lg" backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>{'Your Pinned Stores'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PinnedStoreRecord
                            rowData={this.props.favoriteStores}
                        />
                    </Modal.Body>
                </Modal>
                {'View Favorites '}<Glyphicon glyph="star" />
            </div>
        );
    }
}

export default PinnedStoreList;
