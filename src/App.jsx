import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/over_ons" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
