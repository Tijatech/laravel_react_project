import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
class NavMenu extends Component {

  render() {
    const aStyle = {
      cursor: 'pointer'
    };
    <style dangerouslySetInnerHTML={{__html: "\n    .hk-wrapper.hk-vertical-nav .hk-nav .navbar-nav .nav-item .nav-link[data-toggle=\"collapse\"][aria-expanded=\"true\"]::after {\n        -webkit-transform: rotate(-180deg);\n        -moz-transform: rotate(-180deg);\n        -ms-transform: rotate(-180deg);\n        -o-transform: rotate(-180deg);\n        transform: rotate(-180deg);\n        margin-left: 10px;\n    }\n\n    .hk-wrapper.hk-vertical-nav .hk-nav .navbar-nav .nav-item .nav-link[data-toggle=\"collapse\"]::after {\n        content: '\\f2f9';\n        font: normal normal normal 14px/1 'Material-Design-Iconic-Font';\n        font-size: 14px;\n        font-size: 16px;\n        text-rendering: auto;\n        margin-left: 0;\n        -webkit-transform: rotate(0deg);\n        -moz-transform: rotate(0deg);\n        -ms-transform: rotate(0deg);\n        -o-transform: rotate(0deg);\n        transform: rotate(0deg);\n        -webkit-transition: all 0.4s ease;\n        -moz-transition: all 0.4s ease;\n        transition: all 0.4s ease;\n        margin-right: auto;\n        padding-left: 10px;\n    }\n    .toggle.btn.ios{\n        transform: scale(.7);\n    }\n    .navbar.navbar-expand-xl.navbar-light.fixed-top.hk-navbar {\n        height: 57px !important;\n    }\n    .hk-wrapper.hk-horizontal-nav .hk-nav {\n        top: 57px !important;\n    }\n\n\n" }} />

    return (
        <div>
            <nav className="hk-nav hk-nav-dark">
            <a href="javascript:void(0);" id="hk_nav_close" className="hk-nav-close"><span className="feather-icon"><i data-feather="x" /></span></a>
            <div className="nicescroll-bar">
                <div className="navbar-nav-wrap">
                <ul className="navbar-nav flex-row">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/admin_dashboard">
                        <span className="feather-icon"><i data-feather="pie-chart" /></span>
                        <span className="nav-link-text">Dashboard</span>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#maps_drp">
                        <span className="feather-icon"><i data-feather="dollar-sign" /></span>
                        <span className="nav-link-text">Leads</span>
                    </a>
                    <ul id="maps_drp" className="nav flex-column collapse-level-1 collapse">
                        <li className="nav-item">
                        <ul className="nav flex-column">
                        
                            <li className="nav-item  ">
                                <Link className="nav-link" to="/admin_leads_sheet">
                                    <span className="pr-2"><i className="fas fa-align-justify" /></span>
                                    <span className="nav-link-text"> &nbsp;Admin Sheet </span>
                                </Link>
                            </li>
                        
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/admin_solar_leads">
                                <span className="pr-2"><i className="fas fa-solar-panel" /></span>
                                <span className="nav-link-text"> Solar Leads</span></Link>
                            </li>
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/admin_leads">
                                <span className="pr-2 pl-1"><i className="far fa-lightbulb" /></span>
                                <span className="nav-link-text">&nbsp;Clients</span></Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    {/*   Telesales lead  */}
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#maps_drp">
                        <span className="feather-icon"><i data-feather="dollar-sign" /></span>
                        <span className="nav-link-text">Telesales</span>
                    </a>
                    <ul id="maps_drp" className="nav flex-column collapse-level-1 collapse">
                        <li className="nav-item">
                        <ul className="nav flex-column">
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/admin_telesale_leads_new"><i className="fas fa-solar-panel" />&nbsp;
                                <span className="nav-link-text"> New Leads</span></Link>
                            </li>
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/admin_telesale_leads"><i className="far fa-lightbulb" />&nbsp;
                                <span className="nav-link-text"> Clients</span></Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#hr_drp">
                        <span className="feather-icon"><i data-feather="user" /></span>
                        <span className="nav-link-text">Human Resources</span>
                    </a>
                    <ul id="hr_drp" className="nav flex-column collapse-level-1 collapse">
                        <li className="nav-item">
                        <ul className="nav flex-column">
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/manager-edit-users">
                                <span className="pr-2"><i className="fas fa-user-edit" /></span>
                                <span className="nav-link-text">Manage Users</span>
                            </Link>
                            </li>
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/manager-edit-tpvusers">
                                <span className="pr-2"><i className="fas fa-user-edit" /></span>
                                <span className="nav-link-text">Manage TPV Users</span>
                            </Link>
                            </li>
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/admin-team-manage">
                                <span className="pr-2"><i className="fas fa-users" /></span>
                                <span className="nav-link-text">Team Manage</span>
                            </Link>
                            </li>
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/admin_spectrum_employee">
                                <span className="pr-2"><i className="fas fa-tv" /> </span>
                                <span className="nav-link-text">Spectrum Employee </span>
                            </Link>
                            </li>
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/admin-payroll">
                                <span className="pr-2"><i className="far fa-money-bill-alt" /></span>
                                <span className="nav-link-text">Payroll</span></Link>
                            </li>
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/admin-commissions">
                                <span className="pr-2"><i className="far fa-money-bill-alt" /></span>
                                <span className="nav-link-text">Commissions</span></Link>
                            </li>
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/admin-marketingp">
                                <span className="pr-2 pl-1"><i className="fab fa-google-drive" /></span>
                                <span className="nav-link-text">EverDrive</span>
                            </Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#coms_drp">
                        <span className="feather-icon"><i data-feather="message-circle" /></span>
                        <span className="nav-link-text">Communication</span>
                    </a>
                    <ul id="coms_drp" className="nav flex-column collapse-level-1 collapse">
                        <li className="nav-item">
                        <ul className="nav flex-column">
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/admin_compose_email">
                                <span className="feather-icon"><i data-feather="mail" /></span>
                                <span className="nav-link-text">Email Users</span>
                            </Link>
                            </li>
                            <li className="nav-item  ">
                            <Link className="nav-link" to="/everchat">
                                <span className="pr-2"><i className="far fa-comment-dots" /></span>
                                <span className="nav-link-text">&nbsp;Chat</span>
                            </Link>
                            </li>
                            <li className="nav-item active">
                            <Link className="nav-link" to="#">
                                <span className="pr-2"><i className="fas fa-stream" /></span>
                                <span className="nav-link-text">&nbsp;Timeline</span>
                            </Link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li style={{display: 'none'}} className="nav-item  ">
                    <Link className="nav-link" to="admin-changelog.php">Change Log</Link>
                    </li>
                    <li className="nav-item  ">
                    <Link className="nav-link" to="admin-onboard-docs.php">
                        <span className="pr-2"><i className="far fa-folder" /></span>
                        <span className="nav-link-text">&nbsp;Onboarding Documents</span>
                    </Link>
                    </li>
                    <li className="nav-item  ">
                    <Link className="nav-link" to="admin-create-link.php">
                        <span className="pr-2"><i className="fas fa-link" /></span>
                        <span className="nav-link-text">&nbsp;Link Manager</span>
                    </Link>
                    </li>
                    <li className="nav-item  ">
                    <Link className="nav-link" to="admin_locations.php">
                        <span className="pr-2"><i className="fas fa-map-marked-alt" /></span>
                        <span className="nav-link-text">&nbsp;Locations</span>
                    </Link>
                    </li>
                    <li style={{display: 'none'}} className="nav-item  ">
                    <Link className="nav-link" to="admin-changelog.php">Change Log</Link>
                    </li>
                    <li style={{display: 'none'}} className="nav-item  ">
                    <Link className="nav-link" to="upgrade-affiliate.php">Edit Team Member</Link>
                    </li>
                    <li style={{display: 'none'}} className="nav-item  ">
                    <Link className="nav-link" to="admin-opportunities.php">Opportunities</Link>
                    </li>
                    <li style={{display: 'none'}} className="nav-item  ">
                    <Link className="nav-link" to="admin-payments-tracking.php">PayTrax</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <div className="topbar app-active">
                <div className="nav-button" style={{margin: 'auto'}}>
                    <div style={{display: 'block'}}>
                    <Link to="admin-marketing.php"><i className="fas fa-archive" /></Link>
                    </div>
                    <div className="application-icon" />
                </div>
                <div className="nav-button home" style={{margin: 'auto'}}>
                    <div className="application-icon">
                    <div style={{display: 'block'}}>
                        <Link to="app-change-log.php"><i className="fas fa-question-circle" /></Link>
                    </div>
                    </div>
                </div>
                <div className="nav-button home" style={{margin: 'auto'}}>
                    <div className="application-icon">
                    <div style={{display: 'block'}}>
                        <Link to="affiliate-manager-edit-users.php"><i className="fas fa-pencil-alt" /></Link>
                    </div>
                    </div>
                </div>
                <div className="nav-button home" style={{margin: 'auto'}}>
                    <div className="application-icon">
                    <div style={{display: 'block'}}>
                        <Link className data-target="#addTeamMember" data-toggle="modal" type="button"><i className="fas fa-plus" style={{cursor: 'pointer'}} /></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
  }
}
export default NavMenu