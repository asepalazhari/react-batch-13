import React, { Component } from 'react';

class BaseFooter extends Component {
  state = {
    footer: "Copyright Hacktiv8 2018"
  }
  render() {
    return (
      <div className="base-footer">
        {this.state.footer}
      </div>
    );
  }
}

export default BaseFooter;
