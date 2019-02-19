import React, {Component} from 'react'


class SideBar extends Component {

  render() {

    return(
      <div className='side-container'>
        <h1>Dusseldorf Locations</h1>
        <div className="search-input-wrapper">
          <input type="text" placeholder="Type in location name" />
          <button>Filter</button>
        </div>
        <div className='list-view'>
          <ol className='location-grid'>
          {this.props.places.map((place) => (
            <li key={place.id} className='list-item'>
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
