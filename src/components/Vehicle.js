import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Nav from './SideTop'
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
                    <h3 className="mb-4">Vehicle Info</h3>
                    <div className="form-group">
                        <label for="typesofdilevery">Type of dilevery</label>
                        <input type="text" name="goodstype" className="form-control" placeholder="eg: room shift, docs, furniture" 
                        value={this.state.goodstype} onChange={this.handleChange} required/>
                    </div>
                </div>
            </div>
        )
    }
}
