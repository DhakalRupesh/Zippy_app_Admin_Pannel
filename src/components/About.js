import React, { Component } from 'react'
import Unav from './UserNavigation'
import Ufooter from './Footer'
import './Custom_css/about.css'


export default class about extends Component {
    render() {
        return (
            <div>
            <Unav></Unav>
                <section className="page-top-section set-bg mb-5" > 
                <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="containertext">
                                <h3 className="text-white">About Zippy</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-lg-6 col-md-6 text-center">
                            <p className="text-center"><img className="shadow" src={require('./CssImages/abt.jpg')} alt="officeImage" style={{ height:'350px' }}/></p>
                        </div>
                        <div className="col-lg-6 col-md-6 text-center"> 
                            <h3 className="text-dark">Welcome to Zippy</h3>
                            <p className="text-justify">
                            It is a long established fact that a reader will be distracted by the
                             readable content of a page when looking at its layout. The point of 
                             using Lorem Ipsum is that it has a more-or-less normal distribution
                              of letters, as opposed to using 'Content here, content here', making 
                              it look like readable English. Many desktop publishing packages and 
                              web page editors now use Lorem Ipsum as their default model text, and 
                              a search for 'lorem ipsum' will uncover many web sites still in their 
                              infancy. Various versions have evolved over the years, sometimes by accident,
                               sometimes on purpose (injected humour and the like). 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-light">
                    <div className="container pt-5 pb-5">
                        <h3 className="text-center text-dark">Reviews of our service</h3>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 text-center">
                                <h5 className="text-center pt-4">The kathmandu post</h5>
                                <p><i>Zippy is the best place to send your 
                                goods, kathmandu post is also a happy customer of Zippy</i></p>
                                <img src={require('./CssImages/star.png')} alt="" style={{ width:'100px' }}/>      
                            </div>
                            <div className="col-lg-4 col-md-6 text-center">
                                <h5 className="text-center pt-4">The Kantipur post</h5>
                                <p><i>Zippy is the best place to send your 
                                goods, kathmandu post is also a happy customer of Zippy</i></p>
                                <img src={require('./CssImages/star.png')} alt="" style={{ width:'100px' }}/>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center">
                                <h5 className="text-center pt-4">The Karnali post</h5>
                                <p><i>Zippy is the best place to send your 
                                goods, kathmandu post is also a happy customer of Zippy</i></p>
                                <img src={require('./CssImages/star.png')} alt="" style={{ width:'100px' }}/>
                            </div>
                        </div>
                    </div>
                </div>

                <Ufooter></Ufooter>
            </div>
        )
    }
}
