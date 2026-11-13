import { useState } from 'react'
import { formatCurrency } from '../utils/formatCurrency.js'
import '../styles/QuantityCard.css'

function QuantityCard({ item, onIncrement, onDecrement, showCapacity = false }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article className="quantity-card">
      <div className="quantity-card__image-wrap">
        {!imageFailed ? (
          <img
            className="quantity-card__image"
            src={item.image}
            alt=""
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="quantity-card__placeholder" aria-hidden="true">
            <span>Event essentials</span>
          </div>
        )}
      </div>
      <div className="quantity-card__body">
        <div>
          <h3>{item.name}</h3>
          {showCapacity && (
            <p className="quantity-card__capacity">
              Capacity: {item.capacity}
            </p>
          )}
        </div>
        <p className="quantity-card__price">{formatCurrency(item.price)}</p>
        <div className="quantity-control" aria-label={`${item.name} quantity`}>
          <button
            type="button"
            className="quantity-control__button"
            onClick={onDecrement}
            disabled={item.quantity === 0}
            aria-label={`Decrease ${item.name} quantity`}
          >
            −
          </button>
          <span aria-live="polite">{item.quantity}</span>
          <button
            type="button"
            className="quantity-control__button"
            onClick={onIncrement}
            aria-label={`Increase ${item.name} quantity`}
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}

export default QuantityCard
