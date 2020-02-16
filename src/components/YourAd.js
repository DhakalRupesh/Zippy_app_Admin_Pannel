import React, { Component } from 'react'
import { Table, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Nav from './SideTop'
import Axios from 'axios'
import Advertise from './Advertise'

export default class YourAd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isActive: false,
            visible1: false,
            advertise: [],
            isLoaded: false,
            user: {},
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
        }
    }

    toggleEdit = (e) => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    
    toogle() {
        this.setState({
            visible1: !this.state.visible1
        })
    }

    componentDidMount() {
        Axios.get(`http://localhost:3001/advertise/`, 
        this.state.config).then((response) => {console.log(response.data);

            this.setState({
                advertise: response.data,
                isLoaded: true
            })
        }).catch((err)=> console.log(err.response));
    }

    toggleDelete = (adId) => {
        Axios.delete(`http://localhost:3001/advertise/${adId}`, this.state.config)
        .then((response)=>{
            const filterAdvertise = this.state.advertise.filter((advertise)=>{
                return advertise._id !== adId
            })
            this.setState({
                visible1: true,
                advertise: filterAdvertise
            }).catch((err) => console.log(err.response));
        })
    }    

    render() {
            return (
                <div>
                    <Nav></Nav>
                    <Sidebar></Sidebar>
                    <div className="add_user_Main shadow-sm ">
                        <Alert color="danger" isOpen={this.state.visible1} toggle={this.toogle.bind(this)}>Property had been removed...</Alert>

                        <Table>
                            <thead>
                                <tr>
                                    <th>Posted BY</th>
                                    <th>Delivery Type</th>
                                    <th>Vehicle Needed</th>
                                    {/* <th>Sort</th> */}
                                    {/* <th>Edit</th> */}
                                    <th>Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.advertise.map(adv=>{
                                    return <tr key={adv._id}>
                                            <td>{adv.postedby.username}</td>
                                            <td>{adv.goodstype}</td>
                                            <td>{adv.vehicleneed}</td>
                                            {/* <td>
                                                <Link onClick={this.toggleEdit}>View</Link>
                                            </td> */}
                                            <td>
                                                <Link onClick={() => this.toggleDelete(adv._id)}>Delete</Link>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        }
}
