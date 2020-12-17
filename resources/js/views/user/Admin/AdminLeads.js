import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import AdminLeadsContainer from "./AdminLeadsContainer";
class AdminLeads extends Component {
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
                    <AdminLeadsContainer />
                <Footer />
            </div>
        )
    }
}
export default AdminLeads
