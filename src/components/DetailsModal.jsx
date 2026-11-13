import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectGrandTotal, selectSummaryRows } from '../store/selectors.js'
import { formatCurrency } from '../utils/formatCurrency.js'
import '../styles/DetailsModal.css'

function DetailsModal({ onClose }) {
  const dialogRef = useRef(null)
  const rows = useSelector(selectSummaryRows)
  const grandTotal = useSelector(selectGrandTotal)

  useEffect(() => {
    const previousFocus = document.activeElement
    dialogRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [onClose])

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="details-title"
        tabIndex="-1"
        ref={dialogRef}
      >
        <button
          type="button"
          className="details-modal__close"
          onClick={onClose}
          aria-label="Close event details"
        >
          ×
        </button>
        <p className="details-modal__eyebrow">YOUR EVENT ESTIMATE</p>
        <h2 id="details-title">TOTAL COST FOR THE EVENT</h2>
        <p className="details-modal__total">{formatCurrency(grandTotal)}</p>
        {rows.length > 0 ? (
          <div className="details-modal__table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Unit Cost</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={`${row.name}-${row.quantityLabel}`}>
                    <td>{row.name}</td>
                    <td>{formatCurrency(row.unitCost)}</td>
                    <td>{row.quantityLabel}</td>
                    <td>{formatCurrency(row.totalCost)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="details-modal__empty">No items selected yet</p>
        )}
        <button
          type="button"
          className="button button--navy details-modal__done"
          onClick={onClose}
        >
          Done
        </button>
      </section>
    </div>
  )
}

export default DetailsModal
