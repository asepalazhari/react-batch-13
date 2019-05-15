import React, { Component } from 'react';
import {Button} from './Button';
class Meetup extends Component {
    render() {
    
    const alertAja = () => {
        alert('testing aja');
    }
      const { title, location, members, organizers } = this.props;
    return (
      <div className="card meetup-card mb-4 mx-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <img
              src="https://via.placeholder.com/180"
              className="card-img border"
              alt="placeholder-card"
            />
          </div>
          <div className="col-md-10">
            <div className="card-body py-0">
              <h5 className="card-title font-weight-bold">{title}</h5>
              <div className="row mt-3">
                <div className="col-2 pr-0">
                  <p>Location</p>
                  <p>Members</p>
                  <p>Organizers</p>
                </div>
                <div className="col-4 pl-0">
                  <p>{location}</p>
                  <p>{members}</p>
                  <p>{organizers}</p>
                </div>
              </div>
              <Button buttonName="Join Us" lempar={alertAja} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Meetup;
