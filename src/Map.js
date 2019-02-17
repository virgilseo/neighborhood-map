import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//Implementation for loadind the map taken from https://www.npmjs.com/package/google-maps-react

const places = [
  { lat: 51.221569, lng: 6.785354 },
  { lat: 51.218579, lng: 6.784461 },
  { lat: 51.219820, lng: 6.766711 },
  { lat: 51.223832, lng: 6.771095 },
  { lat: 51.227542, lng: 6.775780 }
]
export class MapContainer extends Component {

//Set Initail state
  state = {
    places:[]
  }

  componentDidMount() {
    this.setState({ places:places })
  }

  render() {
    console.log(places)
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 51.22172, lng: 6.77616 }}
      >
        {this.state.places.map((place) => (
          <Marker
            position={{ lat:place.lat, lng:place.lng }}
            key={place.lat}
          />
         ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDGZOPom_sB27NIFvnws5BuvoNMti-M1mw')
})(MapContainer)
