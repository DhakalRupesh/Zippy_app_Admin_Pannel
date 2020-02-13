import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Nav from './SideTop'
import './Custom_css/addadvertise.css'


export default class Profile extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Sidebar></Sidebar>

                <div className="add_user_Main">

                </div>
            </div>
        )
    }
}
