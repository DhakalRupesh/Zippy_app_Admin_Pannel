import React, { Component } from 'react'
import Navigation from './UserNavigation'
import { Container } from 'reactstrap'

export default class Advertise extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <Navigation></Navigation>
                <section className="page-top-section set-bg mb-5" > 
                <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="containertext">
                                <h3 className="text-white">View Advertise</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <Container>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mt-5">
                        <div className="card shadow mb-5" style= {{ width: '22rem', borderRadius: '15px'  }}>
                            
                            <img className="card-img-top" style= {{ width: '22rem', borderRadius: '15px'  }} src={require('./CssImages/abt.jpg')} alt="Card image cap" style= {{ width: '22rem', height: '12rem' }}/>

                            <div className="card-body mb-5">
                            <div className="text-center feature-title">
                                <h3 className="text-dark pb-2">Price: </h3>
                                <i className="fa fa-map-marker-alt"></i><small className="ml-1"></small>
                            </div>
                            </div>
                            <div className="room-info-warp">
                            {/* <div className="room-info">
                                <div className="rf-left">
                                <p><i className="fa fa-utensils"></i></p>
                                <p><i className="fa fa-bed"></i></p>
                                </div>
                                <div className="rf-right">
                                <p><i className="fa fa-couch"></i></p>
                                <p><i className="fa fa-bath"></i></p>
                                </div>	
                            </div> */}

                            {/* <div className="room-info"> 
                                <div>
                                <div className="rf-left">
                                    <p><i className="fa fa-motorcycle"></i></p>
                                    <p><i className="fa fa-tint"></i></p>
                                </div>
                                <div className="rf-right">
                                    <p><i className="fa fa-car"></i></p>
                                    <p><i className="fa fa-tint"></i></p>
                                </div>
                                </div>	
                            </div> */}

                            </div>
                    
                            <a className="bg-success text-center p-2 mb-4 detailV" href="" style= {{ width: '22rem', borderRadius: '15px', width: '80px', textColor: '#fff', margin: '0 auto'}} > 
                                <h5 class="text-dark pt-1"> Accept </h5>    
                            </a>
                        </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
