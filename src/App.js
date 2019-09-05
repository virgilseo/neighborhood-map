import React, { Component } from 'react';
import './App.css';
import './responsive.css';
import Header from './Header'
import MapContainer from './Map';
import SideBar from './SideBar';
import Footer from './Footer'
import escapeRegExp from 'escape-string-regexp';
import {debounce} from 'lodash';
import Locations from './Locations';

//Store all the information about the locations in a array of objects
const places = Locations

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
    menuIcon:'menu',
    screenWidth: window.innerWidth
  }

  componentDidMount() {
    this.setState({ places:places })
   }


  //Handle marker click and set visibility for the info window
  //Fetch information for a specific location from third party api and suply it to the user

  onMarkerClick = (marker, currentMarker, e) => {
    this.setState({
      showingInfoWindow: true,
      isLoading: true,
      markerLat: marker.currentMarker.lat,
      markerLng: marker.currentMarker.lng
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
 //Close the sidebar after user cliks on a location only for mobile devices
      listItemClick = (listItem) => {
        this.setState({
        showingInfoWindow: true,
        isLoading: true,
        markerLng: listItem.lng,
        markerLat: listItem.lat
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

        if (this.state.screenWidth < 601) {
          this.setState({sideBarclass: 'side-container-clossed'})
          this.setState({menuIcon: 'menu'})
          this.setState({mapWidth:'map-container-full'})
        }
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
      this.setState({activeMarker: null})
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
          onMarkerClick={this.onMarkerClick}
          activeMarker={this.state.activeMarker}
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
