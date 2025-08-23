import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Performances from './components/Performances'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useConfig from './hooks/useConfig'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const config = useConfig()

  // Handle navigation - scroll to section
  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setCurrentSection(sectionId)
  }

  // Handle scroll spy - detect which section is currently visible
  useEffect(() => {
    const sections = ['home', 'about', 'performances', 'portfolio', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px -100px 0px'
      }
    )

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return (
    <div className="app">
      <Navigation
        currentSection={currentSection}
        onNavigate={handleNavigate}
        config={config?.navigation}
      />
      <main className="main-content">
        <section id="home">
          <Home config={config?.home} />
        </section>
        <section id="about">
          <About config={config?.about} />
        </section>
        <section id="performances">
          <Performances config={config?.performances} />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact config={config?.contact} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
