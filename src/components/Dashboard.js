import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Custom_css/dashboard.css'
import Nav from  './Nav'

export default class Dashboard extends Component {

    render() {
        return (
          <div className="dashboard_container">
           <Nav></Nav>
          <h6 className="mb-3 mt-3 text-muted text-center"> Admin Dashboard </h6>

          <Container className="dashboard_btn_container">
            <Row>
              <Link className="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls nounderline" to="/members" style={{ width: '22rem' }}>
                <h4 className="text-center"><img src={require('./CssImages/membersm.png')} alt="sportlogo"/></h4>
                <h4 className="text-center">Members</h4>
                <p className="text-center"><small>View Members info</small></p>
              </Link>
              <span className="col-lg-1 col-md-4"></span>
              <Link className="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls" to="/vehicleverify" style={{ width: '22rem' }}>
                  <h4 className="text-center"><img src={require('./CssImages/driverSm.png')} alt="sportlogo"/></h4>
                  <h4 className="text-center">Vehicle</h4>
                  <p className="text-center"><small>Verify & Approve</small></p>              
              </Link>
              <span className="col-lg-1 col-md-4"></span>
              <Link className="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls" to="/registeradmin" style={{ width: '22rem' }}>
                  <h4 className="text-center"><img src={require('./CssImages/adminsm.png')} alt="sportlogo"/></h4>
                  <h4 className="text-center">Admin</h4>
                  <p className="text-center"><small>Register new admin</small></p>              
              </Link>
            </Row>

            <Row>
              <Link className="col-lg-3 col-md-4 shadow p-3 mb-5 rounded bg-warning text-dark mt-3 mb-3 pt-3 pb-3 controls" to="" style={{ width: '22rem' }}>
                <h4 className="text-center"><img src={require('./CssImages/driverSm.png')} alt="sportlogo"/></h4>
                <h4 className="text-center">Riders</h4>
                <p className="text-center"><small>View & Disable</small></p>
              </Link>
            </Row>
          </Container>
        </div>
        )
    }
}
