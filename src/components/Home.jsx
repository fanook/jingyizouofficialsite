import { useState, useEffect } from 'react'
import './Home.css'
import hero2Image from '../assets/images/hero2.jpg'

const Home = () => {
  const [animatedText, setAnimatedText] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)

  const welcomeText = 'Welcome to My Musical World'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= welcomeText.length) {
        setAnimatedText(welcomeText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowWelcome(true), 500)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="home-section">
      <div className="home-background" style={{ backgroundImage: `url(${hero2Image})` }}>
        <div className="floating-notes">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="note"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              ♪
            </div>
          ))}
        </div>
      </div>

      <div className="home-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1 className="main-title">
              <span className="title-line">Jingyi Zou</span>
              <span className="title-subtitle">Pianist</span>
            </h1>

            <div className="animated-welcome">
              <p className="welcome-text">{animatedText}</p>
            </div>

            <div className={`welcome-content ${showWelcome ? 'show' : ''}`}>
              <p className="hero-description">
                Interpreting the soul of music through fingertips, letting every note carry emotion and story.
                From classical to contemporary, from solo to concerto, I am dedicated to bringing a unique artistic experience to every performance.
              </p>

              <div className="upcoming-performances">
                <a href="https://www.elbphilharmonie.de/en/whats-on/beethoven-orchester-hamburg-zou-jingyi-ulrich-windfuhr/24348" className="performances-link">
                  Upcoming Performances
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
          <p>Explore My Musical Journey</p>
        </div>
      </div>
    </section>
  )
}

export default Home
