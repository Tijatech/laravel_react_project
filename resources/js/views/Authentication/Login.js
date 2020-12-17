import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import FlashMessage from 'react-flash-message';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      error: '',
      formSubmitting: false,
      user: {
        username: '',
        password: '',
      },
      redirect: props.location,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState.user});
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
    console.log(userData)
    axios.post("/api/auth/login", userData).then(response => {
      return response;
    }).then(json => {
         if (json.data.success) {
           let userData = {
             id: json.data.id,
             username: json.data.username,
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
handleName(e) {
  let value = e.target.value;
  this.setState(prevState => ({
    user: {
      ...prevState.user, username: value
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 pa-0">
              <div className="auth-form-wrap pt-xl-0 pt-70">
                <div className="auth-form w-xl-30 w-lg-55 w-sm-75 w-100">
                  <img style={{width: '290px', margin: 'auto', display: 'block'}} src={location.origin + '/assets/img/everlast_profile_img_transparent.png' } /><a className="auth-brand text-center d-block mb-20" href="#">
                  </a>
                  <h3 style={{color: '#18a809', textAlign: 'center', marginBottom: '40px'}}>Everlast Portal Login</h3>
                  {this.state.isLoggedIn ? <FlashMessage duration={6000} persistOnHover={true}>
                  <h6 className={"alert alert-success"}>Login successful, redirecting...</h6></FlashMessage> : ''}
                  {this.state.error ? <FlashMessage duration={100000} persistOnHover={true}>
                  <h5 className={"alert alert-danger"}>Error: {this.state.error}</h5></FlashMessage> : ''}
                  {/* {error && !this.state.isLoggedIn ? <FlashMessage duration={100000} persistOnHover={true}>
                  <h5 className={"alert alert-danger"}>Error: {error}</h5></FlashMessage> : ''} */}
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input className="form-control" name="username" placeholder="Username" type="text" onChange={this.handleName} />
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
                    <p className="font-14 text-center mt-15"><Link to="/team_login">Team Member</Link> or <Link to="/tpv_login">TPV Agent</Link>?  Login <Link to="/">here</Link>.</p>
                    {/*        <p class="font-14 text-center mt-15"><a href="ResetPasswordEmailPage.php?admin=1">Forget Password</a>*/}
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
export default withRouter(Login);