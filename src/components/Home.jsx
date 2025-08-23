import './Home.css'

const Home = () => {

  const hero2Image = "https://assets.jingyizou.com/hero_main.jpg"
  return (
    <section className="home-section">
      <div className="home-background" style={{ backgroundImage: `url(${hero2Image})` }}>
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
              <span className="title-line">Jingyi Zou</span>
              <span className="title-subtitle">Pianist</span>
            </h1>

            <div className="welcome-content">
              <p className="hero-description">
                Interpreting the soul of music through fingertips, letting every note carry emotion and story.
                From classical to contemporary, from solo to concerto, I am dedicated to bringing a unique artistic experience to every performance.
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
                  Upcoming Performances
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
          <p>Explore My Musical Journey</p>
        </div>
      </div>
    </section>
  )
}

export default Home
