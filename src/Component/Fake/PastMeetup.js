import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../Tugas.css';
import BoxMeeup from './BoxMeeup';

class PastMeetup extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <h5 className="title-meetup">Past Meetups </h5>
                </div>
                <div className="col-md-9">
                    <h5 className="title-meetup float-right margin-right">See All </h5>
                </div>
                <BoxMeeup/>
            </div>
        );
    }
}

export default PastMeetup;
