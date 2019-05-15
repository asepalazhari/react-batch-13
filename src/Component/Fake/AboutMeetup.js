import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../Tugas.css';

class AboutMeetup extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="title-meetup">About Meetup </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-aboutmeetup">
                            Come and meet other developers interested in the Javascript and it's library in the Greater Jakarta area.<br /><br />
                            Twitter @JakartaJs and we use the hastag #jakartajs
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMeetup;
