import React, { Component } from 'react';
import { default as Fade } from 'react-fade';
import Form  from './Form';
import $ from 'jquery';


class Contact extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: 'Form',
      userMessage: '',
      showForm: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    $.ajax({
        context: this,
        url: "https://formspree.io/stormyguerra1@gmail.com",
        method: "POST",
        data: $('.contact-form').serialize(),
        dataType: "json"
    }).done(function(r){
      $('.form-message').css('color', 'black')
      this.setState({
        userMessage: "Your message has been sent. Stormy responds to inquiries within 24 hours.",
        showForm: false
       })
    }).fail(function(r){
      $('.form-message').css('color', 'red')
      this.setState({ userMessage: "Please enter a valid email address."})
    });
  }

  render() {
    let form;
    if (this.state.showForm){
      form = <Form handleSubmit={this.handleSubmit} />
    } else { form = '' }
    return (
      <Fade duration={0.5}>
      <div className='content'>
        <h1 className='page-header'>Contact Me</h1>
        <div className='form-message'>
          {this.state.userMessage}
        </div>
        {form}
      </div>
     </Fade>
    )
  }
}

export default Contact
