import './Performances.css'

// 演出信息数据 - 可以根据需要增删改
const PERFORMANCES_DATA = [
  {
    id: 1,
    title: "September 27, 2025 - Sillian Cultural and Arts Center",
    description: "New Munich Philharmonic Orchestra, Austria, Germany. Conductor: Fuad Ibrahimov. Beethoven Piano Concerto No.1 in C Major",
    link: "https://www.marktgemeinde-sillian.at/herzlich-willkommen/veranstaltungen/"
  },
  {
    id: 2,
    title: "September 28, 2025 - Wolfratshausen Theatre and Cultural Center",
    description: "New Munich Philharmonic Orchestra, Wolfratshausen, Germany. Conductor: Fuad Ibrahimov. Beethoven Piano Concerto No.1 in C Major",
    link: "https://themunicheye.com/events/neue-philharmonie-munchen-ibrahimov--jingyi-zou--prokofiev-beethoven-brahms-7533"
  },
  {
    id: 3,
    title: "September 29, 2025 - Hercules Hall, Munich Residence",
    description: "New Munich Philharmonic Orchestra, Munich, Germany. Conductor: Fuad Ibrahimov. Beethoven Piano Concerto No.1 in C Major",
    link: "https://www.muenchenticket.de/event/neue-philharmonie-muenchen-benefizkonzert-fuer-kolibri-interkulturelle-stiftung-33587/"
  },
  {
    id: 4,
    title: "October 19, 2025 - Isarhalle",
    description: "Hamburg Beethoven Philharmonic Orchestra, Hamburg, Germany. Conductor: Ulrich Windfuhr. Beethoven Piano Concerto No.1 in C Major",
    link: null
  },
  {
    id: 5,
    title: "December 15, 2025 - Mozart Foundation Philharmonic Hall",
    description: "Salzburg Chamber Soloists, Salzburg, Austria. Conductor: Franz Nielsen. Mozart Piano Concerto No. 20 in D minor, K. 466",
    link: null
  }
]

const Performances = () => {
  return (
    <section className="performances-section">
      <div className="performances-container">
        <div className="performances-header">
          <h2 className="section-title">Performances</h2>
          <p className="section-subtitle">Concert Highlights & Upcoming Events</p>
        </div>

        <div className="performances-list">
          {PERFORMANCES_DATA.map((performance) => (
            <div key={performance.id} className="performance-item">
              <div className="performance-header">
                <h3 className="performance-title">{performance.title}</h3>
              </div>
              
              {performance.description && (
                <p className="performance-description">{performance.description}</p>
              )}
              
              {performance.link && (
                <div className="performance-footer">
                  <a 
                    href={performance.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="performance-link"
                  >
                    View Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Performances