
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/articles">Article</Link></li>
        </ul>
    </nav>
  )
}
