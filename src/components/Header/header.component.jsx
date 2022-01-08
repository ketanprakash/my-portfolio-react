import { Link } from 'react-router-dom';
import './header.styles.scss'
import { useLocation, useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <div className="header">
      <div className="description">
        <div className="image" onClick={() => navigate('/')}/>
        <span className="name">Ketan Prakash</span>
      </div>
      <div className="options">
        <Link to='/' className={`option ${pathname==='/' ? 'option-focus':''}`}>
          ABOUT ME
        </Link>
        {/* <Link to='/academics' className={`option ${pathname==='/academics' ? 'option-focus':''}`}>
          ACADEMICS
        </Link> */}
        <Link to='/projects' className={`option ${pathname==='/projects' ? 'option-focus':''}`}>
          MY PROJECTS
        </Link>
        {/* <Link className="option">
          WORK EXPERIENCE
        </Link>       */}
        {/* <Link to='/contact' className={`option ${pathname==='/contact' ? 'option-focus':''}`}>
          CONTACT ME
        </Link> */}
      </div>
    </div>
  )
}

export default Header;