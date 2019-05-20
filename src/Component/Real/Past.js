import React, { Component } from 'react';
import { connect } from "react-redux";
import BaseHeader from './BaseHeader';
import PastDetail from './PastDetail';

class Past extends Component {
    render() {
        const { index0, index1, index2, index3 } = this.props.header;
    return (
        <React.Fragment>
            <BaseHeader
                mainTitle={index0}
                subTitle={index1}
                title1={index2}
                title2={index3}
            />
            <div className="mx-3">
                <div className="row justify-content-between">
                    <h5 className="col font-weight-bold">Past Meetups</h5>
                    <h5 className="col text-right mr-3">See all</h5>
                </div>
                <PastDetail />
            </div>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (prevState) => {
  return {
    header: prevState.BaseHeader
  }
}

export default connect(mapStateToProps, null)(Past);
