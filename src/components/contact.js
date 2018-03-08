import React from 'react';
import Iframe from 'react-iframe';

// Images
import images from './images';

const contactImg = images.contact;

const Contact = () => {
  return (
    <div className="contact" style={{
        backgroundImage: "url(" + contactImg + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      <div className="overlay">
      <h1>Contact</h1>
      <div id="contact" className="contact-container container">
        <div className="contact-info">
          <h1>Restuarant Hours:</h1>
          <br />
            <p>Mon - Thurs: 11: 00 AM - 10:45 PM</p>
            <p>Fri - Sat: 11:00 AM - 11:30 PM</p>
            <p>Sun: 12:00 PM - 10:45 PM</p>
            <br />
          <h1>Telephone:</h1>
          <br />
            <p>(718) 282-3688</p>
            <p>(718) 282-3699</p>
            <p>(917) 551-0293</p>
            <p>(212) 361-9836</p>
        </div>
        <div className="contact-location">
          <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12107.156064623572!2d-73.9504046!3d40.656581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbcd41b347b75179f!2sKing+Wok!5e0!3m2!1sen!2sus!4v1520522939392"
            width="100%"
            height="450px"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact;
