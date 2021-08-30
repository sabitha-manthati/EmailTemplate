import React from 'react';
import profile from '../Images/im2.png'
import { Row, Col } from 'reactstrap'
import { Dashboard,Layers,Equalizer,Mail,PieChart,Collections,LineWeight,Apps,List,Language } from '@material-ui/icons';



import "../App.css";




function Sidebar() {

    return (
        <div className="Sidebar m-0">

            <img src={profile} height='50px' width='50' className="image" />
            <p className="title">David william</p>

            
            
                <Col className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Art Director
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#"> Contact</a></li>
                        <li><a className="dropdown-item" href="#">logout</a></li>
                    </ul>
             </Col>
             <ul className="listitems">
             <li>
            <div class="dropdown">
              <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                aria-expanded="false" >
                <i class="fas fa-align-justify p-2"></i>DashBorads
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">DashBorad1</a></li>
                <li><a class="dropdown-item" href="#">DashBorads2</a></li>
                <li><a class="dropdown-item" href="#">DashBorads3</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="far fa-gem p-2"></i>Layouts
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Layout1</a></li>
                <li><a class="dropdown-item" href="#">Layout2</a></li>
                <li><a class="dropdown-item" href="#">Layout3</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                aria-expanded="false" >
                <i class="fas fa-chart-bar p-2"></i>Graphs
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Graph1</a></li>
                <li><a class="dropdown-item" href="#">Graph2</a></li>
                <li><a class="dropdown-item" href="#">Graphs3</a></li>
              </ul>
            </div>
          </li>
          <li> <i class="fal fa-envelope p-3"></i> Metrics</li>
          <li><i class="fas fa-chart-pie p-3"></i>MailBox</li>
          <li> <i class="fas fa-flask p-3"></i>Widgets</li>
          <li> <i class="fab fa-wpforms p-3"></i>Forms </li>
          <li> <i class="fas fa-tv p-3"></i>App Views</li>
          <li> <i class="fas fa-file-alt p-3"></i>Other pages</li>
          <li><i class="fas fa-align-justify p-3"></i> DashBorad</li>
          <li><i class="far fa-gem p-3 "></i>Layouts</li>
          <li> <i class="fas fa-chart-bar p-3"></i>Graphs</li>
          <li> <i class="fal fa-envelope p-3"></i> MailBox</li>
          <li><i class="fas fa-chart-pie p-3"></i>metrics</li>
          <li> <i class="fas fa-flask p-3"></i>Widgets</li>
          <li> <i class="fab fa-wpforms p-3"></i>Forms </li>
          <li> <i class="fas fa-tv p-3"></i>App Views</li>
          <li> <i class="fas fa-file-alt p-3"></i>Other pages</li>
                
            </ul>








        </div>
    );
}

export default Sidebar
