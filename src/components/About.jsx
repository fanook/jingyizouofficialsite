import { useState } from 'react'
import './About.css'

// 假设你有这些图片路径，你需要替换成你的实际图片路径
// 这里使用占位图作为示例
const storyImage = 'https://via.placeholder.com/600x400?text=My+Story+Image'; // 单张故事图片
const philosophyImage = 'https://via.placeholder.com/600x400?text=Stage+Experience+Image'; // 单张舞台经验图片


const About = () => {
  const [activeTab, setActiveTab] = useState('story')

  return (
      <section className="about-section">
        <div className="container">
          <div className="about-header">
            <h2 className="section-title">关于我</h2>
            <p className="section-subtitle">了解我的音乐之路</p>
          </div>

          <div className="about-content">
            <div className="about-tabs">
              <button
                  className={`tab-button ${activeTab === 'story' ? 'active' : ''}`}
                  onClick={() => setActiveTab('story')}
              >
                我的故事
              </button>
              <button
                  className={`tab-button ${activeTab === 'philosophy' ? 'active' : ''}`}
                  onClick={() => setActiveTab('philosophy')}
              >
                舞台经验
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'story' && (
                  <div className="story-content">
                    <div className="story-grid">
                      <div className="story-text">
                        <h3>音乐启蒙之路</h3>
                        <p>Jingyi Zou is currently pursuing her undergraduate studies in piano performance at the Manhattan School of Music, where she studies with Alexandre Moutouzkine, Co-Chair of the Piano Department. She was admitted to the Precollege Division in May 2021 and entered the undergraduate program in August 2023 with a full-tuition scholarship, the school’s highest merit-based award.</p>

                        <p>Born in 2004, Zou began studying piano at the age of four and has won numerous first prizes in major competitions, including First Prize in the “Chinese Repertoire” category at the Hong Kong International Piano Invitation Competition.</p>

                        <p>She has previously studied with renowned educators including Dan Zhaoyi, conductor Yinghong Qiu, pianist Hui Zheng, improvisational artist Zhenhua Tang, and Marc Silverman of the Manhattan School of Music. She has also participated in masterclasses with distinguished pianists such as: Yin Chengzong, Antonio di Cristofano, Chongli Cai, Fang Yuan </p>

                        <p>Through these experiences, she has developed a distinctive artistic voice shaped by diverse musical traditions.</p>

                        <p>Zou has appeared with leading orchestras including the Hong Kong Philharmonic Orchestra, the Tianjin Conservatory Youth Symphony Orchestra, and the Neue Philharmonie München. She has given successful solo recitals in 2018 and 2023. In January 2025, she performed Grieg’s Piano Concerto in A minor with the Neue Philharmonie München at the Zhongshan Culture and Art Center Grand Theatre, and later that month joined conductor Fuad Ibrahimov and the orchestra for two New Year concerts at the Shenzhen Concert Hall. Maestro Ibrahimov praised her, stating: “She is indeed an outstanding young pianist with a bright future.”</p>

                        <p>Her upcoming engagements include a German concert tour in September 2025, with performances in Sillian, Latzhausen, and Munich. In October 2025, she will perform Beethoven’s Piano Concerto No. 1 in C Major with conductor Ulrich Windfuhr at the Reiss Concert Hall in Hamburg. In December 2025, she will appear at the Stiftung Mozarteum – Großer Saal in Salzburg with the Salzburg Chamber Soloists, performing Mozart’s Piano Concerto No. 20 in D minor.</p>

                        <p>Notably, Jingyi Zou is the first Chinese pianist to give solo recitals at both the Herkulessaal in the Munich Residenz and the Reiss Concert Hall in Hamburg.</p>
                      </div>
                    {/*  <div className="story-image">*/}
                    {/*    /!* 直接放置单张图片 *!/*/}
                    {/*    <img src={storyImage} alt="我的故事图片" className="about-main-image" />*/}
                    {/*    /!* 如果你仍然需要一个占位符效果，可以保留下面的 div，但图片会覆盖它 *!/*/}
                    {/*    /!* <div className="image-placeholder">*/}
                    {/*  <div className="music-note">♫</div>*/}
                    {/*  <p>童年时期的音乐启蒙照片</p>*/}
                    {/*</div> *!/*/}
                    {/*  </div>*/}
                    </div>
                  </div>
              )}

              {activeTab === 'philosophy' && (
                  <div className="story-content"> {/* 可以为哲学内容创建一个新的类名，例如 philosophy-content */}
                    <div className="story-grid"> {/* 也可以为哲学内容的 grid 创建新的类名，例如 philosophy-grid */}
                      <div className="story-text">
                        <h3>音乐展示之路</h3>
                        <p>Zou has appeared with leading orchestras including the Hong Kong Philharmonic Orchestra, the Tianjin Conservatory Youth Symphony Orchestra, and the Neue Philharmonie München. She has given successful solo recitals in 2018 and 2023. In January 2025, she performed Grieg’s Piano Concerto in A minor with the Neue Philharmonie München at the Zhongshan Culture and Art Center Grand Theatre, and later that month joined conductor Fuad Ibrahimov and the orchestra for two New Year concerts at the Shenzhen Concert Hall. Maestro Ibrahimov praised her, stating: “She is indeed an outstanding young pianist with a bright future.”</p>

                        <p>Her upcoming engagements include a German concert tour in September 2025, with performances in Sillian, Latzhausen, and Munich. In October 2025, she will perform Beethoven’s Piano Concerto No. 1 in C Major with conductor Ulrich Windfuhr at the Reiss Concert Hall in Hamburg. In December 2025, she will appear at the Stiftung Mozarteum – Großer Saal in Salzburg with the Salzburg Chamber Soloists, performing Mozart’s Piano Concerto No. 20 in D minor.</p>

                        <p>Notably, Jingyi Zou is the first Chinese pianist to give solo recitals at both the Herkulessaal in the Munich Residenz and the Reiss Concert Hall in Hamburg.</p>
                      </div>
                      {/*<div className="story-image">*/}
                      {/*  /!* 直接放置单张图片 *!/*/}
                      {/*  <img src={philosophyImage} alt="舞台经验图片" className="about-main-image" />*/}
                      {/*  /!* 如果你仍然需要一个占位符效果，可以保留下面的 div，但图片会覆盖它 *!/*/}
                      {/*  /!* <div className="image-placeholder">*/}
                      {/*  <div className="music-note">♫</div>*/}
                      {/*  <p>舞台经验照片</p>*/}
                      {/*</div> *!/*/}
                      {/*</div>*/}
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
