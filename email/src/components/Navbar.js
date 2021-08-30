import React from 'react'
import "../App.css";
import  {Row,Col} from 'reactstrap'
import {AppBar,Toolbar,IconButton,Typography,InputBase,MenuItem,Menu} from '@material-ui/core'



function Navbar() {
    return (
        <div className="Navbar m-0 p-0">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><span class="navbar-toggler-icon"
                ></span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <input type="search" id="form1" class="form-control  d-inline" placeholder="enetr something here"/>
                </li>
                <li className="nav-item-ms-5" id="txt">
                  <p> Welcome to INSPINIA+ Admin Theme.</p>

                </li>
                <li className="nav-item ms-2 me-3"><i class="fas fa-envelope"><span
                     className="badge  badge-notification bg-warning">16</span></i></li>

                <li className="nav-item ms-2 me-3"><i class="fas fa-bell"><span
                      className="badge  badge-notification bg-success">8</span></i></li>
                <li className="nav-item ms-2 me-3"><i className="fas fa-sign-out-alt"></i></li>

              </ul>


            </div>
          </div>
        </nav>
           
        </div>
            )
}
            export default Navbar
