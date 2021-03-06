import axios from 'axios';
import { useState } from 'react';
import Login from './components/Login/Login';
import UserInfo from './components/UserInfo/UserInfo';
import RepositoryList from './components/RepositoryList/RepositoryList';
import FollowersList from './components/FollowersList/FollowersList';
import { Route, withRouter } from "react-router-dom";
import './App.css';

function App(props) {
  const [currentUserInformation, setCurrentUserInformation] = useState({});
  const [repositoryList, setRepositoryList] = useState([]);
  const [followersList, setFollowersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  
  function getUser(username) {
    axios
    .get(
      `https://api.github.com/users/${username}`, 
      {
        auth: {
          username: 'suforozinho',
          password: 'c50f3b7383f77626df8d8ae8a15b5a37c9b934db' // REMOVE THIS LATER
        }
      }
    )
    .then(response => {
      setCurrentUserInformation(response.data);
      props.history.push('/user');

      axios
      .get(
        response.data.repos_url, 
        {
          auth: {
            username: 'suforozinho',
            password: 'c50f3b7383f77626df8d8ae8a15b5a37c9b934db' // REMOVE THIS LATER
          }
        }
      )
      .then(response => {
        setRepositoryList(response.data);
      })
      .catch(err => console.log(err));

      axios
      .get(
        response.data.followers_url, 
        {
          auth: {
            username: 'suforozinho',
            password: 'c50f3b7383f77626df8d8ae8a15b5a37c9b934db' // REMOVE THIS LATER
          }
        }
      )
      .then(response => {
        setFollowersList(response.data);
      })
      .catch(err => console.log(err));

      axios
      .get(
        `https://api.github.com/users/${username}/following`, 
        {
          auth: {
            username: 'suforozinho',
            password: 'c50f3b7383f77626df8d8ae8a15b5a37c9b934db' // REMOVE THIS LATER
          }
        }
      )
      .then(response => {
        setFollowingList(response.data);
        console.log('followers', response.data);
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="containerWrapper">
      <div className="container">
        <Route path="/login">
          <Login getUser={getUser} />
        </Route>
        <Route path="/user">
          <UserInfo userInformation={currentUserInformation} />
        </Route>
        <Route path="/repos">
          <RepositoryList repositories={repositoryList} />
        </Route>
        <Route path="/followers">
          <FollowersList follow={followersList} followingOrFollowers={'seguidores'} getUser={getUser} changeCurrentUserInformation={setCurrentUserInformation} />
        </Route>
        <Route path="/following">
          <FollowersList follow={followingList} followingOrFollowers={'seguindo'} getUser={getUser} changeCurrentUserInformation={setCurrentUserInformation} />
        </Route>
      </div>
    </div>
  );
}

export default withRouter(App);
