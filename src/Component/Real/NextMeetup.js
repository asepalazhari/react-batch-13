import React, { Component } from 'react';

class NextMeetup extends Component {
    
    render() {
    return (
      <div className="mx-3">
        <h5 className="font-weight-bold">Next Meetup</h5>
        <div className="next-meetup border p-3 m-3">
          <p className="font-weight-bold">Awesome meetup and event</p>
          <p className="text-black-50">25 January 2019</p>
          <p>
            Hello JavaScript & Node.js Ninjas<br/>
            Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br/>
            The meetup format will contain some short stories and technical talks.<br/>
            If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.<br/>
            <br/>
            Remember to bring a photo ID to get through building security.<br/>
            <br/>
            -----
            <br/>
            <br/>
            See you there!
            <br/>
            Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
          </p>
        </div>
      </div>
    );
  }
}

export default NextMeetup;
