import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//Implementation for loadind the map taken from https://www.npmjs.com/package/google-maps-react

export class MapContainer extends Component {


  render() {
 console.log(this.props.hits)
    return (
      <div className='map-container'>
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
            animation={this.props.activeMarker ? (place.name === this.props.activeMarker.name ? this.props.google.maps.Animation.BOUNCE :'0') : '0'}
            currentMarker={place}
            id={place.id}
          />
         ))}
           <InfoWindow
              position={{lat: parseFloat(this.props.markerLat), lng: parseFloat(this.props.markerLng) }}
              visible={this.props.showingInfoWindow}>
              <div>
              {this.props.hits !== [] && (
                <div>
                  <h1>{this.props.hits.name}</h1>
                  <p>{this.props.hits.timeZone}</p>
                  <p>{this.props.hits.description }</p>
                </div>
              )}
              {this.props.error === 'error' && (
                <p>Something went wrong</p>
              )}
              </div>
           </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDGZOPom_sB27NIFvnws5BuvoNMti-M1mw')
})(MapContainer)
