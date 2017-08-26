import React from 'react';
import { default as Fade } from 'react-fade'

function Contact() {
  return (
    <Fade duration={0.5}>
    <div className='content'>
      <h1 className='page-header'>Contact Me</h1>
      <form className='contact-form' action='https://formspree.io/joelaguerra1@gmail.com' method='POST'>
      <input type='text' placeholder='Your name' name='person'></input>
      <input type='text' placeholder='Title' name='title'></input><br />
      <input type='text' placeholder='Business name' name='business'></input>
      <select>
        <option defaultValue="unspecified" name='business-type'>Business type:</option>
        <option value="retail">Retail</option>
        <option value="medical">Medical</option>
        <option value="producer">Producer</option>
        <option value="processor">Processor</option>
      </select><br />
      <input type='text' placeholder='City' name='city'></input>
      <input type='text' placeholder='State' name='state'></input><br />
      <button type='submit'>Submit</button>
      </form>
      <p>{"This doesn't work yet."}</p>
    </div>
   </Fade>
  )
}

export default Contact
