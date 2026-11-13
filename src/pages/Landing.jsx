import { Link } from 'react-router-dom'
import { LANDING_BACKGROUND_URL } from '../data/products.js'
import '../styles/Landing.css'

function Landing() {
  return (
    <main
      className="landing"
      style={{ '--landing-image': `url("${LANDING_BACKGROUND_URL}")` }}
    >
      <div className="landing__content">
        <section className="landing__intro">
          <div className="landing__brand">
            <span className="landing__brand-mark" aria-hidden="true">B</span>
            <span>BudgetEase Solutions</span>
          </div>
          <p className="landing__eyebrow">Thoughtful planning. Clear budgets.</p>
          <h1>Conference Expense Planner</h1>
          <p className="landing__subtitle">
            Plan your next major event with us!
          </p>
          <Link className="button button--gold landing__cta" to="/planner">
            Get Started <span aria-hidden="true">→</span>
          </Link>
        </section>
        <section className="landing__about">
          <span className="landing__about-rule" aria-hidden="true" />
          <p className="landing__about-label">ABOUT BUDGETEASE</p>
          <h2>BudgetEase Solutions</h2>
          <p>
            BudgetEase Solutions is a trusted partner in simplifying budget
            management and financial solutions, with a commitment to efficiency
            and innovation, and a mission to make budgeting effortless and
            accessible for small business owners, busy professionals, and
            individuals.
          </p>
        </section>
      </div>
      <footer className="landing__footer">
        <span>PLAN WITH PURPOSE</span>
        <span>© BudgetEase Solutions</span>
      </footer>
    </main>
  )
}

export default Landing
