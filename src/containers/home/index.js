import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { loadInitialProfiles } from '../../modules/profiles';
import Nav from '../../components/nav';

const Home = props => {
  const { profileItems, loadInitialProfiles } = props;

  return (
    <div>
      <Nav />

      <div className="mainContent">
        <h1>Profiles</h1>
        <button onClick={loadInitialProfiles}>Click here to load profiles(remove this button)</button>

        <ul>
          {_.map(profileItems, item => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  profileItems: state.profiles.items,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadInitialProfiles,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
