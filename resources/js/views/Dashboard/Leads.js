import React, { Component } from 'react'
import Header from './components/mini/Header';
import Footer from './components/mini/Footer';
import NavMenu from './components/mini/NavMenu';
import LeadsContainer from "./components/LeadsContainer";
class Leads extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            user: {}
        }
    }
    // check if user is authenticated and storing authentication data as states if true
    UNSAFE_componentWillMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
        }
    }
    
    // 4
    render() {
        return (
            <div className="hk-wrapper hk-horizontal-nav">
                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
                <NavMenu />
                    <LeadsContainer />
                <Footer />
            </div>
        )
    }
}
export default Leads
