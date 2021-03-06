import GithubLogo from '../../img/github-logo.png';
import '../../font-icons/css/fontello.css'
import './LoginStyles.css';
import { useState } from 'react';

function Login(props) {
  const [searchUserText, setSearchUserText] = useState('');
  const [someError, setSomeError] = useState('');

  function getUser(username) {
    if (!username) {
      setSomeError('Campo obrigatório');
      return;
    }
    setSomeError('');
    props.getUser(username);
  }

  return (
    <div className="Login">
      <div className="Login__githubLogo">
        <img src={GithubLogo} className="Login__githubLogo__photo" alt="github logo"/>
      </div>
      <div className="Login__usernameForm">
        <div className="Login__usernameForm__input-and-span">
          <input
            type="text"
            value={searchUserText}
            onChange={e => setSearchUserText(e.target.value)}
            placeholder="Usuário"
            className="Login__usernameForm__usernameInput" />
          <span className="Login__usernameForm__spanError" style={{ display: someError ? 'flex' : 'none' }}>
            {someError}
          </span>
        </div>
        <button onClick={() => getUser(searchUserText)} className="Login__usernameForm__enterButton">
          ENTRAR <i className="icon-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Login;