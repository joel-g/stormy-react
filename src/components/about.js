import React from 'react';
import { default as Fade } from 'react-fade'

function About() {
  return (
    <Fade duration={0.5}>
    <div className='content about'>
      <h1 className='page-header'>About Stormy Guerra</h1>
      <p className='l'>{"Stormy Guerra has 10 years of business development experiemce in the marijuana industry and has helped build many successful collective gardens, grow operations and retail stores"}.</p>
      <p className='l'>{"Stormy can help you launch a business from the ground up, turn around a struggling business or turn an already successful business into an extremely successful business."}</p>
      <p className='l'>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non mollis risus. Mauris auctor vel justo vitae mattis. Nunc cursus laoreet est in porttitor. Aenean facilisis vitae erat ac auctor. Praesent commodo metus at porttitor gravida. In varius odio nulla, ultrices elementum felis vulputate ac."}</p>
    </div>
  </Fade>
  )
}

export default About;
