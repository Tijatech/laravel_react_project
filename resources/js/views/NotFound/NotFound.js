import React, {Component} from 'react'
class NotFound extends Component {
render() {
    return (
        <div className="hk-wrapper">
        {/* Main Content */}
        <div className="hk-pg-wrapper hk-auth-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 pa-0">
                <div className="auth-form-wrap pt-xl-0 pt-70">
                  <div className="auth-form w-xl-25 w-sm-50 w-100">
                        <a className="auth-brand text-center d-block mb-45" href="/">
                        <img className="brand-img" style={{width: '390px', margin: 'auto', display: 'block'}} src={window.location.origin + '/assets/img/everlast_profile_img_transparent.png'} />
                        </a>
                        <h3 className="text-center">Page Not Found</h3>
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
export default NotFound