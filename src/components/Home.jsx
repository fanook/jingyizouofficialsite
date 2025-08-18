import { useState, useEffect } from 'react'
import './Home.css'
import hero1Image from '../assets/images/hero1.jpg' // 确保你有一张合适的图片放在这个路径下

const Home = () => {
  const [animatedText, setAnimatedText] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)

  const welcomeText = '欢迎来到我的音乐世界'

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
      <div className="home-background">
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
              <span className="title-line">邹静怡</span>
              <span className="title-subtitle">钢琴演奏家</span>
            </h1>

            <div className="animated-welcome">
              <p className="welcome-text">{animatedText}</p>
              <div className="cursor" />
            </div>

            <div className={`welcome-content ${showWelcome ? 'show' : ''}`}>
              <p className="hero-description">
                用指尖诠释音乐的灵魂，让每一个音符都承载着情感与故事。
                从古典到现代，从独奏到协奏，我致力于为每一场演出带来独特的艺术体验。
              </p>

              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">年演奏经验</span>
                </div>
                {/*<div className="stat">*/}
                {/*  <span className="stat-number">50+</span>*/}
                {/*  <span className="stat-label">场音乐会</span>*/}
                {/*</div>*/}
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">对音乐的热爱</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img src={hero1Image} alt="专业钢琴演奏照片" className="hero-section-img" />
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
          <p>探索我的音乐之旅</p>
        </div>
      </div>
    </section>
  )
}

export default Home
