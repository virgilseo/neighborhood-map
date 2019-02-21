import React, { Component } from 'react';
import './App.css';
import './responsive.css';
import MapContainer from './Map';
import SideBar from './SideBar';
import escapeRegExp from 'escape-string-regexp';

//Store all the information about the locations in a array of objects
const places = [
  { id: '4b4f5c12f964a520080327e3', name: 'KIT - Kunst im Tunnel', address: 'Mannesmannufer 1b, 40213 Düsseldorf', lat: 51.220050, lng: 6.767270 },
  { id: '4be413a2477d9c742184e62d', name: 'Filmmuseum Düsseldorf', address: 'Schulstraße 4, 40213 Düsseldorf', lat: 51.223810, lng: 6.771320 },
  { id: '562a8a69498e31c0f73f3339', name:'TeamEscape Düsseldorf', address: 'Alexanderstraße 31, 40210 Düsseldorf',  lat: 51.220050, lng: 6.783620 },
  { id: '4fbd2705e4b0d4cb242c78ee', name: 'Verwaltungsgericht Düsseldorf', address: 'Bastionstraße 39, 40213 Düsseldorf', lat: 51.221380, lng: 6.776260 },
  { id: '4b7149b2f964a5208d3f2de3', name:'Schadow-Arkaden', address:'Schadowstraße 11, 40212 Düsseldorf', lat: 51.225510, lng: 6.780310 }
]

class App extends Component {

//Set Initail state
  state = {
    places:[],
    showingInfoWindow: false,
    activeMarker: {},
    markerLat:[],
    markerLng:[],
    query:'',
    hits:[],
    error:''
  }

  componentDidMount() {
    this.setState({ places:places })
   }


  //Handle marker click and set visibility for the info window

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
      markerLat: marker.currentMarker.lat,
      markerLng: marker.currentMarker.lng,
    })
    fetch(`https://api.foursquare.com/v2/venues/${marker.id}?&client_id=RFGGO3Q5O5MI40NX4UVYD2JXAXY3EL3UGC1QM0QPESYQUNZD&client_secret=14BKOHGOP2A5K2YQHQGLJUXP22MABNFZPKPF2PCB3YE3FP3O&v=20190220`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
     })
      .then(data => this.setState({hits: data.response.venue, error:''}))
      .catch(error =>  this.setState({error: 'error', hits:[]}))
   }

  //Filer locations based on user input

  filterLocations = (query) => {

    let filterdLocations

    if (query) {
      this.setState({ query: query.trim() })
      this.setState({showingInfoWindow: false})

      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      filterdLocations = this.state.places.filter( (place) => match.test(place.name))
      this.setState({places: filterdLocations})
    } else {
      this.setState({places: places})
    }
 }

 //Handle click on list item Locations. Animate markers and display the appropiate info window.
    listItemClick = (listItem) => {
     this.setState({
       activeMarker: listItem,
       markerLat: listItem.lat,
       markerLng: listItem.lng,
       showingInfoWindow: true,
     })
     fetch(`https://api.foursquare.com/v2/venues/${listItem.id}?&client_id=RFGGO3Q5O5MI40NX4UVYD2JXAXY3EL3UGC1QM0QPESYQUNZD&client_secret=14BKOHGOP2A5K2YQHQGLJUXP22MABNFZPKPF2PCB3YE3FP3O&v=20190220`)
     .then(response => {
       if (response.ok) {
         return response.json();
       } else {
         throw new Error('Something went wrong ...');
       }
      })
       .then(data => this.setState({hits: data.response.venue, error:''}))
       .catch(error =>  this.setState({error: 'error', hits:[]}))
    }

  render() {

    return (
      <div className="App">
        <SideBar
          places={this.state.places}
          filterLocations={this.filterLocations}
          listItemClick={this.listItemClick}
          hits={this.state.hits}
        />
        <MapContainer
          google={this.props.google}
          places={this.state.places}
          showingInfoWindow={this.state.showingInfoWindow}
          activeMarker={this.state.activeMarker}
          markerLat={this.state.markerLat}
          markerLng={this.state.markerLng}
          onMarkerClick={this.onMarkerClick}
          hits={this.state.hits}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
