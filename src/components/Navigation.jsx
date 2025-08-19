import { useState } from 'react'
import './Navigation.css'

const Navigation = ({ currentSection, onNavigate }) => {
  const [hoveredKey, setHoveredKey] = useState(null)

  const navItems = [
    // { id: 'home', label: '首页', isBlack: false },
    { id: 'about', label: 'About', isBlack: true },
    { id: 'portfolio', label: 'Portfolio', isBlack: false },
    { id: 'contact', label: 'Contact', isBlack: false }
  ]

  const playNote = (frequency) => {
    if (typeof window !== 'undefined' && window.AudioContext) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.5)
    }
  }

  const getFrequency = (index) => {
    const frequencies = [261.63, 293.66, 329.63, 369.99, 415.30] // C4, D4, E4, F#4, G#4
    return frequencies[index] || 261.63
  }

  return (
    <nav className="piano-navigation">
      <div className="piano-brand">
        <h1>Jingyi Zou</h1>
        <p>Pianist</p>
      </div>
      <div className="piano-keys">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            className={`piano-key ${item.isBlack ? 'black-key' : 'white-key'} ${
              currentSection === item.id ? 'active' : ''
            } ${hoveredKey === item.id ? 'hovered' : ''}`}
            onClick={() => {
              onNavigate(item.id)
              playNote(getFrequency(index))
            }}
            onMouseEnter={() => setHoveredKey(item.id)}
            onMouseLeave={() => setHoveredKey(null)}
          >
            <span className="key-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
