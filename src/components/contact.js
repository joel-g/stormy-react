import React, { Component } from 'react';
import { default as Fade } from 'react-fade';
import Form  from './Form';
import $ from 'jquery';


class Contact extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: 'Form',
      errorMessage: ''
    }
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



  render() {
    return (
      <Fade duration={0.5}>
      <div className='content'>
        <h1 className='page-header'>Contact Me</h1>
        <Form handleSubmit={this.handleSubmit} />
      </div>
     </Fade>
    )
  }
}

export default Contact
