import React, { Component } from 'react'




class Navigation extends Component {
    
    render () {
        return (
            <>
            <nav className="N/A transparent">
            <div className="nav-wrapper">              
              <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#!">ABOUT</a></li>
                <li><a href="#!">SKILLS</a></li>
                <li><a href="#!">PROJECTS</a></li>
                <li><a href="#!">CONTACT INFO</a></li>
              </ul>
            </div>
          </nav>
        
          <ul className="sidenav" id="mobile-demo">
                <li><a href="#!">CHRIS VIOLANTE</a></li> 
                <li><a href="#!">ABOUT</a></li>
                <li><a href="#!">SKILLS</a></li>
                <li><a href="#!">PROJECTS</a></li>
                <li><a href="#!">CONTACT INFO</a></li>
          </ul>
          </>
        )
    }
}

export default Navigation