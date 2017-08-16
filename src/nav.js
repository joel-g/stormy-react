import React, { Component } from 'react';
// import PropTypes from 'proptypes';

class Nav extends Component {
  render() {
    return(
      <nav>
      <h1 className='stormy'>Stormy Guerra</h1>
      <div onClick={ e =>this.props.clickHandler(e) } className='button'>
      Home
      </div>
      <div onClick={ e =>this.props.clickHandler(e) } className='button'>
      About
      </div>
      <div onClick={ e =>this.props.clickHandler(e) } className='button'>
      Services
      </div>
      <div onClick={ e =>this.props.clickHandler(e) } className='button'>
      Contact
      </div>
      </nav>
    )
  }
}

export default Nav;
