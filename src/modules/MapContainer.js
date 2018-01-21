import React, { Component } from 'react';
import { Map, InfoWindow, Marker, Polygon, GoogleApiWrapper } from 'google-maps-react';
import * as utils from './util';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapCenter: { lat: 23.6345, lng: -99.133209},
      markerLocations: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!utils.deepCompare(nextProps.markerLocations, this.state.markerLocations)) {
      this.setState({
        markerLocations: nextProps.markerLocations || []
      });
    }
  }

  render() {
    let markersJsx = this.state.markerLocations.map((marker, index) => {
      return (
        <Marker
          key={index}
          title={marker.name}
          name={marker.name}
          position={marker.latlong}
        />
      );
    });
    return (
      <Map
        google={this.props.google}
        initialCenter={this.state.mapCenter}
        zoom={6}
      >
        {markersJsx}
        {/* <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(MapContainer)