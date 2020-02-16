import React, { Component } from 'react'
import axios from 'axios' 
import { Container, UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class SideTop extends Component {
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
          this.props.history.push('/ulogin')
        }

    render() {
        return (
            <div>
            <nav id="a" class="navbar navbar navbar-light bg-light navbar-expand-lg text-white navbar-fixed-top txt" style={{ minHeight: '80px' }}>
                    <Container>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Advertise</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                            </ul>

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
                        </div>
                    </Container>
                </nav>
            </div>
        )
    }
}
