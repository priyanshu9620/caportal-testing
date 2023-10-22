import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Info from "./components/Info/Info"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/caportal" element={<Info />} />
      </Routes>

    </Router>
  )
}

export default App
