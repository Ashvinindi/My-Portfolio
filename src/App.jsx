import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HallSync from './pages/HallSync'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hallsync" element={<HallSync />} />
    </Routes>
  )
}

export default App
