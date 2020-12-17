import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
class Home extends Component {
  constructor() {
    super();
  }
  
render() {
    return (
          <div className="hk-wrapper">
            <div className="hk-pg-wrapper hk-auth-wrapper" style={{minHeight: '366px'}}>
              <header className="d-flex justify-content-end align-items-center">
              </header>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12 pa-0">
                    <div className="auth-form-wrap pt-xl-0 pt-70">
                      <div className="auth-form w-xl-30 w-lg-55 w-sm-75 w-100">
                        <img style={{width: '290px', margin: 'auto', display: 'block'}} src="assets/img/everlast_profile_img_transparent.png" /><a className="auth-brand text-center d-block mb-20" href="#">
                        </a>
                        <h3 style={{color: '#18a809', textAlign: 'center', marginBottom: '40px'}}>Choose your position!</h3>
                        <div className="row">
                          <Link to="/authenticate/login" style={{backgroundColor: '#18a809', borderColor: '#18a809', marginTop: '8px'}} className="mx-auto m-40-sm  col-lg-3 btn btn-primary btn-block">Login</Link> 
                          <Link to="/authenticate/register" style={{backgroundColor: '#18a809', borderColor: '#18a809'}} className="mx-auto m-40-sm  col-lg-4 btn btn-primary btn-block">Register</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    }
  }
export default withRouter(Home)