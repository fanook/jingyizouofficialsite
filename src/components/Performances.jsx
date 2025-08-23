import './Performances.css'

const Performances = ({ config }) => {
  if (!config) return <div style={{ minHeight: '100vh', background: 'var(--deep-black)' }}></div>
  return (
    <section className="performances-section">
      <div className="performances-container">
        <div className="performances-header">
          <h2 className="section-title">{config.content.title}</h2>
          <p className="section-subtitle">{config.content.subtitle}</p>
        </div>

        <div className="performances-list">
          {config.content.events.map((performance) => (
            <div key={performance.id} className="performance-item">
              <div className="performance-header">
                <div className="performance-date">{performance.date}</div>
                <h3 className="performance-title">
                  {performance.title}
                  {performance.link && (
                    <a 
                      href={performance.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="performance-link"
                    >
                      Details
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </h3>
              </div>
              
              {performance.description && (
                <p className="performance-description">{performance.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Performances