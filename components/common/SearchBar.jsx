import React, { Component } from 'react'
import TextInput from '../Shared/TextInput'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
    handleSearch = e => {
        console.log(e);
    }
    render() {
        return (
            <div className={this.props.className}>
                <TextInput
                    name="search"
                    id="search"
                    onChange={(e) => this.handleSearch(e)}
                    className='px-4 py-2 rounded text-sm h-10 w-full focus:outline-0'
                    placeholder='What are you looking for?'
                />
            {this.props.children}
            </div>
        )
    }
}

SearchBar.propTypes = {
    className: PropTypes.string
}
