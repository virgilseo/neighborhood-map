import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//Implementation for loadind the map taken from https://www.npmjs.com/package/google-maps-react

export class MapContainer extends Component {

  render() {
    return (
      <div className={this.props.mapWidth} id='map'>
        <Map
          google={this.props.google}
          zoom={13}
          initialCenter={{ lat: 51.22172, lng: 6.77616 }}
        >
          {this.props.places.map((place) => (
            <Marker
              onClick={this.props.onMarkerClick}
              position={{ lat:place.lat, lng:place.lng }}
              key={place.id}
              name={place.name}
              address={place.address}
              currentMarker={place}
              id={place.id}
              title={`${place.name} - ${place.type}`}
            />
           ))}
             <InfoWindow
                onClose={this.props.hideInfoWindow}
                position={{lat: parseFloat(this.props.markerLat), lng: parseFloat(this.props.markerLng)}}
                visible={this.props.showingInfoWindow}>
                <div className='info-window'>
                {this.props.isLoading === true && (
                  <div className='loader-container'>
                    <div className='infowindow-loader'></div>
                  </div>
                )}
                {this.props.hits !== [] && !this.props.error && this.props.isLoading === false && (
                  <div>
                    <h2 className='location-title'>{this.props.hits.name}</h2>
                    {this.props.hits.bestPhoto && (
                      <img alt={this.props.hits.name} src={`${this.props.hits.bestPhoto.prefix}400x200${this.props.hits.bestPhoto.suffix}`}/>
                    )}
                    {this.props.hits.location && (
                      <p>{Object.values(this.props.hits.location.address)}</p>
                    )}
                    {this.props.hits.contact && (
                      <p>{Object.values(this.props.hits.contact.formattedPhone || '')}</p>
                    )}
                    {this.props.hits.hours && (
                      <p>{Object.values(this.props.hits.hours.status)}</p>
                    )}
                    {this.props.hits.url && (
                      <a href={this.props.hits.url} target="_blank" rel="noopener noreferrer">Visit website</a>
                    )}
                    <hr className='infowindow-line'></hr>
                    <p className='api-text'>Location info provided by <a href="https://foursquare.com/" target="_blank" rel="noopener noreferrer">Foursquare</a></p>
                  </div>
                )}
                {this.props.error === 'error' && this.props.isLoading === false && (
                  <p className='error-message'>Something went wrong. Please try again later.</p>
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
