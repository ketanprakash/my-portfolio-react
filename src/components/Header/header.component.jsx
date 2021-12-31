import { Link } from 'react-router-dom';
import './header.styles.scss'
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  return (
    <div className="header">
      <div className="description">
        <img className="image" src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" alt="Profile" onClick={() => navigate('/')}/>
        <span className="name">Ketan Prakash</span>
      </div>
      <div className="options">
        <Link to='/' className={`option ${pathName==='/' ? 'option-focus':''}`}>
          ABOUT ME
        </Link>
        <Link to='/academics' className={`option ${pathName==='/academics' ? 'option-focus':''}`}>
          ACADEMICS
        </Link>
        <Link to='/projects' className={`option ${pathName==='/projects' ? 'option-focus':''}`}>
          MY PROJECTS
        </Link>
        {/* <Link className="option">
          WORK EXPERIENCE
        </Link>       */}
        <Link to='/contact' className={`option ${pathName==='/contact' ? 'option-focus':''}`}>
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Header;