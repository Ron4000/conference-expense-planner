import { formatCurrency } from '../utils/formatCurrency.js'
import '../styles/TotalBox.css'

function TotalBox({ total }) {
  return (
    <div className="total-box" aria-live="polite">
      <span>Total Cost</span>
      <strong>{formatCurrency(total)}</strong>
    </div>
  )
}

export default TotalBox
