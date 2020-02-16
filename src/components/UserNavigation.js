import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Navbar, UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Custom_css/usernav.css'

export default class Index extends Component {

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
          axios.get('http://localhost:3001/user/retriveme', this.state.config)
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
          localStorage.removeItem('token');
          this.props.history.push('/');
        }
        
    render() {
        return (
            <div>
                <nav id="a" class="navbar navbar navbar-light bg-light navbar-expand-lg text-white navbar-fixed-top txt" style={{ minHeight: '80px' }}>
                    <Container>
                        <span className="navbar-brand"  href="/">
                            <a href="/index" className="udashtext">Zippy</a>
                        </span>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                {/* <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li> */}
                                <li class="nav-item">
                                    <a class="nav-link" href="/index">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/allAd">Advertise</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                        </div>

                        <ul className="navbar-nav ml-auto">
                            <UncontrolledDropdown nav inNavbar style={{ marginRight: '20px' }}>
                                <DropdownToggle nav caret>
                                    {this.state.user.username}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={this.goToUserdash} redirect="##">
                                    <a class="nav-link" href="/addAD"> Advertise </a>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.handleLogout}>
                                        <a class="nav-link"> Logout </a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ul>
                    </Container>
                </nav>
            </div>
        )
    }
}
