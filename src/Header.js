import React, {Component} from 'react'

class Header extends Component {

  render() {

    return(
      <div className='header-container'>
        <header className='header'>
          <i
           onClick={() => {this.props.toggleSideBar()}}
           className='material-icons menu-icon'
           role='button'
           name='Toggle sidebar' >{this.props.menuIcon}</i>
          <h1 className='title'>Düsseldorf Places</h1>
        </header>
      </div>
    )
  }
}

export default Header
