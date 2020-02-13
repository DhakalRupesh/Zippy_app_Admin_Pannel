import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Nav from './SideTop'
import FileUploadButton from './FileUploadButton'
import './Custom_css/addadvertise.css'

export default class Vehicle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
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
                            value={this.state.brandName} onChange={this.handleChange} required/>
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
                            value={this.state.vehicle_no} onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label for="brandName">Brand Name</label>
                            <input type="text" name="license_no" className="form-control" placeholder="eg: 0123456789101" 
                            value={this.state.license_no} onChange={this.handleChange} required/>
                        </div>

                        <label for="brandName">Upload License Image</label>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="image"
                                onChange={this.handleFileSelect}/>
                                {this.state.selectedFile ? (<FileUploadButton
                                uploadFile={this.uploadFile} />) : null}
                            <label className="custom-file-label" for="customFile">Choose file</label>
                        </div>
                        <button type="submit" className="form-control btn btn-warning aligin-center mt-3" onClick={this.addAdvertisement}>Submit for verification</button>
                    </form>
                </div>
            </div>
        )
    }
}
