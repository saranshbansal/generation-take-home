import React, { Component } from 'react';
import { Map, InfoWindow, Marker, Polygon, GoogleApiWrapper } from 'google-maps-react';
import * as utils from './util';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerLocations: []
    }
  }

  componentWillMount() {
    this.setState({
      markerLocations: this.props.markerLocations
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!utils.deepCompare(nextProps.markerLocations, this.state.markerLocations)) {
      this.setState({
        markerLocations: nextProps.markerLocations || []
      });
    }
  }

  // onMapClicked(props) {
  //   const addressArray = this.props.myData;
  //   console.log(addressArray);

  //   const google = this.props.google;
  //   const geocoder = new google.maps.Geocoder();
  //   let markersArray = [];
  //   for (let i = 0; i < 5; i++) {
  //     geocoder.geocode({ 'address': addressArray[i].Address }, function (results, status) {
  //       if (status == 'OK') {
  //         markersArray.push({
  //           name: addressArray[i].Name,
  //           position: results[0].geometry.location
  //         });
  //         this.setState({
  //           markersArray
  //         });
  //       } else {
  //         markersArray.push({
  //           name: addressArray[i].Name,
  //           position: { lat: 23.33, lng: 18.42 }
  //         });
  //         this.setState({
  //           markersArray
  //         });
  //       }
  //     });
  //   }

  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     })
  //   } else {

  //   }
  // }

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