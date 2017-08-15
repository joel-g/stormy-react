import React, { Component } from 'react';
// import PropTypes from 'proptypes';

class Nav extends Component {
  render() {
    return(
      <nav>
      <h1 className='title'>Stormy Guerra</h1>
      <div onClick={ e =>this.props.clickHandler(e) } className='button'>
      Home
      </div>
      <div className='button'>
      About
      </div>
      <div className='button'>
      Services
      </div>
      <div className='button'>
      Contact
      </div>
      </nav>
    )
  }
}

export default Nav;
