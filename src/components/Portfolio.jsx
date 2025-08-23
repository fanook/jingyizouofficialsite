import './Portfolio.css'

const Portfolio = ({ config }) => {
  if (!config) return <div style={{ minHeight: '100vh', background: 'var(--deep-black)' }}></div>

  const { youtubeVideoIds } = config.content;

  return (
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-header">
            <h2 className="section-title">{config.content.title}</h2>
            <p className="section-subtitle">{config.content.subtitle}</p>
          </div>

          {/* 视频网格 */}
          <div className="video-grid">
            {youtubeVideoIds.map((videoId, index) => (
              <div key={index} className="video-item">
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video player ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
  )
}

export default Portfolio
