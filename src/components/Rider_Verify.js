import React, { Component } from 'react'
import { ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label, Form } from 'reactstrap'
import Axios from 'axios'

export default class Rider_Verify extends Component {
    render() {
        return (
            <div className="Rider_Verify_container">
            <React.Fragment>
                <th>Hello</th>
                <tr>
                    <td>
                        {/* {
                            (task.done) ? <del>{task.name}</del> : <span>{task.name}</span>
                        } */}
                        {/* {task.name} */}
                    </td>
                    <td>
                        <Button onClick={this.toggleEdit}>Edit</Button>
                    </td>
                    <td>
                        <Button onClick="">Delete</Button>
                    </td>
                </tr>
            </React.Fragment>
            </div>
        )
    }
}
