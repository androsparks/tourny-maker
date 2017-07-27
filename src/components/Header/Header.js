import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';
import * as actions from '../../actions';

class Header extends Component {
  userLogout = async () => {
    try {
      await this.props.logout();
      this.props.history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <nav>
        <Link to="/">
          <h1 className="Anton">Tourney Maker</h1>
        </Link>
        {this.props.isLogged
          ? <ul>
              <li>
                {this.props.user}
              </li>
              <li onClick={this.userLogout}>Logout</li>
            </ul>
          : <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            </ul>}
      </nav>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    isLogged: user.isLogged,
    user: user.userName,
  };
};

export default connect(mapStateToProps, actions)(Header);
