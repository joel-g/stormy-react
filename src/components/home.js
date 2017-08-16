import React from 'react';
import { default as Fade } from 'react-fade'

function Home() {
  return (
    <Fade duration='0.5'>
      <div>
        <div className='home-image'>
          <h1>Grow your product.</h1>
          <h1>Grow your brand.</h1>
          <h1>Grow your profits.</h1>
        </div>
      <div className='business'>
        <h1 className='header'>Grow your business.</h1>
        <h3>I can help.</h3>
      </div>
      </div>
  </Fade>
  )
}

export default Home;
