import React, { Component } from 'react';
import Location from './Location';
import myData from '../../../store_directory.json';

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerArray: myData,
      activeLocations: {}
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
    Object.keys(activeLocations).map((i) => {
      if (activeLocations[i].name === name) {
        addFlg = false;
      }
    });
    if (addFlg) {
      activeLocations.push({
        name, address
      });
      this.setState({
        activeLocations
      });
    }
  };

  render() {
    let optionsMarkup = Object.values(myData).map((row, index) => {
      const name = row.Name;
      const address = row.Address;
      return (
        <Location
          key={index}
          name={name}
          address={address}
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