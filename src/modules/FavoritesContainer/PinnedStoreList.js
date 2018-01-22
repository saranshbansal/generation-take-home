import React, { Component } from 'react';
import { Button, Modal, Glyphicon } from 'react-bootstrap';
import PinnedStoreRecord from './PinnedStoreRecord';

class PinnedStoreList extends Component {
    removeStoreFromFavorites = (e, store) => {
        if (typeof e !== 'undefined') {
            e.stopPropagation();
        }
        let favoriteStores = this.props.favoriteStores ? [...this.props.favoriteStores] : [];
        Object.keys(favoriteStores).map((i) => {
            if (favoriteStores[i].name === store.name) {
                // remove this store from favs
                favoriteStores.splice(i, 1);
                // update global store list
                this.props.addLocationForShowingMarkers(favoriteStores);
            }
        });
    };
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
                            removeStoreFromFavorites={this.removeStoreFromFavorites}
                        />
                    </Modal.Body>
                </Modal>
                {'View Favorites '}<Glyphicon glyph="star" />
            </div>
        );
    }
}

export default PinnedStoreList;
