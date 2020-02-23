import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, Alert, Container, Fade } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import Axios from 'axios'

export default class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            verified: false,
            sort: false,
            imageView: false,
            vehicle: [],
            veh: {},
            vechOwner: {},
            isLoaded: false,
            licenseImage: {},
            upStatus: 'true',
            delMessage: false,
            search: '',
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            },
            vehicleId: ''
        }
    }

    toggleEdit = (e) => {
        Axios.get(`http://localhost:3001/vehicles/${e}`, this.state.config)
            .then((response) => {

                console.log(response.data.vehicleOf);

                this.setState({
                    licenseImage: response.data,
                    vechOwner: response.data.vehicleOf
                })
            }).catch((err) => console.log(err.response));
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) })
    }

    VerifyVehicle = (e) => {
        axios.put(`http://localhost:3001/vehicles/verify`, this.state.config)
            .then((response) => {
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

    verifyAd() {
        this.setState({
            verified: true
        })
    }

    toogle() {
        this.setState({
            delMessage: !this.state.delMessage
        })
    }

    licenseImage = (e) => {
        Axios.get(`http://localhost:3001/vehicles/${e}`, this.state.config)
    }

    verifyVehicle = (e) => {
        this.setState({
            veh: { ...this.state.veh, verified: "true" }
        })
        console.log(this.state.veh)
        console.log(e)
        Axios.put(`http://localhost:3001/vehicles/${e}`, this.state.veh)
            .then((response) => {
                console.log(response);
                console.log(this.state.veh)
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    deleteVerify = (e) => {
        if (window.confirm('Are you sure?')) {
            const filterVehicle = this.state.vehicle.filter((vehicle) => {
                return vehicle._id !== e
            })
            axios.delete(`http://localhost:3001/vehicles/${e}`, this.state.config)
                .then((response) => {
                    this.setState({
                        delMessage: true,
                        vehicle: filterVehicle
                    })
                })
        }
    }

    render() {
        let { isLoaded, vehicle, search } = this.state;
        let filteredLicense = vehicle.filter(vec => {
            return (
                vec.license_no.toLowerCase().indexOf(search.toLowerCase()) !== -1
            );
        });
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
                            <form>
                                <input type="text"
                                    onChange={this.handleChange.bind(this)}
                                    className="form-control mb-3" placeholder="search license number........."
                                    id="vehicleneed" name="search" />
                            </form>
                            <Alert color="danger" isOpen={this.state.delMessage} toggle={this.toogle.bind(this)}>Vehicle verificaiton removed</Alert>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Brand Name</th>
                                        <th>Vehicle Type</th>
                                        <th>Vehicle Number</th>
                                        <th>License Number</th>
                                        <th>status</th>
                                        <th>View Image</th>
                                        <th>Verify</th>
                                        <th>Remove Verification</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        filteredLicense.map((vehicle) => {
                                            return <tr key={vehicle._id}>
                                                <td>{vehicle.brandName}</td>
                                                <td>{vehicle.vehicleType}</td>
                                                <td>{vehicle.vehicle_no}</td>
                                                <td value={this.state.search} onChange={this.updateSearch.bind(this)}>{vehicle.license_no}</td>
                                                <td>{vehicle.verified}</td>
                                                <td>
                                                    <Button color="primary" onClick={this.toggleEdit.bind(this, vehicle._id)}>License Image</Button>
                                                </td>
                                                <td>
                                                    <Button className="mr-2" color="success" onClick={this.verifyVehicle.bind(this, vehicle._id)}>Verify</Button>
                                                </td>
                                                <td>
                                                    <Button color="danger" onClick={this.deleteVerify.bind(this, vehicle._id)}>Delete</Button>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>

                            <Modal isOpen={this.state.isEdit} toggle={this.toggleEdit}>
                                <ModalHeader toggle={this.toggleEdit}>
                                    More Information
                                </ModalHeader>
                                <ModalBody>
                                    <label>License Image</label>
                                    <pre></pre>
                                    <img className="userimage"
                                        src={`http://localhost:3001/uploads/${this.state.licenseImage.license_Image}`}
                                        alt="Image not available"
                                        style={{ height: '100%', width: '100%', borderRadius: '18px' }}
                                    />
                                    <label>Owners Information</label>
                                    <pre></pre>
                                    <p class="p-2"><i class="fa fa-user p-2 mr-1 i"></i>First Name: <span class="font-weight-bold"> {this.state.vechOwner.fname} </span></p>
                                    <p class="p-2"><i class="fa fa-user p-2 mr-1 i"></i>Last Name: <span class="font-weight-bold"> {this.state.vechOwner.lname} </span></p>
                                    <p class="p-2"><i class="fa fa-phone p-2 mr-1 i"></i>Mobile: <span class="font-weight-bold"> {this.state.vechOwner.mobile} </span></p>
                                    <p class="p-2"><i class="fa fa-envelope p-2 mr-1 i"></i>Email: <span class="font-weight-bold">{this.state.vechOwner.email} </span></p>
                                    <p class="p-2"><i class="fa fa-user p-2 mr-1 i"></i>Username: <span class="font-weight-bold"> {this.state.vechOwner.username} </span></p>
                                    <p class="p-2"><i class="fa fa-edit p-2 mr-1 i"></i> Description: <span class="font-weight-bold"> {this.state.vechOwner.description} </span></p>
                                </ModalBody>
                            </Modal>
                        </React.Fragment>
                    </Container>
                </div>
            )
        }
    }
}
