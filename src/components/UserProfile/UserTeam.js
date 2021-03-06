import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';

class UserTeam extends Component {
  componentDidMount() {
    this.props.getTeamByUserId(localStorage.getItem('_id'));
  }

  toTournament(id) {
    this.props.history.push(`/tournament-id/${id}`);
  }

  toSearchTournament(){
    this.props.history.push('/search-tournament');
  }

  render() {
    if (!this.props.team.teams) {
      return <h1>Loading...</h1>;
    }

    const teamsInfo = this.props.team.teams.map(teamInfo =>
      <div key={teamInfo._id} className="my-team-info">
        <div className="team-name">
          <h2 className="Source-Sans">
            {teamInfo.teamName}
          </h2>
        </div>
        <div className="team-tournament">
          <button
            className="team-btn"
            onClick={this.toTournament.bind(
              this,
              teamInfo.tournament,
            )}
            >
            Go to tournament
          </button>
        </div>
      </div>,
    );

    return (
      <div className="my-team-stats">
        {(teamsInfo.length !== 0)
          ?
          <main>
            {teamsInfo}
          </main>
          :
          <div className="no-team-wrapper">
            <div className="no-teams">
              <h1>You don't have registered teams yet</h1>
              <article>
                So what are you waiting for?
                Let's find a tournament for you and your team to conquer it!
              </article>
              <button onClick={() => this.toSearchTournament()}>Search for tournament</button>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ team }) => ({
  team: team.teams,
});

export default withRouter(
  connect(mapStateToProps, actions)(UserTeam),
);
