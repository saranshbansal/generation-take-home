import React, { Component } from 'react';
import { Map, InfoWindow, Marker, Polygon, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markersArray: []
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  componentDidUpdate() {
    const addressArray = this.props.myData;
    const geocoder = this.props.google.maps.Geocoder();

    for (let i = 0; i < addressArray.length; i++) {
      geocoder.geocode({ 'address': addressArray[i].Address }, function (results, status) {
        if (status == this.props.google.maps.GeocoderStatus.OK) {
          const marker = this.props.google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
          console.log(marker);
          
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        onClick={this.onMapClicked}
      >
        <Marker
          title={'SOMA'}
          name={'SOMA'}
          position={{ lat: 37.778519, lng: -122.405640 }}
          onClick={this.onMarkerClick} />
        <Marker
          title={'Dolores park'}
          name={'Dolores park'}
          position={{ lat: 37.759703, lng: -122.428093 }}
          onClick={this.onMarkerClick} />
        <Marker
          title={'xyz'}
          name={'xyz'}
          position={{ lat: 37.762391, lng: -122.439192 }}
          onClick={this.onMarkerClick} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(MapContainer)