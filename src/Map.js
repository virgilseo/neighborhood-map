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
            animation={this.props.activeMarker ? (place.name === this.props.activeMarker.name ? this.props.google.maps.Animation.BOUNCE : '0') : '0'}
            currentMarker={place}
          />
         ))}
           <InfoWindow
              position={{lat: parseFloat(this.props.markerLat), lng: parseFloat(this.props.markerLng) }}
              visible={this.props.showingInfoWindow}>
              <div>
                <h1>Name</h1>
                <p>Address: </p>
              </div>
           </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDGZOPom_sB27NIFvnws5BuvoNMti-M1mw')
})(MapContainer)
