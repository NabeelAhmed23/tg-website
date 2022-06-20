import React, { Component } from 'react'

export default class SelectInput extends Component {
    render() {
        return (
            <select {...this.props}>
                {this.props.children}
            </select>
        )
    }
}
