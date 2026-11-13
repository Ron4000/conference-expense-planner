import { useDispatch, useSelector } from 'react-redux'
import { decrementAddon, incrementAddon } from '../store/addonsSlice.js'
import { selectAddonsTotal } from '../store/selectors.js'
import QuantityCard from './QuantityCard.jsx'
import TotalBox from './TotalBox.jsx'
import '../styles/AddonsSection.css'

function AddonsSection() {
  const dispatch = useDispatch()
  const addons = useSelector((state) => state.addons.items)
  const total = useSelector(selectAddonsTotal)

  return (
    <section className="planner-section" id="addons">
      <div className="section-heading">
        <span className="section-heading__eyebrow">02 / PRODUCTION</span>
        <h2>Add-ons Selection</h2>
        <p>Bring your presentations and event details to life.</p>
      </div>
      <div className="product-grid">
        {addons.map((addon) => (
          <QuantityCard
            key={addon.id}
            item={addon}
            onIncrement={() => dispatch(incrementAddon(addon.id))}
            onDecrement={() => dispatch(decrementAddon(addon.id))}
          />
        ))}
      </div>
      <TotalBox total={total} />
    </section>
  )
}

export default AddonsSection
