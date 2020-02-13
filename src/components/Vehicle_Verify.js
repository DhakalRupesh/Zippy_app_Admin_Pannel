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

    componentDidMount() {
        axios.get('http://localhost:3001/vehicles', this.state.config)
        .then((response) => {
            this.setState({
                vehicle: response.data,
                isLoaded: true
            })
        }).catch((err) => console.log(err.response));
    }

    render() {
        var{ isLoaded, vehicle } = this.state;
 
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
                                        <th>Brand Name</th>
                                        <th>Vehicle Type</th>
                                        <th>Vehicle Number</th>
                                        <th>License Number</th>
                                        <th>View Image</th>
                                        <th>Verifiaction</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        {
                                            vehicle.map((vehicle) => {
                                                return <tr key={vehicle}>
                                                    <td>{vehicle.brandName}</td>
                                                    <td>{vehicle.vehicleType}</td>
                                                    <td>{vehicle.vehicle_no}</td>
                                                    <td>{vehicle.license_no}</td>
                                                    <td>  
                                                         <Link onClick={this.toggleEdit}>View image</Link>
                                                    </td>
                                                    <td><Link>Verify </Link></td>
                                                </tr>
                                            })
                                        }
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
}
