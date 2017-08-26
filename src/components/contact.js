import React from 'react';
import { default as Fade } from 'react-fade'

function Contact() {
  return (
    <Fade duration={0.5}>
    <div className='content'>
      <h1 className='page-header'>Contact Me</h1>
      <form className='contact-form' action='https://formspree.io/stormyguerra@gmail.com' method='POST'>
      <input type='text' placeholder='Your name' name='person' />
      <input type='text' placeholder='Title' name='title' /><br />
      <input type='text' placeholder='Email' name='_replyto' />
      <input type='text' placeholder='Phone #' name='phone' /><br />
      <input type='text' placeholder='Business name' name='business'></input>
      <select className='dropdown'>
        <option  defaultValue="unspecified" name='business-type'>Business type:</option>
        <option value="retail">Retail</option>
        <option value="medical">Medical</option>
        <option value="producer">Producer</option>
        <option value="processor">Processor</option>
      </select><br />
      <input type='text' placeholder='City' name='city'></input>
      <input type='text' placeholder='State' name='state'></input><br />
      <input type="hidden" name="_next" value="http://stormyguerra.com" />
      <input type="hidden" name="_subject" value="Stormguerra.com" />
      <textarea className='message' name='message'>
        How can I help?
      </textarea><br />
      <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
   </Fade>
  )
}

export default Contact
