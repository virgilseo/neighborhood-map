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
            tabindex='0'
          />
          {this.props.places.length === 0 && (
            <p className='no-search-results'>No search results were found :(</p>
          )}
       </div>
        <div className='list-view'>
          <ol className='location-grid'>
          {this.props.places.map((place) => (
            <li
              key={place.id}
              className='list-item'
              onClick={() => this.props.listItemClick(place)}
              tabindex='0'
            >
              <p>{place.name}</p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SideBar
