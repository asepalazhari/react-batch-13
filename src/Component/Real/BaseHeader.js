import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class BaseHeader extends Component {
  render() {
    const { mainTitle, subTitle, title1, title2} = this.props;
    const isLogin = this.props.isLogin;
    const username = this.props.username;
    return (
      <ul className="nav fixed-top justify-content-between text-white-50 py-3 px-2">
        <li className="nav-item text-white font-weight-bold mr-5 ml-2"><Link className="text-white" to="/">{mainTitle}</Link></li>
        <li className="nav-item mr-5"><Link className="text-white" to="/create-meetup">{subTitle}</Link></li>
        <li className="nav-item"><Link className="text-white" to="/explore">{title1}</Link></li>
        {
            isLogin ? 
            <li className="nav-item flex-grow-1 text-right mr-2">{`Hi, ${username}`}</li>
            : <li className="nav-item flex-grow-1 text-right mr-2"><Link className="text-white" to="/login">{title2}</Link></li>
        }
      </ul>
    );
  }
}

const mapStateToProps = (prevState) => {
  return {
        isLogin: prevState.isLogin,
        username: prevState.username
  }
}

export default connect(mapStateToProps, null)(BaseHeader);
