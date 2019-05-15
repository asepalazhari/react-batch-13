import React, { Component } from 'react';

class Past extends Component {
  render() {
    return (
      <div className="mx-3">
        <div className="row justify-content-between">
          <h5 className="col font-weight-bold">Past Meetups</h5>
          <h5 className="col text-right mr-3">See all</h5>
        </div>
        <div className="row m-3">
          <div className="card past-card col rounded-0 mr-2">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">27 November 2017</h5>
              <p className="card-text">#39 JakartaJS April Meetup with Kumparan</p>
              <p className="card-text">139 <span className="text-black-50">went</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}
              >
                View
              </button>
            </div>
          </div>
          <div className="card past-card col rounded-0 ml-5 mr-2">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">27 November 2017</h5>
              <p className="card-text">#39 JakartaJS April Meetup with Kumparan</p>
              <p className="card-text">139 <span className="text-black-50">went</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}
              >
                View
              </button>
            </div>
          </div>
          <div className="card past-card col rounded-0 ml-5">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">27 November 2017</h5>
              <p className="card-text">#39 JakartaJS April Meetup with Kumparan</p>
              <p className="card-text">139 <span className="text-black-50">went</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Past;
