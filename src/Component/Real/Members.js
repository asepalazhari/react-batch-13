import React, { Component } from 'react';

class Members extends Component {
    state = {
        title: "Members",
        more: "See all",
        title_2: "1,078",
        name: "Adhy Wiranata",
        sum: "4 others.",
    }
    render() {
    return (
      <div className="mx-3">
        <div className="row justify-content-between">
          <h5 className="col font-weight-bold">{this.state.title}</h5>
          <h5 className="col text-right mr-3">{this.state.more}</h5>
        </div>
        <div className="media media-members p-3 m-3">
          <img
            src="https://via.placeholder.com/60"
            className="border rounded-circle mr-3"
            alt="avatar-member"
          />
          <div className="media-body">
            <h5 className="mt-0">{this.state.title_2}</h5>
            <div className="row">
              <div className="col-2 pr-0">
                <p>{this.state.sum}</p>
              </div>
              <div className="col-4 pl-0">
                <p>{this.state.sum}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
