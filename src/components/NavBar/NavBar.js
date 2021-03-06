import { Link, useLocation } from "react-router-dom";
import './NavBarStyles.css';

function NavBar() {
  const location = useLocation();

  return (
    <div className="NavBar">
      <Link to="/user" className={`home ${location.pathname === '/user' ? 'active' : ''}`}>
        <i className="icon-home"></i>
        Home
      </Link>
      <Link to="/repos" className={`repos ${location.pathname === '/repos' ? 'active' : ''}`}>
        <i className="icon-github"></i>
        Repos
      </Link>
      <Link to="/followers" className={`followers ${location.pathname === '/followers' ? 'active' : ''}`}>
        <i className="icon-adult"></i>
        Followers
      </Link>
      <Link to="/following" className={`following ${location.pathname === '/following' ? 'active' : ''}`}>
        <i className="icon-adult"></i>
        Following
      </Link>
    </div>
  )
}

export default NavBar