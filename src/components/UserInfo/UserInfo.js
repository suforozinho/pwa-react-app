import EVA01 from '../../img/eva-profile-picture.png';
import NavBar from '../NavBar/NavBar';
import './UserInfoStyles.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// FIX PFP POSITIONING PROBLEM IN DIFFERENT SCREENS!!!

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <div className="UserInfo__header">
        <div className="UserInfo__header__username">{props.userInfo.login}</div>
        <div className="UserInfo__content__profile">
          <img src={props.userInfo.avatar_url} className="UserInfo__content__profile__picture" alt="EVA-01" />
        </div>
        <Link to="/login" className="UserInfo__header__exit">Sair <i className="icon-logout"></i></Link>
      </div>
      <div className="UserInfo__content">
        <div className="UserInfo__content__header">
          <h1 className="UserInfo__content__header__name">{props.userInfo.name}</h1>
          <div className="UserInfo__content__header__extra-info">{props.userInfo.email}</div>
          <div className="UserInfo__content__header__extra-info">{props.userInfo.location}</div>
        </div>
        <div className="UserInfo__content__navbar">
          <div className="UserInfo__content__navbar__item">
            <div className="UserInfo__content__navbar__item__number">{props.userInfo.followers}</div>
            <div className="UserInfo__content__navbar__item__text">Seguidores</div>
          </div>
          <div className="UserInfo__content__navbar__item">
            <div className="UserInfo__content__navbar__item__number">{props.userInfo.following}</div>
            <div className="UserInfo__content__navbar__item__text">Seguindo</div>
          </div>
          <div className="UserInfo__content__navbar__item">
            <div className="UserInfo__content__navbar__item__number">{props.userInfo.public_repos}</div>
            <div className="UserInfo__content__navbar__item__text">Repos</div>
          </div>
        </div>
        <div className="UserInfo__content__bio">
          <h1 className="UserInfo__content__bio__title">BIO</h1>
          <div className="UserInfo__content__bio__text">
            {
            props.userInfo.bio ? props.userInfo.bio
            : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.'}
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    userInfo: state.currentUserInformation
  }
}

export default connect(mapStateToProps)(UserInfo);