import React, { Component } from 'react';
import index, { Map, InfoWindow, Marker, Polygon, GoogleApiWrapper } from 'google-maps-react';

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
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMapClicked(props) {
    const addressArray = this.props.myData;
    console.log(addressArray);

    const google = this.props.google;
    const geocoder = new google.maps.Geocoder();
    let markersArray = [];
    for (let i = 0; i < 5; i++) {
      geocoder.geocode({ 'address': addressArray[i].Address }, function (results, status) {
        if (status == 'OK') {
          markersArray.push({
            name: addressArray[i].Name,
            position: results[0].geometry.location
          });
          this.setState({
            markersArray
          });
        } else {
          markersArray.push({
            name: addressArray[i].Name,
            position: { lat: 23.33, lng: 18.42 }
          });
          this.setState({
            markersArray
          });
        }
      });
    }

    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    } else {

    }
  }

  render() {
    // let markersJsx = this.props.markersArray.map((loc, index) => {
    //   return(
    //     <Marker
    //       key={index}
    //       title={loc.name}
    //       name={loc.name}
    //       position={loc.position}
    //       onClick={this.onMarkerClick} />
    //   );
    // });
    return (
      <Map
        google={this.props.google}
        zoom={6}
      >
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