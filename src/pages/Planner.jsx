import { useState } from 'react'
import AddonsSection from '../components/AddonsSection.jsx'
import DetailsModal from '../components/DetailsModal.jsx'
import MealsSection from '../components/MealsSection.jsx'
import Navbar from '../components/Navbar.jsx'
import VenueSection from '../components/VenueSection.jsx'
import '../styles/Planner.css'

function Planner() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  return (
    <div className="planner-page">
      <Navbar onShowDetails={() => setIsDetailsOpen(true)} />
      <main className="planner-main">
        <section className="planner-intro">
          <p className="planner-intro__eyebrow">BUDGETEASE EVENT STUDIO</p>
          <h1>Make a plan worth gathering for.</h1>
          <p>
            Choose your venue, production essentials, and meals. Your estimate
            updates as you build.
          </p>
        </section>
        <VenueSection />
        <AddonsSection />
        <MealsSection />
        <footer className="planner-footer">
          <span>BudgetEase Solutions</span>
          <span>All prices shown in USD</span>
        </footer>
      </main>
      {isDetailsOpen && (
        <DetailsModal onClose={() => setIsDetailsOpen(false)} />
      )}
    </div>
  )
}

export default Planner
