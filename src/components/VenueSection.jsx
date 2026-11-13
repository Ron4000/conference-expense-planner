import { useDispatch, useSelector } from 'react-redux'
import { decrementRoom, incrementRoom } from '../store/venueSlice.js'
import { selectVenueTotal } from '../store/selectors.js'
import QuantityCard from './QuantityCard.jsx'
import TotalBox from './TotalBox.jsx'
import '../styles/VenueSection.css'

function VenueSection() {
  const dispatch = useDispatch()
  const rooms = useSelector((state) => state.venue.items)
  const total = useSelector(selectVenueTotal)

  return (
    <section className="planner-section" id="venue">
      <div className="section-heading">
        <span className="section-heading__eyebrow">01 / SPACE</span>
        <h2>Venue Room Selection</h2>
        <p>Find the right setting for every moment of your event.</p>
      </div>
      <div className="product-grid">
        {rooms.map((room) => (
          <QuantityCard
            key={room.id}
            item={room}
            showCapacity
            onIncrement={() => dispatch(incrementRoom(room.id))}
            onDecrement={() => dispatch(decrementRoom(room.id))}
          />
        ))}
      </div>
      <TotalBox total={total} />
    </section>
  )
}

export default VenueSection
