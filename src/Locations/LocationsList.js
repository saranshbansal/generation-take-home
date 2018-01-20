import React, { Component } from 'react';
import Location from './Location';
import myData from '../../store_directory.json';

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

  onSelectLocation = (e) => {
    this.setState({
      activeLocations: { ...this.state.activeLocations, e }
    });
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
        />
      );
    });
    return (
      <div>
        {optionsMarkup}
      </div>
    );
  }
}