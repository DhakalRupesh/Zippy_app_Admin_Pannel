import React, { Component } from 'react'
import Unav from './UserNavigation'
import './Custom_css/home.css'
import { Button } from 'reactstrap'


export default class Index extends Component {
    render() {
        return (
            <div>
                <Unav></Unav>
                <section className="banner_area">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content">
                                <h5>Made Courier faster and easier</h5>
                                <h3>Request or Provide a Service</h3>
                                <a className="text-warning" href="/aboutus">Learn More</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
