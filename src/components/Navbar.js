// import React, { Component } from 'react'
// import { Container, Row, Col } from 'reactstrap'
// import { UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
// import { Link, Redirect } from 'react-router-dom'

// export default class Navbar extends Component {
//     render() {
//         return (
//             <div>
//             <Navbar id="navLogoText" className="navbar navbar navbar-dark bg-dark navbar-expand-lg text-white navbar-fixed-top txt">
//                 <Container>
//                   <a class="navbar-brand"  href="/dashboard">
//                       {/* <img class="img-Logo" src={require('./CssImages/zippy_logo_trans.png')} alt="logoofzippy"/>  */}
//                       <a href="" className="dashtext">Zippy</a>
//                   </a>
                
//                   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseDIv" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
//                       <span class="navbar-toggler-icon"></span>
//                   </button>
//                   <div class="collapse navbar-collapse" id="collapseDIv">
//                       {/* <!-- Left Side Of Navbar --> */}
//                       <div class="nav text-center collapse navbar-collapse font-weight-bold" id="collapseDIv">
//                           <ul class="navbar-nav" id="menuS">
//                           <li class="nav-item"><Link to="/dashboard"  class="nav-link icon home"> <p class="iconP">Home</p></Link></li>
//                           </ul>
//                       </div>
//                   </div>

//                   {/* <!-- Right Side Of Navbar --> */}
//                   <ul class="navbar-nav ml-auto">
//                     <UncontrolledDropdown nav inNavbar style={{ marginRight: '20px' }}>
//                       <DropdownToggle nav caret>
//                        hello, {this.state.adminuser.username}
//                       </DropdownToggle>
//                       <DropdownMenu right>
//                         <DropdownItem onClick={this.handleAdminProfile}>
//                           Profile
//                         </DropdownItem>
//                         <DropdownItem divider />
//                         <DropdownItem onClick={this.handleLogout}>
//                           Logout
//                         </DropdownItem>
//                       </DropdownMenu>
//                     </UncontrolledDropdown>
//                   </ul>
//                 </Container>
//             </Navbar> 
//             </div>
//         )
//     }
// }
