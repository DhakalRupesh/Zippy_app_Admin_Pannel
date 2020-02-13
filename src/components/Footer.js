import React, { Component } from 'react'
import { Container } from 'reactstrap'
import 'font-awesome/css/font-awesome.min.css';

export default class Footer extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f5f5f5' }}>
                <footer className="page-footer font-small unique-color-dark">
                <div style= {{ backgroundColor: '#E8EAED' }}>
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">
                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                            </div>
                            <div className="col-md-6 col-lg-7 text-center text-md-right">
                                <a className="fb-ic">
                                    <i className="fa fa-facebook-f white-text mr-4"> </i>
                                </a>
                                <a className="tw-ic">
                                    <i className="fa fa-twitter white-text mr-4"> </i>
                                </a>
                                <a className="ins-ic">
                                    <i className="fa fa-instagram white-text"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="/"> Zippy.com</a>
                </div>
                </footer>
            </div>
        )
    }
}
