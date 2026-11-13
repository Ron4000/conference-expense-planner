import { useDispatch, useSelector } from 'react-redux'
import { meals } from '../data/products.js'
import { selectMealsTotal } from '../store/selectors.js'
import { setNumberOfPeople, toggleMeal } from '../store/mealsSlice.js'
import { formatCurrency } from '../utils/formatCurrency.js'
import TotalBox from './TotalBox.jsx'
import '../styles/MealsSection.css'

function MealsSection() {
  const dispatch = useDispatch()
  const { numberOfPeople, selected } = useSelector((state) => state.meals)
  const total = useSelector(selectMealsTotal)
  const hasMealSelected = Object.values(selected).some(Boolean)

  return (
    <section className="planner-section meals-section" id="meals">
      <div className="section-heading">
        <span className="section-heading__eyebrow">03 / HOSPITALITY</span>
        <h2>Meals Selection</h2>
        <p>Make room for good food and great conversation.</p>
      </div>
      <div className="meals-panel">
        <label className="people-field" htmlFor="number-of-people">
          <span>Number of People</span>
          <input
            id="number-of-people"
            type="number"
            min="0"
            step="1"
            value={numberOfPeople}
            onChange={(event) =>
              dispatch(setNumberOfPeople(event.target.value))
            }
          />
        </label>
        <div className="meal-options">
          {meals.map((meal) => (
            <label className="meal-option" key={meal.id}>
              <input
                type="checkbox"
                checked={selected[meal.id]}
                onChange={() => dispatch(toggleMeal(meal.id))}
              />
              <span className="meal-option__name">{meal.name}</span>
              <span className="meal-option__price">
                {formatCurrency(meal.pricePerPerson)}{' '}
                <small>/ person</small>
              </span>
            </label>
          ))}
        </div>
        {hasMealSelected && numberOfPeople === 0 && (
          <p className="meal-hint">
            Enter the number of people to calculate meal costs
          </p>
        )}
      </div>
      <TotalBox total={total} />
    </section>
  )
}

export default MealsSection
