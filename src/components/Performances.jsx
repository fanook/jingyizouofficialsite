import './Performances.css'

// 演出信息数据 - 可以根据需要增删改
const PERFORMANCES_DATA = [
  {
    id: 1,
    date: "Sep 27",
    title: "Sillian Cultural and Arts Center, Austria",
    description: "New Munich Philharmonic Orchestra.\nConductor: Fuad Ibrahimov.\nBeethoven Piano Concerto No.1 in C Major",
    link: "https://www.marktgemeinde-sillian.at/herzlich-willkommen/veranstaltungen/"
  },
  {
    id: 2,
    date: "Sep 28", 
    title: "Wolfratshausen Theatre and Cultural Center, Germany",
    description: "New Munich Philharmonic Orchestra.\nConductor: Fuad Ibrahimov.\nBeethoven Piano Concerto No.1 in C Major",
    link: "https://themunicheye.com/events/neue-philharmonie-munchen-ibrahimov--jingyi-zou--prokofiev-beethoven-brahms-7533"
  },
  {
    id: 3,
    date: "Sep 29",
    title: "Hercules Hall, Munich Residence, Germany", 
    description: "New Munich Philharmonic Orchestra.\nConductor: Fuad Ibrahimov.\nBeethoven Piano Concerto No.1 in C Major",
    link: "https://www.muenchenticket.de/event/neue-philharmonie-muenchen-benefizkonzert-fuer-kolibri-interkulturelle-stiftung-33587/"
  },
  {
    id: 4,
    date: "Oct 19",
    title: "Isarhalle, Hamburg, Germany", 
    description: "Hamburg Beethoven Philharmonic Orchestra.\nConductor: Ulrich Windfuhr.\nBeethoven Piano Concerto No.1 in C Major",
    link: null
  },
  {
    id: 5,
    date: "Dec 15",
    title: "Mozart Foundation Philharmonic Hall, Salzburg, Austria",
    description: "Salzburg Chamber Soloists.\nConductor: Franz Nielsen.\nMozart Piano Concerto No. 20 in D minor, K. 466",
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