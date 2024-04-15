import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import Career from './components/Career'
import Services from './components/Services'
import About from './components/About'
import './index.css'
import './App.css'
import Homepage from './pges/Homepage'

function App() {
  return (
    <>
    { /* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
        </Routes>
  </BrowserRouter> */}
      <Homepage/>
    </>
  )
}

export default App
