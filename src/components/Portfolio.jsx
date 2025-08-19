import './Portfolio.css'

const Portfolio = () => {
  // 示例 YouTube 视频 ID 列表
  // 请替换为你的实际 YouTube 视频 ID
  const youtubeVideoIds = [
    'Y8mcSNUDnS8', // 示例视频 ID 1
    'YsrYc5a7PlM', // 示例视频 ID 2
    'Un6tKoUtdFw', // 示例视频 ID 3
  ];

  return (
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-header">
            <h2 className="section-title">Portfolio</h2>
            <p className="section-subtitle">Listen to My Musical World</p>
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
