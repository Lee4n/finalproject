import React, {Component} from "react";
import API from "../../utils/API";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
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
        let {name, email, username, password} = this.state;

        let newUser = {
            name: name,
            email: email,
            username: username,
            password: password
        }
        event.preventDefault();
        API.createUser(newUser).then(function(res) {
            API.userLogin(res)
        });
      }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input value={this.state.name} onChange={(e) => this.handleChange("name", e)} type="text" class="form-control" id="staticName"/>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input value={this.state.email} onChange={(e) => this.handleChange("email", e)} type="email" class="form-control" id="staticEmail"/>
            </div>
          </div>
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
          <button type="submit" onClick={this.register} class="btn btn-primary mb-2">Create Account</button>
        </form>
      </div>
    )
  }
}

export default SignUp;