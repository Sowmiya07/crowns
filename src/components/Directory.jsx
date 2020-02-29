import React, { Component } from 'react';
import '../styles/Directory-Styles.scss';
import sections from "../data/data";
import MenuItem from './MenuItem';

class Directory extends Component {
    constructor() {
        super()
        this.state = {
            sections: sections
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map( ({id, ...otherProps}) =>
                        <MenuItem key = {id} {...otherProps} />
                    )
                }
            </div>
        )
    }
}

export default Directory