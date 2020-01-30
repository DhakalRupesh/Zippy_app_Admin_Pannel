import React, { Component } from 'react'
import { Table, Input, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import Axios from 'axios'

export default class Members extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            // taskName: this.props.task.name,
            // taskDone: this.props.task.done,
            // taskNotes: this.props.task.notes,
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

    render() {
        return (
            <div>
                <Container>
                <h1 className="text-center">Members</h1>
                    <Table hover>
                        <thead>
                            <tr className="bg-secondary text-white">
                                {/* <th>#</th> */}
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Check Details</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* <th scope="row">1</th> */}
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <Button className="btn bnt-primary" onClick={this.toggleEdit} color="primary" onClick="">View Details</Button>
                            </tr>
                        </tbody>
                    </Table>
                    <Modal isOpen={this.state.isEdit} toggle={this.toggleEdit}>
                        <ModalHeader toggle={this.toggleEdit}>
                            Edit Task
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Input name='taskName' type='text'
                                    value="" onChange="" />
                            </FormGroup>
                            <FormGroup>
                                <Input type='checkbox' name='taskDone'
                                    checked="" onChange="" />
                                {/* {' '} is Done? */}
                            </FormGroup>

                            {/* <NoteList taskId="" addNote="" /> */}

                        </ModalBody>

                        <ModalFooter>
                            {/* <Button color='primary' onClick={() => handleUpdate(task._id, this.state.taskDone, this.state.taskName)}>
                                Save</Button> */}
                        </ModalFooter>
                    </Modal>
                </Container>
            </div>
        )
    }
}
