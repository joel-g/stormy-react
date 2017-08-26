import React from 'react';
import './App.css';

function Form() {
  return (
    <form onSubmit={this.handleSubmit} className='contact-form' action='https://formspree.io/joelaguerra1@gmail.com' method='POST'>
      <input type='text' placeholder='Your name' name='person' />
      <input type='text' placeholder='Title' name='title' /><br />
      <input type='text' placeholder='Email' name='_replyto' />
      <input type='text' placeholder='Phone #' name='phone' /><br />
      <input type='text' placeholder='Business name' name='business' />
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
      <input type="hidden" name="_format" value="plain" />
      <textarea value={this.state.formMessage} onChange={this.handleChange} className='message' name='message' />
      <br />
      <button type='submit' className='btn'>Submit</button>
    </form>
  )
}

export default Form;
