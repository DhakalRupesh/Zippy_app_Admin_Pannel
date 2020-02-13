import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Alert } from 'reactstrap'
import './Custom.css'
import axios from 'axios'

export default class Register_user extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            alert1: false,
            alert2: false,
            fname: '',
            lname: '',
            mobile: '',
            email: '',
            username: '',
            password: '',
            isRegistered: false
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

    handleRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/user/register', this.state)
        .then((response)=>{
            localStorage.setItem('token', response.data.token)
            this.setState({
                fname: '',
                lname: '',
                mobile: '',
                email: '',
                username: '',
                password: '',
                isRegistered: true,
                alert1: true
            })
        }).catch((err) => console.log(err))
    }

    render() {
        return (
            <div className = "loginContainer d-flex" Style={"height:100vh"}>
                <a href="/" className="text-right p-3"><i class="fa fa-home mr-1"></i></a>
                {/* <Alert color="success" isOpen={this.state.alert2} >Added Successfully. </Alert> */}
                <div className="text-center shadow p-3 bg-white rounded" style={{width: '22rem',margin:" auto"}}>
                    <div className="card-body">
                    <Alert color="success" isOpen={this.state.alert1} toggle={this.toogle.bind(this)}>Signup Successfully</Alert>

                        <h3 className="login-text">Zippy</h3>
                        <i>Register to continue</i>
                        <Form>
                            <FormGroup className="mt-5">
                                <Input className="form-control form-control-sm" name='fname' type='text' placeholder="Enter First Name"
                                    value={this.state.fname} onChange={this.handleChange} required autoFocus/>
                            </FormGroup>
                            <FormGroup>
                                <Input className="form-control form-control-sm" name='lname' type='text' placeholder="Enter Last Name"
                                    value={this.state.lname} onChange={this.handleChange} required/>
                            </FormGroup>
                            <FormGroup>
                                <Input className="form-control form-control-sm" name='mobile' type='text' placeholder="Enter Mobile Number"
                                    value={this.state.mobile} onChange={this.handleChange} required/>
                            </FormGroup>
                            <FormGroup>
                                <Input className="form-control form-control-sm" name='email' type='text' placeholder="Enter E-mail Address"
                                    value={this.state.email} onChange={this.handleChange} required/>
                            </FormGroup>
                            <FormGroup>
                                <Input className="form-control form-control-sm" name='username' type='text' placeholder="Enter Username"
                                    value={this.state.username} onChange={this.handleChange} required/>
                            </FormGroup>
                            <FormGroup>
                                <Input className="form-control form-control-sm" type='password' name='password' id='password' placeholder="Enter Password"
                                    value={this.state.password} onChange={this.handleChange} required/>
                            </FormGroup>
                            <Button className="btn-block btnLogin mb-2 shadow"  onClick={this.handleRegister}>Register</Button>
                            Already Registered? <a href="/ulogin" className="text-right">Log-In</a>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
