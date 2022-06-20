import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TextInput extends Component {
  render() {
    return (
     <input type="text" {...this.props}/>
    )
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired
}