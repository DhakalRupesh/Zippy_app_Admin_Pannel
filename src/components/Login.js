import React, { Component } from 'react'
import { Form, FormGroup, Input, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'
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
        console.log(this.state.username);
        e.preventDefault();
        axios.post('http://localhost:3001/aduser/login', this.state)
            .then((response) => {
                localStorage.setItem('token', response.data.token);

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
            <div className = "loginContainer d-flex" Style={"height:100vh"}>
                <div className="text-center shadow p-3 bg-white rounded" style={{width: '22rem',margin:" auto"}}>
                    <div className="card-body">
                        <h3 className="login-text">Zippy</h3>
                        <img className="login_user_image" src={require('./CssImages/user3.png')} alt="userlogo"/>
                        <Form>
                            <FormGroup className="mt-4">
                                <Input className="form-control" name='username' id='username' type='text' placeholder="Enter Username"
                                    value={this.state.username} onChange={this.handleChange} required autoFocus/>
                            </FormGroup>
                            <FormGroup>
                                <Input type='password' name='password' id='password' placeholder="Enter Password"
                                    value={this.state.password} onChange={this.handleChange} required/>
                            </FormGroup>
                            <Button className="btn-block btnLogin"  onClick={this.handleClick}>Login</Button>
                        </Form>
                    </div>
                </div>
            </div>            
        )
    }
}
