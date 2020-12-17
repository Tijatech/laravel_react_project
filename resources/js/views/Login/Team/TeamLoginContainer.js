import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import FlashMessage from 'react-flash-message';
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      error: '',
      formSubmitting: false,
      user: {
        email: '',
        password: '',
      },
      redirect: props.redirect,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState});
    }
  }
  componentDidMount() {
    const { prevLocation } = this.state.redirect.state || { prevLocation: { pathname: '/dashboard' } };
    if (prevLocation && this.state.isLoggedIn) {
      return this.props.history.push(prevLocation);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({formSubmitting: true});
    let userData = this.state.user;
    axios.post("/api/auth/login", userData).then(response => {
      return response;
    }).then(json => {
         if (json.data.success) {
           let userData = {
             id: json.data.id,
             name: json.data.name,
             email: json.data.email,
             access_token: json.data.access_token,
           };
           let appState = {
             isLoggedIn: true,
             user: userData
           };
           localStorage["appState"] = JSON.stringify(appState);
           this.setState({
              isLoggedIn: appState.isLoggedIn,
              user: appState.user,
              error: ''
           });
           location.reload()
         }
         else {
            alert(`Our System Failed To Register Your Account!`);
         }
    }).catch(error => {if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        let err = error.response.data;
        this.setState({
          error: err.message,
          errorMessage: err.errors,
          formSubmitting: false
        })
      }
      else if (error.request) {
        // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
        let err = error.request;
        this.setState({
          error: err,
          formSubmitting: false
        })
     } else {
       // Something happened in setting up the request that triggered an Error
       let err = error.message;
       this.setState({
         error: err,
         formSubmitting: false
       })
   }
 }).finally(this.setState({error: ''}));
}
handleEmail(e) {
  let value = e.target.value;
  this.setState(prevState => ({
    user: {
      ...prevState.user, email: value
    }
  }));
}
handlePassword(e) {
  let value = e.target.value;
  this.setState(prevState => ({
    user: {
      ...prevState.user, password: value
    }
  }));
}
render() {
  const { state = {} } = this.state.redirect;
  const { error } = state;
  return (
<div className="hk-wrapper">
  <div className="hk-pg-wrapper hk-auth-wrapper">
    <header className="d-flex justify-content-between align-items-center">
      <a className="d-flex auth-brand" href="#">
        <img className="brand-img d-inline-block" src="assets/img/everlast-portal-logo-admin.png" alt="brand" style={{width: '250px', margin: 'auto'}} />
      </a>
    </header>
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-5 pa-0">
          <div className="auth-cover-img overlay-wrap" style={{backgroundImage: 'url(assets/img/everlast_no_family_family.jpg)'}}>
            <div className="auth-cover-info py-xl-0 pt-100 pb-50">
              <div className="auth-cover-content w-xxl-75 w-sm-90 w-100">
                <h1 style={{fontWeight: 700, fontSize: '3rem'}} className="text-white mb-20">Grow Your Business<br />Change Lives</h1>
                <a href="/joinemployee" style={{padding: '.75rem 1.5rem', fontWeight: 600, fontSize: '22px'}} className="btn btn-gradient-success">Join Today!</a>
              </div>
            </div>
            <div className="bg-overlay bg-trans-dark-80" />
          </div>
        </div>
        <div className="col-xl-7 pa-0">
          <div className="auth-form-wrap py-xl-0 py-50">
            <div className="auth-form w-xxl-55 w-xl-75 w-sm-90 w-100">
            <img style={{width: '290px', margin: 'auto', display: 'block'}} src="assets/img/everlast_profile_img_transparent.png" /><a className="auth-brand text-center d-block mb-20" href="#">
              </a>
              <h1 className="text-center mb-20">Team Member Login</h1>
              {this.state.isLoggedIn ? <FlashMessage duration={60000} persistOnHover={true}>
              <h5 className={"alert alert-success"}>Login successful, redirecting...</h5></FlashMessage> : ''}
              {this.state.error ? <FlashMessage duration={100000} persistOnHover={true}>
              <h5 className={"alert alert-danger"}>Error: {this.state.error}</h5></FlashMessage> : ''}
              {/* {error && !this.state.isLoggedIn ? <FlashMessage duration={100000} persistOnHover={true}>
              <h5 className={"alert alert-danger"}>Error: {error}</h5></FlashMessage> : ''} */}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <input className="form-control" name="email" placeholder="Email" type="text" onChange={this.handleEmail} />
                </div>
                <div className="form-group">
                  <div className="input-group">
                  <input className="form-control" name="password" placeholder="Password" type="password" onChange={this.handlePassword} />
                  </div>
                </div>
                <div className="custom-control custom-checkbox mb-25">
                  <input className="custom-control-input" id="same-address" type="checkbox" defaultChecked />
                  <label className="custom-control-label font-14" htmlFor="same-address">Keep me logged in</label>
                </div>
                <input className="btn btn-primary btn-block" disabled={this.state.formSubmitting} type="submit" defaultValue="Login" style={{backgroundColor: '#18a809', borderColor: '#18a809'}} />
                <p id="login-status-message" />
                <p className="font-14 text-center mt-15"><a href="/admin_login">Admin</a> or <a href="/tpv_login">TPV Agent</a>?  Login <a href="/">here</a>.</p>
                <p className="font-14 text-center mt-15"><a href="ResetPasswordEmailPage.php?agent=1">Forget Password</a>
                </p><div className="option-sep">or</div>
                <p className="text-center">Not a Part of the Team? <a href="/joinemployee">Join Us Now!</a></p>
              </form>
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
export default withRouter(LoginContainer);