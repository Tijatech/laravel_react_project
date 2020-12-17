import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import FlashMessage from 'react-flash-message';
class Register extends Component {
  // 2.1
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      error: '',
      errorMessage: '',
      formSubmitting: false,
      user: {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    },
    redirect: props.location,
};
this.handleSubmit = this.handleSubmit.bind(this);
this.handleName = this.handleName.bind(this);
this.handleEmail = this.handleEmail.bind(this);
this.handlePassword = this.handlePassword.bind(this);
this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
}
// 2.2
// componentWillMount, componentDidMount etc etc that have //componentStuffStuff are known as React Lifecycles which of course //you already know 
componentWillMount() {
  let state = localStorage["appState"];
  if (state) {
    let AppState = JSON.parse(state);
    this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState});
  }
  if (this.state.isRegistered) {
    return this.props.history.push("/dashboard");
  }
}
// 2.3
componentDidMount() {
  const { prevLocation } = this.state.redirect.state || {prevLocation: { pathname: '/dashboard' } };
  if (prevLocation && this.state.isLoggedIn) {
    return this.props.history.push(prevLocation);
  }
}
// 2.4
handleSubmit(e) {
  e.preventDefault();
  this.setState({formSubmitting: true});
  ReactDOM.findDOMNode(this).scrollIntoView();
  let userData = this.state.user;
  axios.post("/api/auth/signup", userData)
    .then(response => {
      return response;
  }).then(json => {
      if (json.data.success) {
        let userData = {
          id: json.data.id,
          name: json.data.username,
          email: json.data.email,
          activation_token: json.data.activation_token,
        };
        let appState = {
          isRegistered: true,
          user: userData
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState({
          isRegistered: appState.isRegistered,
          user: appState.user
        });
      } else {
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
  console.log(value)
  this.setState(prevState => ({
    user: {
      ...prevState.user, username: value
    }
  }));
}
// 2.5
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
handlePasswordConfirm(e) {
  let value = e.target.value;
  this.setState(prevState => ({
    user: {
      ...prevState.user, password_confirmation: value
    }
  }));
}
render() {
  // 2.6
  let errorMessage = this.state.errorMessage;
  let arr = [];
  Object.values(errorMessage).forEach((value) => (
    arr.push(value)
  ));
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
                  <h3 style={{color: '#18a809', textAlign: 'center', marginBottom: '40px'}}>Create An Account</h3>
                  {this.state.isRegistered ? <FlashMessage duration={60000} persistOnHover={true}>
                    <h5 className={"alert alert-success"}>Registration successful, redirecting...</h5></FlashMessage> : ''}
                  {this.state.error ? <FlashMessage duration={900000} persistOnHover={true}>
                    <h5 className={"alert alert-danger"}>Error: {this.state.error}</h5>
                    <ul>
                      {arr.map((item, i) => (
                        <li key={i}><h5 style={{color: 'red'}}>{item}</h5></li>
                      ))}
                    </ul></FlashMessage> : ''}
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <input id="username" type="text" name="username" placeholder="Name" className="form-control" required onChange={this.handleName}/>
                      </div>
                      <div className="form-group">
                        <input id="email" type="email" name="email" placeholder="E-mail" className="form-control" required onChange={this.handleEmail}/>
                      </div>
                      <div className="form-group">
                        <input id="password" type="password" name="password" placeholder="Password" className="form-control" required onChange={this.handlePassword}/>
                      </div>
                      <div className="form-group">
                        <input id="password_confirm" type="password" name="password_confirm" placeholder="Confirm Password" className="form-control" required onChange={this.handlePasswordConfirm} />
                      </div>
                      <input className="btn btn-primary btn-block" disabled={this.state.formSubmitting} type="submit" defaultValue="Register" style={{backgroundColor: '#18a809', borderColor: '#18a809'}} />
                    </form>
                    <p className="mt-2">Already have an account? <Link to="/authenticate/login" className="text-yellow"> Log In</Link> |
                      <span><Link to="/"> Back to Home</Link></span>
                    </p>
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
// 2.8
export default withRouter(Register);