import React, { Component } from 'react';
import { connect } from "react-redux";

class PastDetail extends Component {
    render() {
        const { meetups } = this.props;
        console.log(meetups);
        
        return (
            <div className="row m-3">
                {
                    meetups ?
                        meetups.map((result, index) => {
                            return (
                                <div key={index} className="card past-card col rounded-0 mr-2">
                                    <div className="card-body px-2">
                                        <h5 className="card-title border-bottom border-dark pb-2">{result.tanggal}</h5>
                                        <p className="card-text">{result.deskripsi}</p>
                                        <p className="card-text">{result.went} <span className="text-black-50">went</span></p>
                                        <button
                                            type="button"
                                            className="btn btn-secondary rounded-0"
                                            style={{ width: "85px" }}>
                                            View
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                        : <h1>Loading</h1>
                }
            </div>
        );
    }
}

const mapStateToProps = (prevState) => {
    return {
        meetups: prevState.meetups
    }
}

export default connect(mapStateToProps, null)(PastDetail);
