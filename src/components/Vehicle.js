import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Nav from './SideTop'
import Axios from 'axios'
import FileUploadButton from './FileUploadButton'
import { Alert } from 'reactstrap'
import './Custom_css/addadvertise.css'

export default class Vehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alert1: false,
            alert2: false,
            brandName: null,
            vehicleType: null,
            vehicle_no: null,
            user: {},
            license_no: null,
            license_Image: null,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    toogle() {
        this.setState({
            alert1: !this.state.alert1
        })
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/user/retriveme', this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    user: response.data
                })
            })
            .catch((err) => console.log(err.response));
    }

    uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('imageFile', this.state.selectedFile)
        Axios.post('http://localhost:3001/uploads', data, this.state.config)
            .then((response) => {
                this.setState({
                    license_Image: response.data.filename,
                    alert1: true,
                })
            }).catch((err) => console.log(err.response))
    }

    addVehicle = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:3001/vehicles', {
            vehicleOf: this.state.user,
            brandName: this.state.brandName,
            vehicleType: this.state.vehicleType,
            vehicle_no: this.state.vehicle_no,
            license_no: this.state.license_no,
            license_Image: this.state.license_Image,
        }, this.state.config)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    brandName: '',
                    vehicleType: '',
                    vehicle_no: '',
                    destinatiolicense_Imagenofdelivery: ''
                })
            })
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <Sidebar></Sidebar>
                <div className="add_user_Main">
                    <form>
                        <h3 className="mb-4">Vehicle Info</h3>
                        <div className="form-group">
                            <label for="brandName">Brand Name</label>
                            <input type="text" name="brandName" className="form-control" placeholder="eg: toyota, suzuki"
                                value={this.state.brandName} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label for="vehicleType">Vehicle Type</label>
                            <select className="form-control" name="vehicleType"
                                value={this.state.vehicleType} onChange={this.handleChange} required>
                                <option disabled >Please select...</option>
                                <option >4 Wheeler</option>
                                <option>2 Wheeler</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="vehicle_no">Vehicle Number</label>
                            <input type="text" name="vehicle_no" className="form-control" placeholder="eg: eg: BA.AA.0107"
                                value={this.state.vehicle_no} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label for="brandName">License Number</label>
                            <input type="number" name="license_no" className="form-control" placeholder="eg: 0123456789101"
                                value={this.state.license_no} onChange={this.handleChange} required />
                        </div>

                        <label for="brandName">Upload License Image</label>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="license_Image"
                                onChange={this.handleFileSelect} />
                            {this.state.selectedFile ? (<FileUploadButton
                                uploadFile={this.uploadFile} />) : null}
                            <label className="custom-file-label" for="customFile">Choose file</label>
                        </div>
                        <div>
                            <Alert color="success" isOpen={this.state.alert1} toggle={this.toogle.bind(this)}>Image Added Successfully. </Alert>
                            <Alert color="success" isOpen={this.state.alert2} >Added Successfully. </Alert>
                        </div>
                        <button type="submit" className="form-control btn btn-warning aligin-center mt-3" onClick={this.addVehicle}>Submit for verification</button>
                    </form>
                </div>
            </div>
        )
    }
}
