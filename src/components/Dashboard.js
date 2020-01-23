import React, { Component } from 'react'
// import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Navbar, UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import './Custom_css/login.css'
export default class Dashboard extends Component {
    render() {
        // const [dropdownOpen, setDropdownOpen] = useState(false);

        // const toggle = () => setDropdownOpen(prevState => !prevState);
        return (
          <div>
            <Navbar id="navLogoText" className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
                <a class="navbar-brand"  href="#">
                    {/* <img class="img-Logo" src={require('./CssImages/zippy_logo_trans.png')} alt="logoofzippy"/>  */}
                    <a href="" className="dashtext">Zippy</a>
                </a>
               
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseDIv" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapseDIv">
                    {/* <!-- Left Side Of Navbar --> */}
                    <div class="nav text-center collapse navbar-collapse font-weight-bold" id="collapseDIv">
                        <ul class="navbar-nav" id="menuS">
                        <li class="nav-item"><a href=""  class="nav-link icon home"> <p class="iconP">Home</p></a></li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Right Side Of Navbar --> */}
                <ul class="navbar-nav ml-auto">
                  <UncontrolledDropdown nav inNavbar style={{ marginRight: '20px' }}>
                    <DropdownToggle nav caret>
                      Username
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Profile
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ul>
            </Navbar> 

          <h6 className="mb-3 mt-3 text-muted text-center"> Admin Dashboard </h6>

          <Container>
            <Row>
              <a class="col-lg-3 col-md-4 ml-5 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls" href="" style={{ width: '22rem' }}>
                <h4 class="text-center"><img src="" alt="sportlogo"/></h4>
                <h4 className="text-center">Members</h4>
                <p className="text-center"><small>Add & Delete Admin</small></p>
              </a>
              <a class="col-lg-1 col-md-4"></a>
              <a class="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls" href="" style={{ width: '22rem' }}>
                  <h4 class="text-center"><img src="" alt="sportlogo"/></h4>
                  <h4 class="text-center">Property</h4>
                  <p class="text-center"><small>Verify & Approve</small></p>              
              </a>
              <a class="col-lg-1 col-md-4"></a>
              <a class="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls" href="" style={{ width: '22rem' }}>
                  <h4 class="text-center"><img src="" alt="sportlogo"/></h4>
                  <h4 class="text-center">Admin</h4>
                  <p class="text-center"><small>Queries</small></p>              
              </a>
            </Row>
          </Container>
        </div>
        )
    }
}
