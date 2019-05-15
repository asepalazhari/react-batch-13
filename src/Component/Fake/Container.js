import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './NavBar';
import HeaderBox from './HeaderBox';
import MeetUp from './MeetUp';
import AboutMeetup from './AboutMeetup';
import Members from './Members';
import PastMeetup from './PastMeetup';
import Footer from './Footer';

class Container extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <HeaderBox />
                    <MeetUp />
                    <AboutMeetup />
                    <Members />
                    <PastMeetup />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Container;
