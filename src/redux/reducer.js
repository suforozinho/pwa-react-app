import axios from 'axios';

const initalState = {
  currentUserInformation: {},
  repositoryList: [],
  followersList: [],
  followingList: []
};


export default function loginReducer(state = initalState, action) {
  switch (action.type) {
    case 'GET_WHOLE_USER_INFO': {
      let newState = {
        currentUserInformation: {},
        repositoryList: [],
        followersList: [],
        followingList: []
      }
      axios
      .get(
        `https://api.github.com/users/${action.payload.username}`, 
        {
          auth: {
            username: 'suforozinho',
            password: 'c50f3b7383f77626df8d8ae8a15b5a37c9b934db' // REMOVE THIS LATER
          }
        }
      )
      .then(response => {
        newState.currentUserInformation = response.data;
        // props.history.push('/user');
    
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
          newState.repositoryList = response.data;
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
          newState.followersList = response.data;
        })
        .catch(err => console.log(err));
    
        axios
        .get(
          `https://api.github.com/users/${action.payload.username}/following`, 
          {
            auth: {
              username: 'suforozinho',
              password: 'c50f3b7383f77626df8d8ae8a15b5a37c9b934db' // REMOVE THIS LATER
            }
          }
        )
        .then(response => {
          newState.followingList = response.data;
          // console.log('followers', response.data);
        })
        .catch(err => console.log(err));
        console.log(newState);
        setTimeout(() => action.payload.changeRouteTo('/user'), 500);
        return newState;
      })
      .catch(err => console.log(err));

      return newState;
    }
    default:
      return state
  }
}
