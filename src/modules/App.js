import React, { Component } from 'react';
import { Navbar, Grid } from 'react-bootstrap';
import MapContainer from './MapContainer/MapContainer';
import LocationList from './StoreContainer/LocationsList';
import myData from '../../store_directory.json';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markerLocations: []
		}
		// binding this to event-handler functions
		this.addLocationForShowingMarkers = this.addLocationForShowingMarkers.bind(this);
	}

	addLocationForShowingMarkers = (markerLocations) => {
		this.setState({
			markerLocations
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
				</Navbar>
				<MapContainer
					markerLocations={this.state.markerLocations}
				/>
				<LocationList
					addLocationForShowingMarkers={this.addLocationForShowingMarkers}
				/>
			</div>
		);
	}
}
