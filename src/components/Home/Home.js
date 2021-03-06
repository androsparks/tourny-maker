import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Home.css';

function Home({ user }) {
  if (!user.isLogged) {
    return (
      <div className="home">
        <div className="intro-paragraph">
          <h1>Welcome to <span className="Source-Sans">TOURNY MAKER</span></h1>
          <div className="home-highlights Source-Sans">
            <div><h3>Create and manage tournaments</h3></div>
            <div><h3>Create and manage teams</h3></div>
            <div><h3>and more...</h3></div>
          </div>
          <div className="user-btns">
            <Link to="/sign-up">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </div>
          <div className="for-user-demo">
            <h4>
              For a quick demo as a <span>CREATOR</span> enter the following email and password.<br />
            <span>Email:</span> dorian@mail.com | <span>Password:</span> Password1
            </h4>
            <h4>
              For a quick demo as a <span>PLAYER</span> enter the following email and password.<br />
            <span>Email:</span> ray@mail.com | <span>Password:</span> Password1
            </h4>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="home">
      <div className="home-nav">
        <div className="home-nav-info">
          {user.role === 'CREATOR' &&
            <Link to="/create-tournament">
              <div className="home-nav-card-1">
                <div className="home-nav-image">
                  <h4>Create a Tournament</h4>
                </div>
              </div>
            </Link>}
          {user.role === 'PLAYER' &&
            <Link to="/search-tournament">
              <div className="home-nav-card-2">
                <div className="home-nav-image">
                  <h4>Look for Tournament</h4>
                </div>
              </div>
            </Link>}
          {user.role === 'CREATOR'
            ? <Link to="/me/tournaments">
                <div className="home-nav-card-3">
                  <div className="home-nav-image">
                    <h4>Tournament Dashboard</h4>
                  </div>
                </div>
              </Link>
            : <Link to="/me/teams">
                <div className="home-nav-card-3">
                  <div>
                    <h4>Team Dashboard</h4>
                  </div>
                </div>
              </Link>}
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  user: state.user,
}))(Home);
