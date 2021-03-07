import Login from './components/Login/Login';
import UserInfo from './components/UserInfo/UserInfo';
import RepositoryList from './components/RepositoryList/RepositoryList';
import FollowersList from './components/FollowersList/FollowersList';
import { Route, withRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="containerWrapper">
      <div className="container">
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user">
          <UserInfo />
        </Route>
        <Route path="/repos">
          <RepositoryList />
        </Route>
        <Route path="/followers">
          <FollowersList followingOrFollowers={'seguidores'} />
        </Route>
        <Route path="/following">
          <FollowersList followingOrFollowers={'seguindo'} />
        </Route>
      </div>
    </div>
  );
}

export default withRouter(App);
