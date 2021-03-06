import NavBar from '../NavBar/NavBar';
import './RepositoryListStyles.css';

function RepositoryList(props) {
  console.log('props de repositorio', props);

  return (
    <div className="RepositoryList">
      <div className="RepositoryList__header">
        <i className="icon-left"></i>
        <div className="RepositoryList__header__count">{props.repositories.length} repositórios</div>
      </div>
      <div className="RepositoryList__list">
        {props.repositories.map((repository) => (
          <div className="RepositoryList__item" key={repository.id}>
            <div className="RepositoryList__item__title">{repository.name}</div>
            <div className="RepositoryList__item__desc">{repository.description}</div>
            <div className="RepositoryList__item__stars-and-permission">
              <div className="star-count">
                <i className="icon-star-empty"></i>
                {repository.stargazers_count}
              </div>
              <div className="the-locks">
                {repository.private ? <i className="icon-lock"></i> : <i className="icon-lock-open"></i>}
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <NavBar />
    </div>
  )
}

export default RepositoryList;