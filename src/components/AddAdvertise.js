import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Nav from './SideTop'
import Axios from 'axios'
import './Custom_css/addadvertise.css'
import FileUploadButton from './FileUploadButton'
import { Alert, CustomInput, Container } from 'reactstrap'


export default class AddAdvertise extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alert1: false,
            alert2: false,
            goodstype: null,
            vehicleneed: null,
            sendfrom: null,
            destinationofdelivery: null,
            priceofdelivery: null,
            negociable: null,
            selectedFile: null,
            ad_image: null,
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

    toogle() {
        this.setState({
            alert1: !this.state.alert1
        })
    }

    toogleSuccess() {
        this.setState({
            alert2: !this.state.alert2
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

    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('imageFile', this.state.selectedFile)
        Axios.post('http://localhost:3001/uploads', data, this.state.config)
            .then((response) => {
                console.log(response.data.filename);
                this.setState({
                    image: response.data.filename,
                    alert1: true,
                })
            }).catch((err) => console.log(err.response))
    }

    addAdvertisement = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:3001/advertise', {
            postedby: this.state.user._id,
            goodstype: this.state.goodstype,
            vehicleneed: this.state.vehicleneed,
            sendfrom: this.state.sendfrom,
            destinationofdelivery: this.state.destinationofdelivery,
            priceofdelivery: this.state.priceofdelivery,
            negociable: this.state.negociable,
            ad_image: this.state.image,
        }, this.state.config)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    goodstype: '',
                    vehicleneed: '',
                    sendfrom: '',
                    destinationofdelivery: '',
                    priceofdelivery: '',
                    negociable: '',
                    ad_image: '',
                    alert2: true
                })
            })
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <Sidebar></Sidebar>
                <div className="add_user_Main shadow-sm ">
                    <h3 className="mb-4">Request Dilevery</h3>

                    <form>
                        <Alert color="success" isOpen={this.state.alert1} toggle={this.toogle.bind(this)}>Image Added</Alert>
                        <Alert color="success" isOpen={this.state.alert2} toggle={this.toogleSuccess.bind(this)}> Advertise Added </Alert>
                        <div className="form-group">
                            <label for="typesofdilevery">Type of dilevery</label>
                            <input type="text" name="goodstype" className="form-control" placeholder="eg: room shift, docs, furniture"
                                value={this.state.goodstype} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label for="vehicleneeded">Vehicle Needed</label>
                            <select className="form-control" name="vehicleneed"
                                value={this.state.vehicleneed} onChange={this.handleChange} required>
                                <option >Please select...</option>
                                <option >4 Wheeler</option>
                                <option>2 Wheeler</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="sendingLocation">Sending from</label>
                            <input type="text" name="sendfrom" className="form-control" placeholder="eg: Kathmandu"
                                value={this.state.sendfrom} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label for="sendiingtolocation">Sending to</label>
                            <input type="text" name="destinationofdelivery" className="form-control" placeholder="eg: Pokhara"
                                value={this.state.destinationofdelivery} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label for="setprice">Set Price</label>
                            <input type="number" name="priceofdelivery" className="form-control" placeholder="eg: RS 1500"
                                value={this.state.priceofdelivery} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label for="inputState">Negotiable</label>
                            <select id="negotiable" name="negociable" className="form-control"
                                value={this.state.negociable} onChange={this.handleChange} required >
                                <option>Please select...</option>
                                <option >Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        <label>select image</label>
                        <div className="form-group row">
                            <CustomInput type='file' id='userimage'
                                onChange={this.handleFileSelect} />
                            {this.state.selectedFile ? (<FileUploadButton
                                uploadFile={this.uploadFile} />) : null}
                        </div>

                        <button type="submit" className="form-control btn btn-warning aligin-center mt-3" onClick={this.addAdvertisement}>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}
