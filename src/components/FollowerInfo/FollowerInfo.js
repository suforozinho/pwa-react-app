import EVA01 from '../../img/eva-profile-picture.png';
import NavBar from '../NavBar/NavBar';
import './FollowerInfoStyles.css';
import { connect } from 'react-redux';
import { getWholeUserInfo } from '../../redux/action.js';
import { withRouter } from 'react-router-dom';

function FollowerInfo(props) {
  return (
    <div className="UserInfo">
      <div className="UserInfo__header">
        <div className="UserInfo__header__back" onClick={() => props.backButton(true)}><i className="icon-left"></i></div>
        <div className="UserInfo__header__username">{props.userInformation.login}</div>
        <div className="UserInfo__header__exit" onClick={() => props.getWholeUserInfo(props.userInformation.login, props.history.push)}>Salvar <i className="icon-login"></i></div>
      </div>
      <div className="UserInfo__content">
        <div className="UserInfo__content__profile">
          <img src={props.userInformation.avatar_url} className="UserInfo__content__profile__picture" alt="EVA-01" />
        </div>
        <div className="UserInfo__content__header">
          <h1 className="UserInfo__content__header__name">{props.userInformation.name}</h1>
          <div className="UserInfo__content__header__extra-info">{props.userInformation.email}</div>
          <div className="UserInfo__content__header__extra-info">{props.userInformation.location}</div>
        </div>
        <div className="UserInfo__content__navbar">
          <div className="UserInfo__content__navbar__item">
            <div className="UserInfo__content__navbar__item__number">{props.userInformation.followers}</div>
            <div className="UserInfo__content__navbar__item__text">Seguidores</div>
          </div>
          <div className="UserInfo__content__navbar__item">
            <div className="UserInfo__content__navbar__item__number">{props.userInformation.following}</div>
            <div className="UserInfo__content__navbar__item__text">Seguindo</div>
          </div>
          <div className="UserInfo__content__navbar__item">
            <div className="UserInfo__content__navbar__item__number">{props.userInformation.public_repos}</div>
            <div className="UserInfo__content__navbar__item__text">Repos</div>
          </div>
        </div>
        <div className="UserInfo__content__bio">
          <h1 className="UserInfo__content__bio__title">BIO</h1>
          <div className="UserInfo__content__bio__text">
            {
            props.userInformation.bio ? props.userInformation.bio
            : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.'}
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default connect(null, { getWholeUserInfo })(withRouter(FollowerInfo));