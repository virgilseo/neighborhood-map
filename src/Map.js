import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//Implementation for loadind the map taken from https://www.npmjs.com/package/google-maps-react

export class MapContainer extends Component {

  render() {

    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 51.22172, lng: 6.77616 }}
      >
        {this.props.places.map((place) => (
          <Marker
            onClick={this.props.onMarkerClick}
            position={{ lat:place.lat, lng:place.lng }}
            key={place.id}
            name={place.name}
            address={place.address}
          />
         ))}
           <InfoWindow
              marker={this.props.activeMarker}
              visible={this.props.showingInfoWindow}>
              <div>
                <h1>{this.props.locationName}</h1>
                <p>Address: {this.props.locationAddress}</p>
              </div>
           </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDGZOPom_sB27NIFvnws5BuvoNMti-M1mw')
})(MapContainer)
