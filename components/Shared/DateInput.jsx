import React, { Component } from 'react'

export default class DateInput extends Component {
  render() {
    return (
      <input type="date" {...this.props}/>
    )
  }
}
