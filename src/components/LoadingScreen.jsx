// components/LoadingScreen.jsx
// Cinematic terminal-style boot animation shown on first visit.
// Displays green monospace lines appearing one by one,
// then fades out smoothly to reveal the portfolio.

import { useState, useEffect } from 'react'
import './LoadingScreen.css'

// The lines that "type out" during the boot sequence.
// Edit these to customize the boot messages.
const BOOT_LINES = [
  { text: '> initializing system...', delay: 0 },
  { text: '> loading profile...',     delay: 320 },
  { text: '> fetching projects...',   delay: 640 },
  { text: '> initializing skills...', delay: 960 },
  { text: '> connecting experience...', delay: 1280 },
  { text: '> all systems operational.', delay: 1600 },
  { text: '> welcome.',               delay: 2000 },
]

const TOTAL_DURATION = 2700  // ms until fade-out begins
const FADE_DURATION  = 700   // ms for the fade-out CSS transition

export default function LoadingScreen({ onComplete }) {
  // Track which lines are currently visible
  const [visibleCount, setVisibleCount] = useState(0)
  const [fadingOut, setFadingOut]       = useState(false)

  useEffect(() => {
    // Schedule each line to appear at its specified delay
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => setVisibleCount(i + 1), line.delay)
    )

    // After all lines are shown, trigger the fade-out
    const fadeTimer = setTimeout(() => {
      setFadingOut(true)
      // Call onComplete after fade-out animation finishes
      setTimeout(onComplete, FADE_DURATION)
    }, TOTAL_DURATION)

    // Cleanup on unmount
    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(fadeTimer)
    }
  }, [onComplete])

  return (
    <div className={`loading-root ${fadingOut ? 'loading-fade-out' : ''}`}>
      {/* Scanline overlay for CRT / monitor effect */}
      <div className="loading-scanlines" aria-hidden="true" />

      <div className="loading-terminal" role="status" aria-live="polite">
        {/* Static header */}
        <div className="loading-header">
          <span className="loading-bracket">[</span>
          <span className="loading-sys">SYS_BOOT</span>
          <span className="loading-bracket">]</span>
          <span className="loading-ver">v2.0.26</span>
        </div>
        <div className="loading-divider" />

        {/* Boot lines revealed one by one */}
        {BOOT_LINES.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className={`loading-line ${
              i === visibleCount - 1 ? 'loading-line--active' : 'loading-line--done'
            }`}
          >
            <span className="loading-line-text">{line.text}</span>
            {/* Blinking cursor only on the last visible line */}
            {i === visibleCount - 1 && (
              <span className="loading-cursor" aria-hidden="true" />
            )}
          </div>
        ))}

        {/* Progress bar fills as lines appear */}
        <div className="loading-progress-wrap" aria-hidden="true">
          <div
            className="loading-progress-bar"
            style={{
              width: `${(visibleCount / BOOT_LINES.length) * 100}%`,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>
    </div>
  )
}
