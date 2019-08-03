import React, {Component} from 'react'

class SideBar extends Component {

render() {

    return(
      <div className={this.props.sideBarclass}>
        <div className="search-input-wrapper">
          <input
            type="search"
            placeholder="Search by name"
            onChange={(event) => this.props.filterLocations(event.target.value)}
            className='input'
            tabIndex='0'
          />
        </div>
        <div className='filter-wrapper'>
          <div className='filter-text'>
            <span>Filter</span>
            <i className='material-icons filter-icon'>filter_list</i>
          </div>
          <select
            onChange={(event) => this.props.filterLocationType(event.target.value)}
            className='select'
          >
            <option value='off'>off</option>
            <option value='brewery'>brewery</option>
            <option value='escape room'>escape room</option>
            <option value='museum'>museum</option>
            <option value='restaurant'>restaurant</option>
          </select>
        </div>
        <div className='list-view' id='locations-list'>
        {this.props.places.length === 0 ? (
          <div className='no-search-container'>
            <i className='material-icons icon-no-results'>mood_bad</i>
            <p className='no-search-results'>No search results were found</p>
          </div>
        ) : (
          <i className='material-icons icon-title'>place</i>
        )}
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
              <i className='material-icons'>place</i>
              <span className='list-name'>{place.name}</span>
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SideBar
