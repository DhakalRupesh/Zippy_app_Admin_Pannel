import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'

export default class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: false,
            isEdit: false,
            users: [],
            allinfo: {},
            isLoaded: false,
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
        }
    }

    toggleEdit = (e) => {
        axios.get(`http://localhost:3001/user/users/${e}`, this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    allinfo: response.data,
                })
            }).catch((err) => console.log(err.response));
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    componentDidMount() {
        axios.get('http://localhost:3001/user/users', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data,
                    isLoaded: true
                })
            }).catch((err) => console.log(err.response));
    }

    render() {
        var { isLoaded, user } = this.state;

        if (!isLoaded) {
            return <div className="txt-center"> Error!! loading the data </div>
        } else {
            return (
                <div>
                    <Nav></Nav>
                    <Container>
                        <div className="mt-5 mb-1 align-right">
                            <p className="text-right">
                                <Button className="mr-2" color="warning">Verified</Button>
                                <Button className="" color="warning">Not Verified</Button>
                            </p>
                        </div>
                        <React.Fragment>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        <th>View Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user.map((user) => {
                                            return <tr key={user._id}>
                                                <td>{user.fname}</td>
                                                <td>{user.lname}</td>
                                                <td>{user.username}</td>
                                                <td>
                                                    <Button color="primary" onClick={this.toggleEdit.bind(this, user._id)}>View</Button>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>

                            <Modal isOpen={this.state.isEdit} toggle={this.toggleEdit}>
                                <ModalHeader toggle={this.toggleEdit}>
                                    User Details
                                </ModalHeader>
                                <ModalBody>
                                    <p className="text-center">
                                        <img className="circular--square userimage" src={`http://localhost:3001/uploads/${this.state.allinfo.userimage}`} alt="userphoto" />
                                    </p>
                                    <p class="p-2"><i class="fa fa-user p-2 mr-1 i"></i>First Name: <span class="font-weight-bold"> {this.state.allinfo.fname} </span></p>
                                    <p class="p-2"><i class="fa fa-user p-2 mr-1 i"></i>Last Name: <span class="font-weight-bold"> {this.state.allinfo.lname} </span></p>
                                    <p class="p-2"><i class="fa fa-phone p-2 mr-1 i"></i>Mobile: <span class="font-weight-bold"> {this.state.allinfo.mobile} </span></p>
                                    <p class="p-2"><i class="fa fa-envelope p-2 mr-1 i"></i>Email: <span class="font-weight-bold">{this.state.allinfo.email} </span></p>
                                    <p class="p-2"><i class="fa fa-user p-2 mr-1 i"></i>Username: <span class="font-weight-bold"> {this.state.allinfo.username} </span></p>
                                    <p class="p-2"><i class="fa fa-edit p-2 mr-1 i"></i> Description: <span class="font-weight-bold"> {this.state.allinfo.description} </span></p>
                                </ModalBody>
                            </Modal>
                        </React.Fragment>
                    </Container>
                </div>
            )
        }
    }
}
