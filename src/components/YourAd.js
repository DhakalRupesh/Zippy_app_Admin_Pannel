import React, { Component } from 'react'
import { Table, Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, CustomInput } from 'reactstrap'
import Sidebar from './Sidebar'
import Nav from './SideTop'
import Axios from 'axios'
import Advertise from './Advertise'
import './Custom_css/yourad.css'
import FileUploadButton from './FileUploadButton'

export default class YourAd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isActive: false,
            delMessage: false,
            upMessage: false,
            advertise: [],
            viewDetails: false,
            detailAddInfo: {},
            isLoaded: false,
            user: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
        }
    }

    toogleUpdate() {
        this.setState({
            upMessage: !this.state.upMessage
        })
    }

    toogle() {
        this.setState({
            delMessage: !this.state.delMessage
        })
    }

    toogleModal() {
        this.setState({
            viewDetails: !this.state.viewDetails
        })
    }

    componentDidMount() {
        Axios.get(`http://localhost:3001/advertise/myAdvertise`, 
        this.state.config).then((response) => {console.log(response.data);

            this.setState({
                advertise: response.data,
                isLoaded: true
            })
        }).catch((err)=> console.log(err.response));
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
            this.setState({
                detailAddInfo: { ...this.state.detailAddInfo, ad_image: response.data.filename }
            })
        }).catch((err) => console.log(err.response))
    }

    viewDetails = (e) => {
        Axios.get(`http://localhost:3001/advertise/${e}`, this.state.config)
        .then((response) => {console.log(response.data)

            this.setState({
                detailAddInfo: response.data,
            })
        }).catch((err)=> console.log(err.response));
        this.setState({
            viewDetails: !this.state.viewDetails
        })
    }

    handleDelete = (_id) => {
        if(window.confirm('Are you sure?')){
            const filterAdvertise = this.state.advertise.filter((advertise) => {
                return advertise._id !== _id
            })
            Axios.delete(`http://localhost:3001/advertise/${_id}`, this.state.config)
            .then((response) => {
                this.setState({
                    delMessage: true,
                    advertise: filterAdvertise
                })
            })
        }
    }

    handleChange(e) {
        this.setState({
            detailAddInfo: { ...this.state.detailAddInfo, [e.target.name]: e.target.value }
        })
    }

    updateAdvertise = (e) => {
        Axios.put(`http://localhost:3001/advertise/${e}`, this.state.detailAddInfo,this.state.config)
        .then((response)=>{
            this.setState({
                upMessage: true
            })
        }).catch((err) => console.log(err.response))
        this.props.history.push('/viewAd');
    }
    
    render() {
            const reqAdvertise = this.state.reqAdvertise;
            let modalData = this.state.advertise[reqAdvertise];
            return (
                <div>
                    <Nav></Nav>
                    <Sidebar></Sidebar>
                    <div className="add_user_Main shadow-sm ">
                        <Alert color="danger" isOpen={this.state.delMessage} toggle={this.toogle.bind(this)}>Advertise had been removed...</Alert>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Posted BY</th>
                                    <th>Delivery Type</th>
                                    <th>Vehicle Needed</th>
                                    <th>Edit</th>
                                    <th>Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.advertise.map(adv=>{
                                    return <tr key={adv._id}>
                                            <td>{adv.postedby.username}</td>
                                            <td>{adv.goodstype}</td>
                                            <td>{adv.vehicleneed}</td>
                                            <td>
                                                <Button color="primary" onClick={ this.viewDetails.bind(this, adv._id) }>View & Edit</Button>
                                            </td>
          
                                            <td>
                                                <Button color="danger" onClick={  this.handleDelete.bind(this, adv._id) }>Delete</Button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                        <Modal className="modalAdv" isOpen={this.state.viewDetails} toggle={this.viewDetails.bind(this)} style={{ borderRadius: '18px' }}>
                            <ModalHeader toggle={this.viewDetails.bind(this)}>
                                Advertise Details
                            </ModalHeader>
                            <ModalBody>
                                <Container>
                                    {/* <h3 className="text-left text-warning mt-3">Your Advertise</h3
                                    <small className="font-italic">View and edit your advertise here</small>      */}
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="card mt-3 shadow">
                                                <div className="card-header h4">Advertise Summary</div>
                                                <div className="card-body">
                                                    <p className="text-center">
                                                        <img className="userimage" src={`http://localhost:3001/uploads/${this.state.detailAddInfo.ad_image}`}
                                                    alt="useadvertisephoto" style={{ height: '100%', width: '100%', borderRadius: '12px' }} /></p>
                                                    <p className="p-2"><i className="fa fa-square p-2 mr-1 i"></i>Goods Types: <span className="font-weight-bold">  { this.state.detailAddInfo.goodstype } </span></p>
                                                    <p className="p-2"><i className="fa fa-truck p-2 mr-1 i"></i>Vehicle Needed: <span className="font-weight-bold">  { this.state.detailAddInfo.vehicleneed } </span></p>
                                                    <p className="p-2"><i className="fa fa-paper-plane p-2 mr-1 i"></i>Sending From: <span className="font-weight-bold"> { this.state.detailAddInfo.sendfrom } </span></p>
                                                    <p className="p-2"><i className="fa fa-paper-plane  p-2 mr-1 i"></i>Sending To: <span className="font-weight-bold"> { this.state.detailAddInfo.destinationofdelivery } </span></p>
                                                    <p className="p-2"><i className="fa fa-money p-2 mr-1 i"></i>Delivery price: <span className="font-weight-bold"> { this.state.detailAddInfo.priceofdelivery } </span></p>
                                                    <p className="p-2"><i className="fa fa-sort-numeric-asc p-2 mr-1 i"></i>Negociable: <span className="font-weight-bold"> { this.state.detailAddInfo.negociable } </span></p>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-md"></div>
                                    <div className="col-md-6 divProfile">
                                    <div className="card mt-3 shadow">
                                    <div className="card-header h4">Edit your Advertise</div>
                                            <div className="card-body">
                                                <Alert color="success" isOpen={this.state.upMessage} toggle={this.toogleUpdate.bind(this)}>Advertise updated</Alert>
                                                <form action="" method="post" enctype="multipart/form-data">
                                                    <div className="form-group row">
                                                        <label for="goodstype" className="col-sm-3 col-form-label text-left">Goods Types</label>
                                                        <div className="col-sm-9">
                                                            <input type="text"  value={this.state.detailAddInfo.goodstype} className="form-control" 
                                                            id="goodstype" name="goodstype" onChange={(e) => this.handleChange(e)} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label for="vehicleneed" className="col-sm-3 col-form-label text-left">Vehicle Needed</label>
                                                        <div className="col-sm-9">
                                                            <input type="text"  value={this.state.detailAddInfo.vehicleneed} className="form-control" 
                                                            id="vehicleneed" name="vehicleneed" onChange={(e) => this.handleChange(e)} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label for="sendfrom" className="col-sm-3 col-form-label text-left">Sending From</label>
                                                        <div className="col-sm-9">
                                                            <input type="text"value={this.state.detailAddInfo.sendfrom } className="form-control" 
                                                            id="sendfrom" name="sendfrom" onChange={(e) => this.handleChange(e)}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label for="destinationofdelivery" className="col-sm-3 col-form-label text-left">Sending To</label>
                                                        <div className="col-sm-9">
                                                            <input type="text"  value={this.state.detailAddInfo.destinationofdelivery} className="form-control" 
                                                            id="destinationofdelivery" name="destinationofdelivery" onChange={(e) => this.handleChange(e)}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label for="priceofdelivery" className="col-sm-3 col-form-label text-left">Delivery Price</label>
                                                        <div className="col-sm-9">
                                                            <input type="number"  value={this.state.detailAddInfo.priceofdelivery} className="form-control" 
                                                            id="priceofdelivery" name="priceofdelivery" onChange={(e) => this.handleChange(e)}/>
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label for="negociable" className="col-sm-3 col-form-label text-left">Negotiable</label>
                                                        <div className="col-sm-9">
                                                            <input type="text"  value={this.state.detailAddInfo.negociable} className="form-control" 
                                                            id="negociable" name="negociable" onChange={(e) => this.handleChange(e)} />
                                                        </div>
                                                    </div>

                                                    {/* <label className="col-sm-3 col-form-label text-left">Choose Image</label> */}
                                                
                                                    <div class="form-group row">
                                                        <CustomInput type='file' id='userimage'
                                                            onChange={this.handleFileSelect} />
                                                        {this.state.selectedFile ? (<FileUploadButton
                                                            uploadFile={this.uploadFile} />) : null}
                                                    </div>

                                                    <p className="text-center">
                                                        <Button color="success" onClick={this.updateAdvertise.bind(this, this.state.detailAddInfo._id)}>Update Advertise</Button>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                </Container>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            )
                                
        }
}
