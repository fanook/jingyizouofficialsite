import { useState } from 'react'
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
            <h2 className="section-title">作品展示</h2>
            <p className="section-subtitle">聆听我的音乐世界</p>
          </div>

          {/* 新增的 YouTube 视频播放器容器 */}
          <div className="youtube-videos-container">
            {youtubeVideoIds.map((videoId, index) => (
                <div key={index} className="youtube-video-item">
                  <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`YouTube video player ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
                </div>
            ))}
          </div>

          {/* 以前的其他内容（分类筛选、作品网格、统计数据、CTA）已移除 */}

        </div>
      </section>
  )
}

export default Portfolio
