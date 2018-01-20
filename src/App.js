import React, { Component } from 'react';
import { Navbar, Grid } from 'react-bootstrap';
import MapContainer from './MapContainer';
import LocationList from './Locations/LocationsList';
import myData from '../store_directory.json';

export default class App extends Component {
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
				<LocationList />
				<MapContainer />
			</div>
		);
	}
}
