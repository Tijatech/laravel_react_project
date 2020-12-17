import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
  // 1.1
  constructor(props) {
    super(props);
      this.state = {
        user: props.userData,
        isLoggedIn: props.userIsLoggedIn
      };
      this.logOut = this.logOut.bind(this);
  };
 
  // check if user is authenticated and storing authentication data as states if true
  UNSAFE_componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
        let AppState = JSON.parse(state);
        this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
    }
}
  // 1.2
  logOut() {
    let appState = {
      isLoggedIn: false,
      user: {}
    };
    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);
    this.props.history.push('/');
  }
  // 1.3
  render() {
    const aStyle = {
      cursor: 'pointer'
    };
    <style dangerouslySetInnerHTML={{__html: "\n     #adminMenuMobile li a {\n         padding: .5rem;\n     }\n     \n     #adminMenuMobile li {\n         width: auto;\n         padding: 0 10px;\n     }\n     \n    #adminMenuMobile .navbar-nav .dropdown-menu {\n        position: absolute;\n        float: none;\n     }\n     \n     div.scrollmenu {\n      background-color: #333;\n      overflow: auto;\n      white-space: nowrap;\n    }\n    \n    div.scrollmenu a {\n      display: inline-block;\n      color: white;\n      text-align: center;\n      padding: 14px;\n      text-decoration: none;\n    }\n    \n    div.scrollmenu a:hover {\n      background-color: #777;\n    }\n " }} />
    return (
        <nav className="navbar navbar-expand-xl navbar-light fixed-top hk-navbar">
            <a id="navbar_toggle_btn" className="navbar-toggle-btn nav-link-hover" href="javascript:void(0);"><span className="feather-icon"><i data-feather="menu" /></span></a>
            <Link className="navbar-brand" to="/admin-dashboard">
              <img src="assets/img/everlast-portal-logo-admin.png" alt="brand" style={{width: '250px'}} className="brand-img-desktop d-lg-block d-none" />
              <img alt="brand" src="assets/img/everlast-circle.png" className="brand-img-mobile mx-auto d-block d-md-none" style={{width: '50px'}} />
            </Link>
            <ul className="navbar-nav hk-navbar-content">
            <li className="nav-item dropdown dropdown-authentication">
                <a className="nav-link dropdown-toggle no-caret" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media">
                    <div className="media-img-wrap">
                    <div className="avatar">
                        <img src="assets/img/everlast-circle.png" alt="user" className="avatar-img rounded-circle" />
                    </div>
                    <span className="badge badge-success badge-indicator" />
                    </div>
                    <div className="media-body">
                    <span>{this.state.user.username}<i className="zmdi zmdi-chevron-down" /></span>
                    </div>
                </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                <Link className="dropdown-item" to="/admin_profile"><i className="dropdown-icon zmdi zmdi-account" /><span>Profile</span></Link>
                <div className="dropdown-divider" />
                {/*a class="dropdown-item" to="issue.php"><i class="dropdown-icon zmdi zmdi-bug"></i><span>Issue</span></a*/}
                <button className="dropdown-item" onClick={this.logOut}><i className="dropdown-icon zmdi zmdi-power" /><span>Logout</span></button>
                </div>
            </li>
            </ul>
        </nav>
        
    )
  }
}
export default withRouter(Header)