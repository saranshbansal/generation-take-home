import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Location from './Location';
import myData from '../../../store_directory.json';

class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerArray: myData,
      activeLocations: []
    }
    // binding this to event-handler functions
    this.onSelectLocation = this.onSelectLocation.bind(this);
  }

  onSelectLocation = (name, address, e) => {
    if (typeof e !== 'undefined') {
      e.stopPropagation();
    }
    let activeLocations = [...this.state.activeLocations] || [];
    let addFlg = true;
    let index = -1;
    Object.keys(activeLocations).map((i) => {
      if (activeLocations[i].name === name) {
        addFlg = false;
        index = i;
      }
    });
    if (addFlg) {
      const latlong = this.findLocation(name, address, activeLocations, this);
    } else {
      activeLocations.splice(index, 1);
      this.setState({
        activeLocations
      });
    }
  };

  findLocation(name, address, activeLocations, context) {
    console.log(context.state);
    
    console.log('Locating Latitudes/Longitudes of: [' + address + ']');
    const google = this.props.google;
    const geocoder = new google.maps.Geocoder();
    if (address && address.trim() !== '') {
      geocoder.geocode({ address }, function (results, status) {
        if (status == 'OK') {
          console.log('Location found: [' + results[0].geometry.location + ']');
          activeLocations.push({
            name, address, latlong: results[0].geometry.location
          });
          context.setState({
            activeLocations
          });
        } else {
          console.log('Cannot find the location.');
        }
      });
    }
  }

  render() {
    let optionsMarkup = Object.values(myData).map((row, index) => {
      const name = row.Name;
      const address = row.Address;
      let className = 'card card-info';
      let tooltip = 'Add to favorites';
      Object.keys(this.state.activeLocations).map((i) => {
        if (this.state.activeLocations[i].name === name) {
          className='card card-success';
          tooltip='Remove from favorites';
        }
      });
      return (
        <Location
          key={index}
          name={name}
          address={address}
          className={className}
          tooltip={tooltip}
          onSelectLocation={this.onSelectLocation}
        />
      );
    });
    return (
      <div className="container" style={{marginTop: '60px'}}>
        <div className="row">
          {optionsMarkup}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(LocationsList)