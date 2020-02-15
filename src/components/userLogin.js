import React, { Component } from 'react'
import { Form, FormGroup, Input, Button, Alert, Toast, ToastHeader, ToastBody} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import './Custom.css'
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            usernameErr: '',
            passwordErr: '',
            alertMismatch: '',
            isLoggedIn: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    toogle() {
        this.setState({
            alertMismatch: !this.state.alertMismatch
        })
    }

    handleClick = (e) => {
        console.log(this.state.username);
        e.preventDefault();
        const isEmpty = this.checkEmpty();
        if(isEmpty) {
            if(axios.post('http://localhost:3001/user/login', !this.state)){
                this.setState({
                    alertMismatch: true
                })
            }
            axios.post('http://localhost:3001/user/login', this.state)
            .then((response) => {
                localStorage.setItem('token', response.data.token);

                this.setState({
                    username: '',
                    password: '',
                    isLoggedIn: true   
                })

            }).catch((err) => console.log(err.response.data))
        } 
    }

    checkEmpty = () => {
        let usernameErr = '';
        let passwordErr = '';

        if(!this.state.username) {
            usernameErr = "username is required";
        }

        if(!this.state.password) {
            passwordErr = "password is required"
        }

        if (usernameErr || passwordErr) {
            this.setState({ usernameErr, passwordErr });
            return false;
        }
        return true;
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to='/addAd' />
        } 
        return (
            <div>
                <div className = "loginContainer d-flex" Style={"height:100vh"}>
                    <a href="/" className="p-3"><i class="fa fa-home" aria-hidden="true">Home</i></a>
                    <div className="text-center shadow p-3 bg-white rounded " style={{width: '22rem',margin:" auto"}}>
                    <Alert color="danger" isOpen={this.state.alertMismatch} toggle={this.toogle.bind(this)}>Invalid username or password</Alert>
                        <div className="card-body">
                            <h3 className="login-text">Zippy</h3>
                            <img className="login_user_image" src={require('./CssImages/user3.png')} alt="userlogo"/>
                            <Form>
                                <FormGroup className="mt-4">
                                    <Input className="form-control" name='username' id='username' type='text' placeholder="Enter Username"
                                        value={this.state.username} onChange={this.handleChange} required autoFocus/>
                                    <small className="text-danger">{this.state.usernameErr}</small>
                                </FormGroup>
                                <FormGroup>
                                    <Input type='password' name='password' id='password' placeholder="Enter Password"
                                        value={this.state.password} onChange={this.handleChange} required/>
                                    <small className="text-danger"> {this.state.passwordErr} </small>
                                </FormGroup>
                                <Button className="btn-block btnLogin mb-2 shadow"  onClick={this.handleClick}>Login</Button>
                            </Form>
                            Dont have an account? <a href="/uRegister" className="text-right">Sign-Up</a>
                        </div>
                        <a href="/login" className="text-right p-3">Login as Admin</a>
                    </div>
                    <a href="/" className="p-3 text-light"><i class="fa fa-home" aria-hidden="true">Home</i></a>
                </div>
            </div>          
        )
    }
}
