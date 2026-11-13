# Conference Expense Planner

Conference Expense Planner is a responsive event-budgeting front end for
BudgetEase Solutions. Select convention-center rooms, AV add-ons, and meal
options to build a live estimate, then review the itemized total in an
accessible details dialog.

## Features

- Landing page introducing BudgetEase Solutions and the planner
- Room and add-on quantity controls with live section totals
- Meal selection with per-person pricing
- Itemized cost summary and grand total
- Redux Toolkit state management and derived selectors
- Responsive layout, image fallbacks, reduced-motion support, and keyboard
  dismissal for the summary dialog

## Tech stack

- Vite
- React (JavaScript)
- Redux Toolkit and React Redux
- React Router
- Plain CSS with Flexbox and CSS Grid

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Project structure

```text
src/
  components/   Reusable planner sections, cards, navigation, and modal
  data/         Product catalog and landing background URL
  pages/        Landing and planner routes
  store/        Redux Toolkit slices, store, and selectors
  styles/       Component and page styles
  utils/        Currency formatting helper
  App.jsx       Application routes
  index.css     Theme variables, resets, responsive rules, and motion settings
  main.jsx      React entry point and Redux Provider
```

## Assumptions

- Room and add-on prices are charged once per selected unit; meal prices are
  charged per person for each checked meal.
- Selecting a meal with zero attendees is allowed but contributes `$0` until a
  positive attendee count is entered.
- Quantities and attendee counts are whole numbers and cannot be negative.
- Product and landing photography uses remotely hosted Unsplash image URLs;
  room and add-on cards fall back to a styled placeholder if an image fails.
- A catch-all route returns visitors to the landing page.
