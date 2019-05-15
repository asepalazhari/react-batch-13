import React, { Component } from 'react';

export default class About extends Component {
    render() {
        const { title, desc_1, desc_2 } = this.props;
        return (
            <div className="mx-3">
                <h5 className="font-weight-bold">{title}</h5>
                <div className="m-3">
                <p>{desc_1}</p>
                <p>{desc_2}</p>
                </div>
            </div>
        );
    }
}