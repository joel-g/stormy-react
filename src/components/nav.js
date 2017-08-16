import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return(
      <nav>
        <button onClick={ e =>this.props.clickHandler(e) } className='btn'>
        Home
      </button>
          <button onClick={ e =>this.props.clickHandler(e) } className='btn'>
            About
          </button>
          <button onClick={ e =>this.props.clickHandler(e) } className='btn'>
        Services
      </button>
        <button onClick={ e =>this.props.clickHandler(e) } className='btn'>
        Contact
      </button>
      </nav>
    )
  }
}


export default Nav;
