import { useState } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import FollowerInfo from '../FollowerInfo/FollowerInfo';
import EVA01 from '../../img/eva-profile-picture.png';
import './FollowersListStyles.css';
import { connect } from 'react-redux';

function FollowersList(props) {
  const [followerInformation, setFollowerInformation] = useState({});
  const [returnToList, setReturnToList] = useState(true);

  function changeUser(user) {
    axios
    .get(
      `https://api.github.com/users/${user}`, 
      {
        auth: {
          username: 'suforozinho',
          password: 'c50f3b7383f77626df8d8ae8a15b5a37c9b934db' // REMOVE THIS LATER
        }
      }
    )
    .then(response => {
      setFollowerInformation(response.data);
      setReturnToList(false);
    })
    .catch(err => console.log(err));
  }

  const sourceList = props.followingOrFollowers === 'seguidores' ? props.followers : props.following

  return (
    <div className="FollowersList">
      <div className="FollowersList__header" style={{display: !returnToList ? 'none' : 'block'}}>
        <i className="icon-left"></i>
        <div className="FollowersList__header__count">{sourceList.length} {props.followingOrFollowers}</div>
      </div>
      <div className="FollowersList__list" style={{display: !returnToList ? 'none' : 'block'}}>
        {sourceList.map(follower => (
          <div className="FollowersList__list__item" onClick={() => changeUser(follower.login)} key={follower.id}>
            <div className="FollowersList__list__item__user-info">
              <img src={follower.avatar_url} className="FollowersList__list__item__user-info__profile-picture" alt="user" />
              <div className="FollowersList__list__item__user-info__name">{follower.login}</div>
            </div>
            <i className="icon-right"></i>
          </div>
        ))}
      </div>
      <FollowerInfo
        userInformation={followerInformation}
        backButton={setReturnToList}
        style={{display: returnToList ? 'none' : 'block'}}
        getUser={props.getUser}
      />
      <NavBar />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    followers: state.followersList,
    following: state.followingList
  }
}

export default connect(mapStateToProps)(withRouter(FollowersList));