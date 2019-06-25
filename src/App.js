import React, { Component } from 'react';
import './App.css';
import './responsive.css';
import Header from './Header'
import MapContainer from './Map';
import SideBar from './SideBar';
import Footer from './Footer'
import escapeRegExp from 'escape-string-regexp';
import {debounce} from 'lodash';

//Store all the information about the locations in a array of objects
const places = [
  { id: '4b4f5c12f964a520080327e3', name: 'KIT - Kunst im Tunnel', type: 'museum', lat: 51.220050, lng: 6.767270 },
  { id: '4be413a2477d9c742184e62d', name: 'Filmmuseum ', type: 'museum', lat: 51.223810, lng: 6.771320 },
  { id: '562a8a69498e31c0f73f3339', name: 'TeamEscape', type: 'escape room', address: 'Alexanderstraße 31, 40210 Düsseldorf',  lat: 51.220050, lng: 6.783620 },
  { id: '4b6d5115f964a520be702ce3', name: 'Uerige', type: 'brewery', lat: 51.22509973234009, lng: 6.7723058742430755 },
  { id: '590604adf00a703cd1500e8a', name: 'Holy Craft Beer Bar', type:'brewery', lat: 51.22786801613094, lng: 6.7733523400135836 },
  { id: '58a32d1914f8f4092c99d864', name: 'Exit the Room', type: 'escape room', lat:51.216534, lng: 6.780973 },
  { id: '58c6bb00260327384aef6d1e', name: 'Locked Room', type: 'escape room', lat: 51.2121697952451, lng: 6.807385571758232 },
  { id: '4b6813f6f964a5204f662be3', name: 'La Luce Due', type: 'restaurant', lat: 51.230733920253286, lng: 6.80959599525736 },
  { id: '4b3be8f6f964a520207e25e3', name: 'Takumi', type: 'restaurant', lat: 51.22342887840904, lng: 6.788530773884483 },
  { id: '4c0cf5bf2466a5938fc87621', name: 'Casita Mexicana', type: 'restaurant', lat: 51.210704143755486, lng: 6.774504906838067 },
  { id: '53fd985a498ed8daa0b774c9', name: 'Bob & Mary', type: 'restaurant', lat: 51.2149445291977, lng: 6.756618179610777 },
  { id: '4b5ed93ef964a520d79a29e3', name: 'Schumacher Stammhaus', type: 'brewery', lat: 51.221498311147, lng: 6.785565174084197 },
  { id: '4b6d861ff964a5202d7a2ce3', name: 'Brauhaus Joh. Albrecht', type: 'brewery', lat: 51.24036708537516, lng: 6.751411578633284 },
  { id: '4bdc1b9f63c5c9b6ec6a2a68', name: 'Museum Kunstpalast', type: 'museum', lat: 51.23492906744998, lng: 6.773236574142464 },
  { id: '4b6e9e41f964a5202ac42ce3', name: 'K21 Ständehaus', type: 'museum', lat: 51.21664355455374, lng: 6.773998887902013 }
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
    error:'',
    isLoading: false,
    sideBarclass: 'side-container-clossed',
    mapWidth: 'map-container-full',
    menuIcon:'menu'
  }

  componentDidMount() {
    this.setState({ places:places })
   }


  //Handle marker click and set visibility for the info window
  //Fetch information for a specific location from third party api and suply it to the user

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
      markerLat: marker.currentMarker.lat,
      markerLng: marker.currentMarker.lng,
      isLoading: true,
    })
    fetch(`https://api.foursquare.com/v2/venues/${marker.id}?&client_id=ITQ0RTP2N4E2GRW1PUVHVWHCRMBOQAXIPDQK4VMFVPTRYY23&client_secret=3APPTXCDHJG5Q0I3S0BBOTOHYRNSCOBQARRXFNWZL5E3MAKU&v=20190220`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
     })
      .then(data => this.setState({hits: data.response.venue, error:'', isLoading: false}))
      .catch(error =>  this.setState({error: 'error', hits:[], isLoading: false}))
   }


  //Filer locations based on user input

  filterLocations = debounce((query) => {

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
  },700)

 //Handle click on list item Locations. Animate markers and display the appropiate info window.
 //Fetch information for a specific location from third party api and suply it to the user
    listItemClick = (listItem, e) => {
     this.setState({
       activeMarker: listItem,
       markerLat: listItem.lat,
       markerLng: listItem.lng,
       showingInfoWindow: true,
       isLoading: true
     })
     fetch(`https://api.foursquare.com/v2/venues/${listItem.id}?&client_id=ITQ0RTP2N4E2GRW1PUVHVWHCRMBOQAXIPDQK4VMFVPTRYY23&client_secret=3APPTXCDHJG5Q0I3S0BBOTOHYRNSCOBQARRXFNWZL5E3MAKU&v=20190220`)
     .then(response => {
       if (response.ok) {
         return response.json();
       } else {
         throw new Error('Something went wrong ...');
       }
      })
       .then(data => this.setState({hits: data.response.venue, error:'', isLoading: false}))
       .catch(error =>  this.setState({error: 'error', hits:[], isLoading: false}))
    }

    // Filter locations based on type

    filterLocationType = (option) => {
      let filterdLocations

      if (option !== 'off') {

        const match = new RegExp(escapeRegExp(option), 'i')
        filterdLocations = places.filter( (place) => match.test(place.type))

        this.setState({places: filterdLocations})
        this.setState({showingInfoWindow: false})

      } else {
        this.setState({places: places})
      }

    }

    //Toggle Sidebar when the users clicks the menu icons

    toggleSideBar = () => {
      let sideClass = (this.state.sideBarclass === 'side-container-clossed') ? 'side-container-open' : 'side-container-clossed'
      let mapWidth = (this.state.mapWidth === 'map-container-full') ? 'map-container-half' : 'map-container-full'
      let menuIcon = (this.state.menuIcon === 'menu' ? 'close' : 'menu')

      this.setState({sideBarclass: sideClass})
      this.setState({mapWidth: mapWidth})
      this.setState({menuIcon: menuIcon})
    }

    //Hide info window

    hideInfoWindow = () => {
      this.setState({showingInfoWindow:false})
    }

  render() {

    return (
      <div className="App">
        <Header
         toggleSideBar={this.toggleSideBar}
         menuIcon={this.state.menuIcon}
        />
        <SideBar
          places={this.state.places}
          filterLocations={this.filterLocations}
          listItemClick={this.listItemClick}
          hits={this.state.hits}
          filterLocationType={this.filterLocationType}
          sideBarclass={this.state.sideBarclass}
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
          isLoading={this.state.isLoading}
          mapWidth={this.state.mapWidth}
          hideInfoWindow={this.hideInfoWindow}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
