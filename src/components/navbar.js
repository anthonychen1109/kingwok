import React, { Component } from 'react';
import $ from 'jquery';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.dropDownMenu = this.dropDownMenu.bind(this);
  }

  goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'fast');
  }

  dropDownMenu() {
    let x = document.getElementById("topnav");
    if (x.className == "navbar") {
      x.className = "responsive";
    } else {
      x.className = "navbar"
    }
  }

  render() {
    return (
      <div id="topnav" className="navbar">
        <ul>
          <li onClick={() => this.goToByScroll('about')}>About</li>
          <li>Order Online</li>
          <li onClick={() => this.goToByScroll('contact')}>Contact</li>
          <li className="dropDownIcon" onClick={this.dropDownMenu}><i className="fas fa-align-justify"></i></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
