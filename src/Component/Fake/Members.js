import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../Tugas.css';
import cowo from '../../user.png';

class Members extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <h5 className="title-meetup">Members </h5>
                </div>
                <div className="col-md-9">
                    <h5 className="title-meetup float-right margin-right">See All </h5>
                </div>
                <div className="  col-md-12 ">
                    <div className="row box-member">
                        <div className="col-md-1">
                            <img src={cowo} className="avatar-member d-inline" alt="..."></img>
                        </div>
                        <div className="col-md-11 row">
                            <div className="col-md-2">
                                <p className="titleorg">Organizers</p>
                                Adhi Wiranatha
                            </div>
                            <div className="col-md-10">
                                <br /><br />4 Others.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Members;
