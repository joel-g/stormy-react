import React, { Component } from 'react';
import { default as Fade } from 'react-fade';
import $ from 'jquery';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: 'Form',
      formMessage: 'How can I help?',
      errorMessage: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/joelaguerra1@gmail.com",
        method: "POST",
        data: $('.contact-form').serialize(),
        dataType: "json"
    }).done(function(response){
      console.log('success', response)
    }).fail(function(response){
      console.log('error', response)
    });
  }

  handleChange(e) {
      console.log(this)
      this.setState({formMessage: e.target.value});
    };

  render() {



    return (
      <Fade duration={0.5}>
      <div className='content'>
        <h1 className='page-header'>Contact Me</h1>
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
      </div>
     </Fade>
    )
  }
}

export default Contact
