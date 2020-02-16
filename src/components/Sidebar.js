import React, { Component } from 'react'
import './Custom_css/sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div id="mySidebar" className="sidebar">
                    <span className="navbar-brand"  href="/">
                        <a href="/addAd" className="udashtextSide">Zippy</a>
                    </span>

                    <a href="/addAd">Add Advertise</a>
                    <a href="/viewAd">View</a>
                    <a href="/profile">Profile</a>
                    <a href="/vehicle">Vehicle</a>
                    
                </div>
            </div>
        )
    }
}
 