import './Performances.css'
import hero1Image from '../assets/images/hero1.jpg'
import hero2Image from '../assets/images/hero2.jpg'
import hero3Image from '../assets/images/hero3.jpg'

// 演出信息数据 - 可以根据需要增删改
const PERFORMANCES_DATA = [
  {
    id: 1,
    title: "Beethoven Orchester Hamburg",
    description: "Performing with the Beethoven Orchester Hamburg under the baton of Ulrich Windfuhr at Hamburg's prestigious Laeiszhalle",
    image: hero1Image, // 添加示例图片
    link: "https://www.elbphilharmonie.de/en/whats-on/beethoven-orchester-hamburg-zou-jingyi-ulrich-windfuhr/24348"
  },
  {
    id: 2,
    title: "Carnegie Hall Recital",
    description: "Solo piano recital featuring works by Chopin, Liszt, and contemporary composers",
    image: hero2Image,
    link: null
  },
  {
    id: 3,
    title: "Hong Kong Philharmonic Orchestra",
    description: "Guest soloist performance with the Hong Kong Philharmonic Orchestra",
    image: hero3Image,
    link: null
  },
  {
    id: 4,
    title: "Munich Herkulessaal Concert",
    description: "Recital at Munich's renowned Herkulessaal, featuring classical and romantic repertoire",
    image: null, // 这个保留为无图片的例子
    link: null
  },
  {
    id: 5,
    title: "Neue Philharmonie München",
    description: "Grieg Piano Concerto in A minor with Neue Philharmonie München at Zhongshan Cultural & Arts Center",
    image: hero1Image,
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

        <div className="performances-grid">
          {PERFORMANCES_DATA.map((performance) => (
            <div key={performance.id} className="performance-card">
              {performance.image && (
                <div className="performance-image">
                  <img src={performance.image} alt={performance.title} />
                </div>
              )}
              
              <div className="performance-content">
                <div className="performance-header">
                  <h3 className="performance-title">{performance.title}</h3>
                </div>
                
                <div className="performance-body">
                  {performance.description ? (
                    <p className="performance-description">{performance.description}</p>
                  ) : (
                    <div className="performance-placeholder">
                      {/* 如果没有描述，创建一个占位区域 */}
                    </div>
                  )}
                </div>
                
                <div className="performance-footer">
                  {performance.link && (
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
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Performances