import './About.css'

const About = ({ config }) => {
  if (!config) return <div style={{ minHeight: '100vh', background: 'var(--deep-black)' }}></div>

  return (
    <section className="about-section">
      <div className="about-header">
        <h2 className="section-title">{config.content.title}</h2>
        <p className="section-subtitle">{config.content.subtitle}</p>
      </div>

      <div className="about-content">
        {/* Musical Journey Section */}
        <div className="about-section-block">
          <div className="section-title-mobile">
            <h3>{config.content.musicalJourney.title}</h3>
          </div>
          <div className="content-left">
            <div className="text-content">
              <h3 className="desktop-title">{config.content.musicalJourney.title}</h3>
              {config.content.musicalJourney.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="content-right">
            <div className="single-image">
              <img src={config.content.musicalJourney.image} alt={config.content.musicalJourney.title} />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="section-separator"></div>

        {/* Performance Experience Section */}
        <div className="about-section-block">
          <div className="section-title-mobile">
            <h3>{config.content.performanceExperience.title}</h3>
          </div>
          <div className="content-left">
            <div className="text-content">
              <h3 className="desktop-title">{config.content.performanceExperience.title}</h3>
              {config.content.performanceExperience.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="content-right">
            <div className="single-image">
              <img src={config.content.performanceExperience.image} alt={config.content.performanceExperience.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
