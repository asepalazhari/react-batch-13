import React, { Component } from 'react';
import BaseHeader from './BaseHeader';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { updateUsername, updatePassword, loginAuth } from "../Redux/Action";
class CreateMeetup extends Component {

    handleChangeUsername = (event) => {
        this.props.updateUsername(event.target.value);

    }

    handleChangePassword = (event) => {
        this.props.updatePassword(event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.username == 'admin' && this.props.password == 'admin') {
            this.props.loginAuth();
        } else {
            alert('Maaf username atau password yang anda masukkan salah!');
        }
    }

    render() {
        const { index0, index1, index2, index3 } = this.props.header;
        if (this.props.isLogin) {
            return <Redirect to='/' />
        }
        return (
            <React.Fragment>
                <BaseHeader
                    mainTitle={index0}
                    subTitle={index1}
                    title1={index2}
                    title2={index3}
                />
                <form className="login-box border">
                    <h3 className="text-center">Create Meetup</h3>
                    <div className="form-group" >
                        <label>Pilih Tanggal</label>
                        {/* <input onChange={this.handleChangeUsername} className="form-control" /> */}
                        <DatePicker
                            className="form-control"
                            /* selected={this.state.startDate}
                            onChange={this.handleChange} */
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input value={this.props.password} onChange={this.handleChangePassword} className="form-control" />
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (prevState) => {
    return {
        header: prevState.BaseHeader,
        username: prevState.username,
        password: prevState.password,
        isLogin: prevState.isLogin
    }
}

const mapDispatchToProps = { updateUsername, updatePassword, loginAuth }

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetup);
