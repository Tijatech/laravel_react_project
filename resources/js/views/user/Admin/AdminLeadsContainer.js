import React, { Component } from 'react'
class AdminLeadsContainer extends Component {
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
            <div id="admin-payments-cont" className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                    <section className="hk-sec-wrapper">
                        <h2 className="display-4 table-top hk-pg-title font-weight-600 mb-10 mt-xl-20 mt-sm-20 mt-1" style={{marginLeft: 'auto', display: 'flex'}}>Clients</h2>
                        <div className="table-wrap">
                        <table id="datable_1" className="table table-hover w-100 display pb-30 table-responsive-md">
                            <thead>
                            <tr>
                                <th>Client</th>
                                <th>Date Submitted</th>
                                <th>Email</th>
                                <th>Language</th>
                                <th>Primary Phone</th>
                                <th>Transaction Type</th>
                                <th>Owner's Team</th>
                                <th>TPV Agent</th>
                                <th>Service Status</th>
                                <th>Client Owner</th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                        </div>
                    </section>
                    </div>
                </div>
            </div>

        )
    }
}
export default AdminLeadsContainer
