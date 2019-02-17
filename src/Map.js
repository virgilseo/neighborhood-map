import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 51.22172, lng: 6.77616 }}
      >
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDGZOPom_sB27NIFvnws5BuvoNMti-M1mw')
})(MapContainer)
