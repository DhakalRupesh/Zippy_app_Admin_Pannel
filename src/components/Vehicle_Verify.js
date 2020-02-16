import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from  './Nav'

export default class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alert1: false,
            verified:false,
            sort: false,
            imageView: false,
            vehicle: [],
            isLoaded: false,
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            },
            vehicleId:''
        }
    }

    toggleEdit = (e) => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    VerifyVehicle = (e) => {
        axios.put(`http://localhost:3001/vehicles/verify`, this.state.config)
        .then((response)=>{
            this.setState({
                verified: response.data
            })
        }).catch((err) => console.log(err.response));
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

    verifyAd(){
        this.setState({
            verified:true
        })
    }

    toogle() {
        this.setState({
            alert1: !this.state.alert1
        })
    }

    verifyVehicle(vehicleId) {
        // axios.put(`http://localhost:3001/vehicles/{$vehicleId}/verify`, this.state.config)
        // .then((response) => {
            // this.setState({
            //     verified:this.state.verified
            // })
        // })
      
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
                                        <th>status</th>
                                        <th>View Image</th>
                                        <th>Verifiaction</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        {
                                            vehicle.map((vehicle) => {
                                                return <tr key={vehicle._id}>
                                                    <td>{vehicle.brandName}</td>
                                                    <td>{vehicle.vehicleType}</td>
                                                    <td>{vehicle.vehicle_no}</td>
                                                    <td>{vehicle.license_no}</td>
                                                    <td>{vehicle.verified}</td>
                                                    <td>  
                                                         <Link onClick={this.toggleEdit}>View image</Link>
                                                    </td>
                                                    <td><Link onClick={this.verifyVehicle()}>Verify</Link></td>
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
