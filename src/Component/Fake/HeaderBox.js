import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../Tugas.css';
import cowo from '../../user.png';

class HeaderBox extends Component {
    render() {
        return (
            <div className="border bor-color row">
                <div className="col-md-3">
                    <img src={cowo} className="avatar-ukuran d-inline" alt="..."></img>
                </div>
                <div className="col-md-9 jarak-atas row">
                    <div className="col-md-3">
                        <p className="judul-atas">Hactiv8 Meetup</p>
                        Location <br />
                        Member <br />
                        Organizer <br />
                        <button className="btn btn-secondary buton">Join Us</button>
                    </div>
                    <div className="col-md-3 value-top">
                        Jakarta, Indonesia <br />
                        1,078 <br /> 
                        Adhi Wiranatha <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBox;
