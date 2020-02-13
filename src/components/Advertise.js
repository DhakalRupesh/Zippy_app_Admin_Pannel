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
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mt-5">
                        <div class="card shadow" style= {{ width: '22rem', borderRadius: '15px'  }}>
                            
                            <img class="card-img-top" src={require('./CssImages/abt.jpg')} alt="Card image cap" style= {{ width: '22rem', height: '12rem' }}/>

                            <div class="card-body">
                            <div class="text-center feature-title">
                                <h3 class="text-dark pb-2">Price: </h3>
                                <i class="fa fa-map-marker-alt"></i><small class="ml-1"></small>
                            </div>
                            </div>
                            <div class="room-info-warp">
                            {/* <div class="room-info">
                                <div class="rf-left">
                                <p><i class="fa fa-utensils"></i></p>
                                <p><i class="fa fa-bed"></i></p>
                                </div>
                                <div class="rf-right">
                                <p><i class="fa fa-couch"></i></p>
                                <p><i class="fa fa-bath"></i></p>
                                </div>	
                            </div> */}

                            {/* <div class="room-info"> 
                                <div>
                                <div class="rf-left">
                                    <p><i class="fa fa-motorcycle"></i></p>
                                    <p><i class="fa fa-tint"></i></p>
                                </div>
                                <div class="rf-right">
                                    <p><i class="fa fa-car"></i></p>
                                    <p><i class="fa fa-tint"></i></p>
                                </div>
                                </div>	
                            </div> */}

                            </div>
                            
                            {/* <a class="bg-warning text-center p-2 detailV" href="{{ URL::to('/propDetail', $welprops->id) }}" > 
                                <h4 class="text-dark pt-1"> Accept </h4>
                            </a> */}
                        </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
