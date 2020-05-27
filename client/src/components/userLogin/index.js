import React, {Component} from "react";
import API from "../../utils/API";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(field, event) {
        this.setState({[field]: event.target.value});
      }
    
      handleSubmit(event) {
        let {username, password} = this.state;

        let newUser = {
            username: username,
            password: password
        }
        event.preventDefault();
        API.userLogin(newUser)
      }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group row">
            <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-10">
              <input value={this.state.username} onChange={(e) => this.handleChange("username", e)} type="username" class="form-control" id="inputUsername"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input value={this.state.password} onChange={(e) => this.handleChange("password", e)} type="password" class="form-control" id="inputPassword"/>
            </div>
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary mb-2">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;