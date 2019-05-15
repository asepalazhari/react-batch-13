import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../Tugas.css';

class MeetUp extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h5 className="title-meetup">Next Meetup </h5>
                </div>
                <div className="col-md-12">
                    <div className="border box-meetup ">
                        Awesome meetup and event <br />
                        <p className="customep">25 January 2019</p>
                        Hello, Javascript and Node.js Ninjas!<br />
                        Get ready for out monthly meetup JakartaJS! this will be our fifth meetup in 2018! <br />
                        The meetup format  will contain some short stories and  technical talks. <br />
                        if you have a short announcement you'd like to share  with the audience, you may do so during  open mic  announcements.<br /><br />
                        Remember to bring a photo ID to get through building security.<br /><br />
                        ----------<br /><br />
                        See you there!<br />
                        Best, Hengki, Giovanni, Sofian, Riza, Agung the JakartaJS Organizers
                    </div>
                </div>
            </div>
        );
    }
}

export default MeetUp;
