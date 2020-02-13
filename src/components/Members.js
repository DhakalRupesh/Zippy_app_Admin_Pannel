import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from  './Nav'

export default class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: false,
            isEdit: false,
            users: [],
            isLoaded: false,
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
        }
    }

    toggleEdit = (e) => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    // handleTaskChange = (e) => {
    //     this.setState({
    //         taskName: e.target.value,
    //     })
    // }

    // handleDoneChange = (e) => {
    //     this.setState({
    //         taskDone: e.target.checked
    //     })
    // }
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
        var{ isLoaded, user } = this.state;
 
        if(!isLoaded) {
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
                        <Table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th>View Details</th>
                                    {/* <th>Sort</th> */}
                                </tr>
                            </thead>
                                <tbody>
                                    {
                                        user.map((user)=>{
                                        return <tr key={user._id}>
                                                <td>{user.fname}</td>
                                                <td>{user.lname}</td>
                                                <td>{user.username}</td>
                                                <td>
                                                    <Link onClick={this.toggleEdit}>View</Link>
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
                                
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" >Do Something</Button>{' '}
                                    <Button color="secondary" >Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </React.Fragment>
                    </Container>
                </div>
            )
        }
    }
}
