import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//Implementation for loadind the map taken from https://www.npmjs.com/package/google-maps-react

const places = [
  { id: 'h6N9N', name: 'KIT - Kunst im Tunnel', address: 'Mannesmannufer 1b, 40213 Düsseldorf', lat: 51.220050, lng: 6.767270 },
  { id: 'iH6M9', name: 'City Museum', address: 'Berger Allee 2, 40213 Düsseldorf', lat: 51.218579, lng: 6.769980 },
  { id: 'h78Hg', name:'TeamEscape Düsseldorf', address: 'Alexanderstraße 31, 40210 Düsseldorf',  lat: 51.220050, lng: 6.783620 },
  { id: 'k90Ms', name: 'Stahlhof', address: 'Bastionstraße 39, 40213 Düsseldorf', lat: 51.221380, lng: 6.776260 },
  { id: 'kl12B', name:'Schadow-Arkaden', address:'Schadowstraße 11, 40212 Düsseldorf', lat: 51.225510, lng: 6.780310 }
]
export class MapContainer extends Component {

//Set Initail state
  state = {
    places:[],
    showingInfoWindow: false,
    activeMarker: {},
    locationName:[],
    locationAddress:[]
  }

  componentDidMount() {
    this.setState({ places:places })
  }

  //Handle marker click and set visibility for the info window

  onMarkerClick = (props, marker, e) =>
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
      locationName: marker.name,
      locationAddress: marker.address
    });

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
            onClick={this.onMarkerClick}
            position={{ lat:place.lat, lng:place.lng }}
            key={place.id}
            name={place.name}
            address={place.address}
          />
         ))}
           <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.locationName}</h1>
                <p>Address: {this.state.locationAddress}</p>
              </div>
           </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDGZOPom_sB27NIFvnws5BuvoNMti-M1mw')
})(MapContainer)
