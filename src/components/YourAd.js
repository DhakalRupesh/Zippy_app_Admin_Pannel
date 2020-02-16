import React, { Component } from 'react'
import { Table } from 'reactstrap'
import Sidebar from './Sidebar'
import Nav from './SideTop'
import Axios from 'axios'

export default class YourAd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            advertise: [],
            isLoaded: false,
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
        }
    }

    toggleEdit = (e) => {
        this.setState({
            isEdit: !this.state.isEdit
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

    render() {
        // var{ isLoaded, advertise } = this.state;
        // if(!isLoaded){
        //     return <div className="txt-center"> Error!! loading the data </div>
        // } else {
            return (
                <div>
                    <Nav></Nav>
                    <Sidebar></Sidebar>
                    <div className="add_user_Main shadow-sm ">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Posted BY</th>
                                    <th>Delivery Type</th>
                                    <th>Vehicle Needed</th>
                                    {/* <th>Sort</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.advertise.map(adv=>{
                                    return <tr key={adv._id}>
                                            <td>{adv.postedby.username}</td>
                                            <td>{adv.goodstype}</td>
                                            <td>{adv.vehicleneed}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        }
    // }
}
