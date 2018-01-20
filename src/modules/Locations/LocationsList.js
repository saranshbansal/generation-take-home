import React, { Component } from 'react';
import Location from './Location';
import myData from '../../../store_directory.json';

export default class LocationsList extends Component {
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
      activeLocations.push({
        name, address
      });
    } else {
      activeLocations.splice(index, 1);
    }
    this.setState({
      activeLocations
    });
  };

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