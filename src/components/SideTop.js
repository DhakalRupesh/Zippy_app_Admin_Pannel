import React, { Component } from 'react'
import axios from 'axios'
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'

class SideTop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
        }
    }

    componentDidMount() {
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

                            <ul className="navbar-nav ml-auto">
                                <UncontrolledDropdown nav inNavbar style={{ marginRight: '20px' }}>
                                    <DropdownToggle nav caret>
                                        {this.state.user.username}
                                    </DropdownToggle>
                                    <DropdownMenu right>
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
export default withRouter(SideTop)
