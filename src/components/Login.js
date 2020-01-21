import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Container, FormText } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import './Custom.css'
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isLoggedIn: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/aduser/loginadmin')
            .then((response) => {
                console.log(response)
                localStorage.setItem('token', response.data.token)

                this.setState({
                    username: '',
                    password: '',
                    isLoggedIn: true
                    
                })

            }).catch((err) => console.log(err.response.data))
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div className = "container-fluid loginContainer">
                <div className="text-center shadow p-3 bg-white rounded centered" style={{width: '20rem', height: '20rem'}}>
                    <div className="card-body">
                        <h3>Login</h3>
                        <img class="login_user_image" src="./CssImages/user1.png" alt="userlogo"/>
                        <Form>
                            <FormGroup className="mt-5">
                                <Input className="form-control" name='username' id='username' type='text' placeholder="Enter Username"
                                    value={this.state.username} onChange={this.handleChange} required autoFocus/>
                            </FormGroup>
                            <FormGroup>
                                <Input type='password' name='password' id='password' placeholder="Enter Password"
                                    value={this.state.password} onChange={this.handleChange} required/>
                            </FormGroup>
                            <Button className="btn btn-primary btn-block" color="primary" onClick={this.handleClick}>Login!</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
