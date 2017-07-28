import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../actions/userActions';
import './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    try {
      this.props.dispatch(signUp(this.state));
      this.props.history.push('/');
    } catch (err) {
      throw(err);
    }
  };

  userInfo = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="login">
        <div>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="firstName">Name</label>
            <input
              onChange={this.userInfo}
              value={this.state.firstName}
              name="firstName"
              type="text"
              required
            />
            <label htmlFor="lastName">Last name</label>
            <input
              onChange={this.userInfo}
              value={this.state.lastName}
              name="lastName"
              type="text"
              required
            />
            <label htmlFor="userName">Username</label>
            <input
              onChange={this.userInfo}
              value={this.state.userName}
              name="userName"
              type="text"
              required
            />
            <label htmlFor="email">E-mail</label>
            <input
              onChange={this.userInfo}
              value={this.state.email}
              name="email"
              type="email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={this.userInfo}
              value={this.state.password}
              name="password"
              type="password"
              required
            />
            <label htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              onChange={this.userInfo}
              value={this.state.confirmPassword}
              name="confirmPassword"
              type="password"
              required
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(SignUp);
