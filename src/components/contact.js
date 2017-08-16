import React from 'react';
// import PropTypes from 'proptypes';

function Contact() {
  return (
    <div className='content'>
      <form className='contact-form' action='' method='POST'>
      <input type='text' placeholder='Business name'></input>
      <select>
        <option defaultValue="unspecified" disabled selected>Business type:</option>
        <option value="retail">Retail</option>
        <option value="medical">Medical</option>
        <option value="producer">Producer</option>
        <option value="processor">Processor</option>
      </select><br />
      <input type='text' placeholder='City' name='city'></input>
      <input type='text' placeholder='State' name='state'></input><br />
      <input type='text' placeholder='Contact person' name='contact'></input>
      <input type='text' placeholder='Contact person title' name='title'></input><br />
      <button type='submit'>Submit</button>
      </form>
      <p>This doesn't work yet.</p>
    </div>
  )
}

export default Contact