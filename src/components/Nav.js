import React, { Component } from 'react'
import { Container} from 'reactstrap'
import axios from 'axios' 
import { Navbar, UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
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
          // console.log(response.data)
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
            <div>
            <Navbar id="navLogoText" className="navbar navbar navbar-dark bg-dark navbar-expand-lg text-white navbar-fixed-top txt">
                <Container>
                  <span className="navbar-brand"  href="/dashboard">
                      {/* <img class="img-Logo" src={require('./CssImages/zippy_logo_trans.png')} alt="logoofzippy"/>  */}
                      <a href="/dashboard" className="dashtext">Zippy</a>
                  </span>
                
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseDIv" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapseDIv">
                      {/* <!-- Left Side Of Navbar --> */}
                      <div className="nav text-center collapse navbar-collapse font-weight-bold" id="collapseDIv">
                          <ul className="navbar-nav" id="menuS">
                          <li className="nav-item"><Link to="/dashboard"  className="nav-link icon home"> <p className="iconP">Home</p></Link></li>
                          </ul>
                      </div>
                  </div>

                  {/* <!-- Right Side Of Navbar --> */}
                  <ul className="navbar-nav ml-auto">
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
            </div>
        )
    }
}

