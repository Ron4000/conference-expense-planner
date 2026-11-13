import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Planner from './pages/Planner.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  )
}

export default App
