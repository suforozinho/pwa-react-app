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
        `https://api.github.com/users/${action.payload.username}`
      )
      .then(response => {
        newState.currentUserInformation = response.data;
    
        axios
        .get(
          response.data.repos_url
        )
        .then(response => {
          newState.repositoryList = response.data;
        })
        .catch(err => console.log(err));
    
        axios
        .get(
          response.data.followers_url
        )
        .then(response => {
          newState.followersList = response.data;
        })
        .catch(err => console.log(err));
    
        axios
        .get(
          `https://api.github.com/users/${action.payload.username}/following`
        )
        .then(response => {
          newState.followingList = response.data;
        })
        .catch(err => console.log(err));
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
