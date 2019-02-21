import React, {Component} from 'react'

class SideBar extends Component {

render() {

    return(
      <div className='side-container'>
        <h1 className='list-view-title'>Dusseldorf Locations</h1>
        <div className="search-input-wrapper">
          <input
            type="search"
            placeholder="Search by name"
            onChange={(event) => this.props.filterLocations(event.target.value)}
            className='input'
            tabIndex='0'
          />
          {this.props.places.length === 0 && (
            <p className='no-search-results'>No search results were found :(</p>
          )}
       </div>
        <div className='list-view' id='locations-list'>
          <ol className='location-grid' aria-labelledby="locations-list">
          {this.props.places.map((place) => (
            <li
              key={place.id}
              className='list-item'
              onClick={() => this.props.listItemClick(place)}
              onKeyPress={() => this.props.listItemClick(place)}
              tabIndex='0'
              role='button'
              name={place.name}
            >
              <p>{place.name}</p>
            </li>
          ))}
          </ol>
          <p className='api-text'>The information for the locations is fetched from <a href='https://foursquare.com/'>Foursquare</a></p>
        </div>
      </div>
    )
  }
}

export default SideBar
