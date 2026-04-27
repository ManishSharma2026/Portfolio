// App.jsx — Root component
// Manages the loading screen visibility (sessionStorage-based),
// sets up React Router, and renders global components.

import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

function App() {
  // Show loading screen only on first visit per browser session.
  // sessionStorage resets on tab close / page refresh, so the user
  // sees the animation once per session — not on every nav click.
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('portfolio_visited')
  })

  // Called by LoadingScreen after its fade-out animation finishes
  const handleLoadingComplete = () => {
    sessionStorage.setItem('portfolio_visited', 'true')
    setLoading(false)
  }

  return (
    <>
      {/* Custom cursor rendered above everything */}
      <CustomCursor />

      {loading ? (
        // Show cinematic boot animation before main content
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        // HashRouter works without server config (GitHub Pages friendly)
        <Router>
          <Navbar />
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/skills"     element={<Skills />} />
            <Route path="/projects"   element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact"    element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  )
}

export default App
