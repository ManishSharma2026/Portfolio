// components/Navbar.jsx
// Fixed top navigation bar.
// - Desktop: horizontal link list
// - Mobile: hamburger toggle that opens a full-width dropdown menu
// - Active link detection via useLocation

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { path: '/',           label: 'Home' },
  { path: '/about',      label: 'About' },
  { path: '/skills',     label: 'Skills' },
  { path: '/projects',   label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const location  = useLocation()
  const [open, setOpen]         = useState(false)  // mobile menu open
  const [scrolled, setScrolled] = useState(false)  // scrolled past top

  // Add "scrolled" class once user scrolls down a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo / Brand */}
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-bracket">&lt;</span>
          Manish
          <span className="navbar-logo-bracket">/&gt;</span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar-links">
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar-link ${location.pathname === link.path ? 'navbar-link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={`navbar-hamburger ${open ? 'navbar-hamburger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <ul className="navbar-mobile-menu">
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar-mobile-link ${location.pathname === link.path ? 'navbar-mobile-link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
