import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../Tugas.css';

class Members extends Component {
    render() {
        return (
            <div className="row padd">
                <div className="col-md-4">
                    <div className="box-meetup">
                        <p className="titleorg">27 November 2017</p>
                        <hr className="black" />
                        #39 JakartaJS April meetup with kumparan <br /><br />
                        139 went <br /><br />
                        <button className="btn btn-secondary">View</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box-meetup">
                        <p className="titleorg">27 November 2017</p>
                        <hr className="black" />
                        #39 JakartaJS April meetup with Blibli.com <br /><br />
                        113 went <br /><br />
                        <button className="btn btn-secondary">View</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box-meetup">
                        <p className="titleorg">27 November 2017</p>
                        <hr className="black" />
                        #39 JakartaJS April meetup with Hactiv8 <br /><br />
                        110 went <br /><br />
                        <button className="btn btn-secondary">View</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Members;
