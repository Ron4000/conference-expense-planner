import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar({ onShowDetails }) {
  return (
    <header className="navbar">
      <Link className="navbar__brand" to="/" aria-label="Conference Expense Planner home">
        <span className="navbar__brand-mark" aria-hidden="true">B</span>
        <span>Conference Expense Planner</span>
      </Link>
      <nav className="navbar__links" aria-label="Planner sections">
        <a href="#venue">Venue</a>
        <a href="#addons">Add-ons</a>
        <a href="#meals">Meals</a>
      </nav>
      <button className="button button--gold navbar__details" onClick={onShowDetails}>
        Show Details
      </button>
    </header>
  )
}

export default Navbar
