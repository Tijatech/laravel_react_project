import React, {Component} from 'react';
import TPVLoginContainer from './TPVLoginContainer';
import {withRouter} from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: props.location,
    };
  }
  render() {
    return (
      <div className="content">
        <TPVLoginContainer redirect={this.state.redirect} />
      </div>
    )
  }
}
export default withRouter(Login)
