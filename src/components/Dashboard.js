import React, { Component } from 'react'
import axios from 'axios' 
import { Container, Row, Col } from 'reactstrap'
import { Navbar, UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Custom_css/dashboard.css'

export default class Dashboard extends Component {

      constructor(props) {
        super(props)

        this.state = {
            user: {},
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
        }
    }

    componentDidMount(){
      axios.get('http://localhost:3001/aduser/retriveme', this.state.config)
        .then((response) => {
          console.log(response.data)
          this.setState({
              user: response.data
        })
    })
    .catch((err) => console.log(err.response));
    }

    handleLogout = (e) => {
      e.preventDefault();
      this.props.history.push('/')
      localStorage.removeItem('token');
    }

    render() {
        return (
          <div className="dashboard_container">
            <Navbar id="navLogoText" className="navbar navbar navbar-dark bg-dark navbar-expand-lg text-white navbar-fixed-top txt">
                <Container>
                  <a class="navbar-brand"  href="/dashboard">
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
                          <li class="nav-item"><Link to="/dashboard"  class="nav-link icon home"> <p class="iconP">Home</p></Link></li>
                          </ul>
                      </div>
                  </div>

                  {/* <!-- Right Side Of Navbar --> */}
                  <ul class="navbar-nav ml-auto">
                    <UncontrolledDropdown nav inNavbar style={{ marginRight: '20px' }}>
                      <DropdownToggle nav caret>
                        {this.state.user.username}
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={this.handleAdminProfile}>
                          Profile
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={this.handleLogout}>
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </ul>
                </Container>
            </Navbar> 

          <h6 className="mb-3 mt-3 text-muted text-center"> Admin Dashboard </h6>

          <Container className="dashboard_btn_container">
            <Row>
              <Link class="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls nounderline" to="/members" style={{ width: '22rem' }}>
                <h4 class="text-center"><img src={require('./CssImages/membersm.png')} alt="sportlogo"/></h4>
                <h4 className="text-center">Members</h4>
                <p className="text-center"><small>View Members info</small></p>
              </Link>
              <Link class="col-lg-1 col-md-4"></Link>
              <Link class="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls" to="/riderverify" style={{ width: '22rem' }}>
                  <h4 class="text-center"><img src={require('./CssImages/driverSm.png')} alt="sportlogo"/></h4>
                  <h4 class="text-center">Vehicle</h4>
                  <p class="text-center"><small>Verify & Approve</small></p>              
              </Link>
              <Link class="col-lg-1 col-md-4"></Link>
              <Link class="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls" to="/registeradmin" style={{ width: '22rem' }}>
                  <h4 class="text-center"><img src={require('./CssImages/adminsm.png')} alt="sportlogo"/></h4>
                  <h4 class="text-center">Admin</h4>
                  <p class="text-center"><small>Register new admin</small></p>              
              </Link>
            </Row>

            <Row>
              <Link class="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls" to="" style={{ width: '22rem' }}>
                <h4 class="text-center"><img src={require('./CssImages/driverSm.png')} alt="sportlogo"/></h4>
                <h4 className="text-center">Riders</h4>
                <p className="text-center"><small>View & Disable</small></p>
              </Link>
            </Row>
          </Container>
        </div>
        )
    }
}
