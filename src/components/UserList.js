import React, { Component } from 'react'

export default class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            taskName: this.props.user.fname,
            taskDone: this.props.user.ldone,
            taskNotes: this.props.user.mobile,
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
