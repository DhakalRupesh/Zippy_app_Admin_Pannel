import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Alert } from 'reactstrap'
// import { Link, Redirect } from 'react-router-dom'
import './Custom.css'
import axios from 'axios'

export default class Register_Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

    handleRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/aduser/register', this.state)
        .then((response)=>{
            localStorage.setItem('token', response.data.token)
            this.setState({
                fname: '',
                lname: '',
                mobile: '',
                email: '',
                username: '',
                password: '',
                isRegistered: true
            })
        }).catch((err) => console.log(err))
    }

    render() {
        if (this.state.isRegistered === true){
          return  <Alert color="success">
                New admin successfully added
            </Alert>
            
        }
        return (
            <div className = "loginContainer d-flex" Style={"height:100vh"}>
            <div className="text-center shadow p-3 bg-white rounded" style={{width: '22rem',margin:" auto"}}>
                    <div className="card-body">
                        <h3 className="login-text">Zippy</h3>
                        <i>Register a new admin</i>
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
                            <Button className="btn-block btnLogin"  onClick={this.handleRegister}>Register</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
