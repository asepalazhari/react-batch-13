import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../Tugas.css';

class Footer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <hr />
                    <h6 className="text-center padd-footer">Copyright Hactiv8 2018</h6>
                </div>
            </div>
        );
    }
}

export default Footer;
