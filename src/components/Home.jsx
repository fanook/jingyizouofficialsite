import './Home.css'

const Home = ({ config }) => {
  if (!config) return <div style={{ minHeight: '100vh', background: 'var(--deep-black)' }}></div>
  return (
    <section className="home-section">
      <div className="home-background" style={{ backgroundImage: `url(${config.images.hero})` }}>
        <div className="floating-notes">
          {[...Array(8)].map((_, i) => (
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
              <span className="title-line">{config.content.title}</span>
              <span className="title-subtitle">{config.content.subtitle}</span>
            </h1>

            <div className="welcome-content">
              <p className="hero-description">
                {config.content.description}
              </p>

              <div className="upcoming-performances">
                <a
                  href="#performances"
                  className="performances-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('performances');
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                >
                  {config.content.buttons.performances}
                </a>
              </div>
            </div>
          </div>

        </div>

        <div 
          className="scroll-indicator"
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className="scroll-arrow">↓</div>
          <p>{config.content.buttons.explore}</p>
        </div>
      </div>
    </section>
  )
}

export default Home
