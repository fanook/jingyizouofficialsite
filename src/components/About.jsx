import './About.css'
import hero1Image from '../assets/images/hero1.jpg'
import hero3Image from '../assets/images/hero3.jpg'

// Single images for each section
const storyImage = hero1Image;
const stageImage = hero3Image;

const About = () => {

  return (
    <section className="about-section">
      <div className="about-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Discover My Musical Journey</p>
      </div>

      <div className="about-content">
        {/* My Story Section */}
        <div className="about-section-block">
          <div className="content-left">
            <div className="scrollable-text">
              <div className="text-content">
                <h3>Musical Journey</h3>
                <p>Jingyi Zou is currently pursuing her undergraduate studies in piano performance at the Manhattan School of Music, where she studies with Alexandre Moutouzkine, Co-Chair of the Piano Department. She was admitted to the Precollege Division in May 2021 and entered the undergraduate program in August 2023 with a full-tuition scholarship, the school's highest merit-based award.</p>

                <p>Born in 2004, Zou began studying piano at the age of four and has won numerous first prizes in major competitions, including First Prize in the "Chinese Repertoire" category at the Hong Kong International Piano Invitation Competition.</p>

                <p>She has previously studied with renowned educators including Dan Zhaoyi, conductor Yinghong Qiu, pianist Hui Zheng, improvisational artist Zhenhua Tang, and Marc Silverman of the Manhattan School of Music. She has also participated in masterclasses with distinguished pianists such as: Yin Chengzong, Antonio di Cristofano, Chongli Cai, Fang Yuan.</p>

                <p>Through these experiences, she has developed a distinctive artistic voice shaped by diverse musical traditions.</p>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="single-image">
              <img src={storyImage} alt="Musical Journey" />
            </div>
          </div>
        </div>

        {/* Performance Experience Section */}
        <div className="about-section-block">
          <div className="content-left">
            <div className="scrollable-text">
              <div className="text-content">
                <h3>Performance Experience</h3>
                <p>Zou has appeared with leading orchestras including the Hong Kong Philharmonic Orchestra, the Tianjin Conservatory Youth Symphony Orchestra, and the Neue Philharmonie München. She has given successful solo recitals in 2018 and 2023. In January 2025, she performed Grieg's Piano Concerto in A minor with the Neue Philharmonie München at the Zhongshan Culture and Art Center Grand Theatre, and later that month joined conductor Fuad Ibrahimov and the orchestra for two New Year concerts at the Shenzhen Concert Hall.</p>

                <p>Maestro Ibrahimov praised her, stating: "She is indeed an outstanding young pianist with a bright future." Her performances have been characterized by technical excellence and deep musical understanding, earning recognition from critics and audiences alike.</p>

                <p>Her upcoming engagements include a German concert tour in September 2025, with performances in Sillian, Latzhausen, and Munich. In October 2025, she will perform Beethoven's Piano Concerto No. 1 in C Major with conductor Ulrich Windfuhr at the Reiss Concert Hall in Hamburg. In December 2025, she will appear at the Stiftung Mozarteum – Großer Saal in Salzburg with the Salzburg Chamber Soloists, performing Mozart's Piano Concerto No. 20 in D minor.</p>

                <p>Notably, Jingyi Zou is the first Chinese pianist to give solo recitals at both the Herkulessaal in the Munich Residenz and the Reiss Concert Hall in Hamburg, marking significant milestones in her international career.</p>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="single-image">
              <img src={stageImage} alt="Performance Experience" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
