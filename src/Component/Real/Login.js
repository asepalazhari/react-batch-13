import React, { Component } from 'react';
import * as qs from 'query-string';
export default class Login extends Component {
    render() {
        const parsed = qs.parse(this.props.location.search);
        let nama;
        if (this.props.match.params.name) {
            nama = this.props.match.params.name;
        }else{
            nama = '';
        }
        return (
            <div className="card meetup-card mb-4 mx-3">
                <div className="row no-gutters">
                    <div className="col-md-10">
                        <div className="card-body py-0">
                            <h5 className="card-title font-weight-bold">Halaman Login {nama}</h5>
                            <h6>{parsed.wlan}</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
