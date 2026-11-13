import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar({ onShowDetails }) {
  function scrollToSection(event, sectionId) {
    event.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <Link className="navbar__brand" to="/" aria-label="Conference Expense Planner home">
        <span className="navbar__brand-mark" aria-hidden="true">B</span>
        <span>Conference Expense Planner</span>
      </Link>
      <nav className="navbar__links" aria-label="Planner sections">
        <a href="#venue" onClick={(event) => scrollToSection(event, 'venue')}>
          Venue
        </a>
        <a href="#addons" onClick={(event) => scrollToSection(event, 'addons')}>
          Add-ons
        </a>
        <a href="#meals" onClick={(event) => scrollToSection(event, 'meals')}>
          Meals
        </a>
      </nav>
      <button className="button button--gold navbar__details" onClick={onShowDetails}>
        Show Details
      </button>
    </header>
  )
}

export default Navbar
