import React, { Component } from 'react';
import './App.css';
import MapContainer from './Map'

//Store all the information about the locations in a array of objects
const places = [
  { id: 'h6N9N', name: 'KIT - Kunst im Tunnel', address: 'Mannesmannufer 1b, 40213 Düsseldorf', lat: 51.220050, lng: 6.767270 },
  { id: 'iH6M9', name: 'City Museum', address: 'Berger Allee 2, 40213 Düsseldorf', lat: 51.218579, lng: 6.769980 },
  { id: 'h78Hg', name:'TeamEscape Düsseldorf', address: 'Alexanderstraße 31, 40210 Düsseldorf',  lat: 51.220050, lng: 6.783620 },
  { id: 'k90Ms', name: 'Stahlhof', address: 'Bastionstraße 39, 40213 Düsseldorf', lat: 51.221380, lng: 6.776260 },
  { id: 'kl12B', name:'Schadow-Arkaden', address:'Schadowstraße 11, 40212 Düsseldorf', lat: 51.225510, lng: 6.780310 }
]

class App extends Component {

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
    return (
      <div className="App">
        <MapContainer
          google={this.props.google}
          places={this.state.places}
          showingInfoWindow={this.state.showingInfoWindow}
          activeMarker={this.state.activeMarker}
          locationName={this.state.locationName}
          locationAddress={this.state.locationAddress}
          onMarkerClick={this.onMarkerClick}
        />
      </div>
    );
  }
}

export default App;
