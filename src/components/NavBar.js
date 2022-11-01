import {Link, NavLink, useNavigate} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="account">Account</NavLink></li>
        <li><Link to="catalogue">Catalogue</Link></li>
        <li><Link to="support">Support</Link></li>
      </ul>
      <button onClick={() => navigate(-1)}>Go back</button>
    </nav>
  )
}

export default NavBar