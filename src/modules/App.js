import React, { Component } from 'react';
import { Nav, NavItem, Navbar, Grid } from 'react-bootstrap';
import MapContainer from './MapContainer/MapContainer';
import LocationList from './StoreContainer/LocationsList';
import PinnedStoreList from './FavoritesContainer/PinnedStoreList';
import myData from '../../store_directory.json';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModalFlg: false,
			favoriteStores: []
		}
	}

	addLocationForShowingMarkers = (favoriteStores) => {
		this.setState({
			favoriteStores
		});
	};

	openModalHandler = (flg) => {
		this.setState({
			showModalFlg: flg
		});
	};

	render() {
		return (
			<div>
				<Navbar fixedTop={true} staticTop={true}>
					<Navbar.Header>
						<Navbar.Brand>
							<a>Google Maps</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} onClick={() => { this.setState({ showModalFlg: true})}}>
							<PinnedStoreList
								favoriteStores={this.state.favoriteStores}
								showModalFlg={this.state.showModalFlg}
								openModalHandler={this.openModalHandler}
								addLocationForShowingMarkers={this.addLocationForShowingMarkers}
							/>
						</NavItem>
					</Nav>
				</Navbar>
				<MapContainer
					markerLocations={this.state.favoriteStores}
				/>
				<LocationList
					favoriteStores={this.state.favoriteStores}
					addLocationForShowingMarkers={this.addLocationForShowingMarkers}
				/>
			</div>
		);
	}
}
