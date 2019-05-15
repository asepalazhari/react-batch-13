import React, { Component } from 'react';
import '../App.css'
import BaseHeader from './Real/BaseHeader';
import Meetup from './Real/Meetup';
import NextMeetup from './Real/NextMeetup';
import About from './Real/About';
import Members from './Real/Members';
import Past from './Real/Past';
import BaseFooter from './Real/BaseFooter';


class Qtemu extends Component {

    state = {
        BaseHeader: {
            index0: "Qtemu",
            index1: "Create Meetup",
            index2: "Explore",
            index3: "Login"
        },
        About: {
            title: "About Meetup",
            desc_1: "Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.",
            desc_2: "Twitter: @JakartaJS and we use the hashtag #jakartajs"
        },
        Meetup: {
            title: "Hacktiv8 Meetup",
            location: "Jakarta, Indonesia",
            members: "1,078",
            organizers: "Adhy Wiranata",
        }
    }
    render() {
        return (
            <div >
                <BaseHeader
                    mainTitle={this.state.BaseHeader.index0}
                    subTitle={this.state.BaseHeader.index1}
                    title1={this.state.BaseHeader.index2}
                    title2={this.state.BaseHeader.index3}
                />
                <Meetup
                    title={this.state.Meetup.title}
                    location={this.state.Meetup.location}
                    members={this.state.Meetup.members}
                    organizers={this.state.Meetup.organizers}
                />
                <NextMeetup />
                <About
                    title={this.state.About.title}
                    desc_1={this.state.About.desc_1}
                    desc_2={this.state.About.desc_2}
                />
                <Members />
                <Past />
                <BaseFooter />
            </div>
        );
    }
}

export default Qtemu;
