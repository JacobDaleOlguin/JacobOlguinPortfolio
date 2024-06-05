import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoJ from '../../assets/images/LogoJ.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoJ} alt="logo" />
      <span>Jacob Olguin</span>
    </Link>
    <nav>
      <NavLink
        exact="true"
        activeclassname="active"
        className="home-link"
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jacob-olguin-a29706137/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#0072b1" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/JacobDaleOlguin"
        >
          <FontAwesomeIcon icon={faGithub} color="#ddd" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
