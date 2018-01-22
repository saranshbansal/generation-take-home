import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Location from './Location';
import myData from '../../../store_directory.json';
import * as utils from './util';

class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteStores: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!utils.deepCompare(nextProps.favoriteStores, this.state.favoriteStores)) {
      this.setState({
        favoriteStores: nextProps.favoriteStores || []
      });
    }
  }

  onSelectLocation = (name, address, e) => {
    if (typeof e !== 'undefined') {
      e.stopPropagation();
    }
    let favoriteStores = [...this.state.favoriteStores] || [];
    let addFlg = true;
    let index = -1;
    // check if locations is already present in favorites. If yes, remove it.
    Object.keys(favoriteStores).map((i) => {
      if (favoriteStores[i].name === name) {
        addFlg = false;
        index = i;
      }
    });
    if (addFlg) {
      const latlong = this.findLocation(name, address, favoriteStores, this);
    } else {
      favoriteStores.splice(index, 1);
      this.setState({
        favoriteStores
      });
      // set it up in the global list to show markers on map.
      this.props.addLocationForShowingMarkers(favoriteStores);
    }
  };

  findLocation = (name, address, favoriteStores, context) => {
    const google = this.props.google;
    const geocoder = new google.maps.Geocoder();
    if (address && address.trim() !== '') {
      geocoder.geocode({ address }, function (results, status) {
        if (status == 'OK') {
          console.log('Location found: [' + address + ': ' + results[0].geometry.location + ']');
          favoriteStores.push({
            name, address, latlong: results[0].geometry.location, msg: ''
          });
        } else {
          console.log('Cannot find the location on the map.');
          favoriteStores.push({
            name, address, latlong: null, msg: 'Cannot locate the store on map.'
          });
        }
        // update state.
        context.setState({
          favoriteStores
        });
        // set it up in the global list to show markers on map.
        context.props.addLocationForShowingMarkers(favoriteStores);
      });
    }
  };

  render() {
    let optionsMarkup = Object.values(myData).map((row, index) => {
      const name = row.Name;
      const address = row.Address;
      let className = 'card card-info';
      let tooltip = 'Add to favorites';
      let isFavorited = false;
      let msg = ''
      Object.keys(this.state.favoriteStores).map((i) => {
        if (this.state.favoriteStores[i].name === name) {
          className = this.state.favoriteStores[i].msg === '' ? 'card card-success' : 'card card-warning';
          tooltip = 'Remove from favorites';
          isFavorited = true;
          msg = this.state.favoriteStores[i].msg;
        }
      });
      return (
        <Location
          key={index}
          name={name}
          address={address}
          className={className}
          tooltip={tooltip}
          msg={msg}
          isFavorited={isFavorited}
          onSelectLocation={this.onSelectLocation}
        />
      );
    });
    return (
      <div className="container location-container">
        <div className="title">
          <h1>
            {'Store Locations'}
          </h1>
        </div>
        <div className="row">
          {optionsMarkup}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A'
})(LocationsList);