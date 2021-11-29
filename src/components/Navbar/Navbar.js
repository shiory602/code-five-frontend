import React, { Component } from "react";
import logo from "../logowhite.png";
import avatar from "../avatar.png";
import { MenuItems } from "./MenuItems";
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                    <h1 className="navbar-logo"><img src={logo} alt="Logo" className="logo"/></h1>
                    
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                    </div>

                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                 
                                    <div id="icon">{item.icon}</div>
                                    <div id="title">{item.title}</div> 
                                    </a>
                                </li>
                            )
                        })}
                        
                    </ul>
                    <h2 className="navbar-avatar"><img src={avatar} alt="Avatar" className="avatar"/> <h3>User</h3></h2>
            </nav>
        )
    }
  }

  export default Navbar;