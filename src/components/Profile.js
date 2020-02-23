import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Nav from './SideTop'
import axios from 'axios'
import './Custom_css/addadvertise.css'
import './Custom_css/profile.css'
import { Container, CustomInput, Alert } from 'reactstrap'
import FileUploadButton from './FileUploadButton'



export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {},
            upMessage: false,
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
        }
    }

    toogleUpdate() {
        this.setState({
            upMessage: !this.state.upMessage
        })
    }

    componentDidMount() {
        axios.get('http://localhost:3001/user/retriveme', this.state.config)
            .then((response) => {
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
        axios.post('http://localhost:3001/uploads', data, this.state.config)
            .then((response) => {
                this.setState({
                    user: { ...this.state.user, userimage: response.data.filename }
                })
            }).catch((err) => console.log(err.response))
    }

    updateUser = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/user/updateme', this.state.user, this.state.config)
            .then((response) => {
                this.setState({ upMessage: true })
            }).catch((err) => console.log(err.response))
        this.props.history.push('/profile');
    }

    handleChange(e) {
        this.setState({
            user: { ...this.state.user, [e.target.name]: e.target.value }
        })
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <Sidebar></Sidebar>
                <div className="add_user_Main">
                    <Container>
                        <h3 className="text-left text-warning mt-3">Your Profile</h3>
                        <small className="font-italic">View and edit your profile here</small>
                        <div className="row">
                            <div class="col-md-5">
                                <div class="card mt-3 shadow">
                                    <div class="card-header h4">Profile Summary</div>
                                    <div class="card-body">
                                        <p className="text-center">
                                            <img className="circular--square userimage" src={`http://localhost:3001/uploads/${this.state.user.userimage}`}
                                                alt="userphoto" /></p>
                                        <p class="p-2"><i class="fa fa-user p-2 mr-1 i"></i>First Name: <span class="font-weight-bold"> {this.state.user.fname} </span></p>
                                        <p class="p-2"><i class="fa fa-user p-2 mr-1 i"></i>Last Name: <span class="font-weight-bold"> {this.state.user.lname} </span></p>
                                        <p class="p-2"><i class="fa fa-phone p-2 mr-1 i"></i>Mobile: <span class="font-weight-bold"> {this.state.user.mobile} </span></p>
                                        <p class="p-2"><i class="fa fa-envelope p-2 mr-1 i"></i>Email: <span class="font-weight-bold">
                                            {this.state.user.email}
                                        </span></p>
                                        <p class="p-2"><i class="fa fa-user p-2 mr-1 i"></i>Username: <span class="font-weight-bold"> {this.state.user.username} </span></p>
                                        <p class="p-2"><i class="fa fa-edit p-2 mr-1 i"></i> Description: <span class="font-weight-bold"> {this.state.user.description} </span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md"></div>
                            <div class="col-md-6 divProfile">
                                <div class="card mt-3 shadow">
                                    <div class="card-header h4">Edit your profile</div>
                                    <div class="card-body">
                                        <Alert color="success" isOpen={this.state.upMessage} toggle={this.toogleUpdate.bind(this)}>Profile updated</Alert>
                                        <form action="" method="post" enctype="multipart/form-data">
                                            <div class="form-group row">
                                                <label for="fullname" class="col-sm-3 col-form-label text-left">First Name</label>
                                                <div class="col-sm-9">
                                                    <input type="text" value={this.state.user.fname} class="form-control"
                                                        id="fname" name="fname" onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="fullname" class="col-sm-3 col-form-label text-left">Last Name</label>
                                                <div class="col-sm-9">
                                                    <input type="text" value={this.state.user.lname} class="form-control"
                                                        id="lname" name="lname" onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="fullname" class="col-sm-3 col-form-label text-left">Mobile</label>
                                                <div class="col-sm-9">
                                                    <input type="number" value={this.state.user.mobile} class="form-control"
                                                        id="phone" name="phone" onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="eamil" class="col-sm-3 col-form-label text-left">Eamil</label>
                                                <div class="col-sm-9">
                                                    <input type="text" value={this.state.user.email} class="form-control"
                                                        id="email" name="email" onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="fullname" class="col-sm-3 col-form-label text-left">Username</label>
                                                <div class="col-sm-9">
                                                    <input type="text" value={this.state.user.username} class="form-control"
                                                        id="username" name="username" onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="fullname" class="col-sm-3 col-form-label text-left">Description</label>
                                                <div class="col-sm-9">
                                                    <input type="text" value={this.state.user.description} class="form-control"
                                                        id="description" name="description" onChange={(e) => this.handleChange(e)} />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <CustomInput type='file' id='userimage'
                                                    onChange={this.handleFileSelect} />
                                                {this.state.selectedFile ? (<FileUploadButton
                                                    uploadFile={this.uploadFile} />) : null}
                                            </div>

                                            <p class="text-center">
                                                <input type="submit" class="btn btn-success px-5 ml-5 mt-2 shadow" name="Update User" onClick={this.updateUser} />
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}
