import React, {Component} from "react";
import API from "../../utils/API";
import Nav from "../Nav";
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(field, event) {
        this.setState({[field]: event.target.value});
      }
      
      handleSubmit(event) {
        let {username, password} = this.state;
        const self = this
        let newUser = {
            username: username,
            password: password
        }
        event.preventDefault();
        API.userLogin(newUser).then(function() {
          self.setState({
            redirect: "/"
          })
          self.props.loginTrue()
        })
      }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect}/>
    }
    return (
      <div>
        <Nav isLoggedIn={this.props.isLoggedIn}/>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label for="inputUsername" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input value={this.state.username} onChange={(e) => this.handleChange("username", e)} type="username" className="form-control" id="inputUsername"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input value={this.state.password} onChange={(e) => this.handleChange("password", e)} type="password" className="form-control" id="inputPassword"/>
            </div>
          </div>
          <button type="submit" onClick={this.login} className="btn btn-primary mb-2">Login</button>
          <p>Not a user? <a className="text-primary"href="/register">Create an account</a> </p>

        </form>
      </div>
    )
  }
}

export default Login;