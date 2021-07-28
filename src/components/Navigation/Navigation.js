import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

const Navigation = () => (
  <nav>
     
    <NavLink exact to='/' className={css.navLink} activeClassName={css.navLinkactive}>Home</NavLink>
        <NavLink  to='/movies' className={css.navLink} activeClassName={css.navLinkactive}>Movies</NavLink>
        <hr />   
  </nav>
  
)
export default Navigation;