import React, { Component } from 'react';
import MapContainer from './MapContainer';
import LocationList from './Locations/LocationsList';
import myData from '../store_directory.json';

export default class App extends Component {
	render() {
		return (
			<div>
				<LocationList />
				<MapContainer />
			</div>
		);
	}
}
