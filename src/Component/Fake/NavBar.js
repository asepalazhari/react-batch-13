import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../Tugas.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand judul-warna bold" >Qtemu</a>
                    <a className="nav-item nav-link active judul-warna" >Create Meetup <span class="sr-only">(current)</span></a>
                    <a className="nav-item nav-link judul-warna" >Explorer</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <div className="navbar-nav ">
                            <a className="nav-item nav-link pull-right judul-warna" >Login</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
