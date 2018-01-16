import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    console.log(this.props.google);
    
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker name={'Current location'} />
        {/* onClose={this.onInfoWindowClose} */}
        <InfoWindow> 
          <div>
            <h1>{'HERE!!!'}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(MapContainer)