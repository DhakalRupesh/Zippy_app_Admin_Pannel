import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from  './Nav'
import UserList from './UserList'

export default class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sort: false,
            imageView: false,
            vehicle: [],
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

    render() {
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
                                        <th>Brand Name</th>
                                        <th>Vehicle Type</th>
                                        <th>Vehicle Number</th>
                                        <th>License Number</th>
                                        <th>View Image</th>
                                        <th>Verifiaction</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                        </tr>
                                    </tbody>
                               </Table>

                            <Modal isOpen={this.state.isEdit} toggle={this.toggleEdit}>
                                <ModalHeader toggle={this.toggleEdit}>
                                    Vehicle Image
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
