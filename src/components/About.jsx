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
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">Discover My Musical Journey</p>
      </div>

      <div className="about-content">
        {/* My Story Section */}
        <div className="about-section-block">
          <div className="content-left">
            <div className="scrollable-text">
              <div className="text-content">
                <h3>Musical Journey</h3>
                <p>Jingyi Zou is a pianist currently studying at the Manhattan School of Music in New York under the guidance of renowned pianist Alexandre Moutouzkine, where she holds a full scholarship.</p>

                <p>A prizewinner at the Hong Kong International Piano Invitational Competition, she has studied with the distinguished pedagogue Solomon Mikowsky, as well as Dan Zhaoyi, Qiu Yinghong, Zheng Hui, Tang Zhenhua, and Marc Silverman.</p>

                <p>She has also been inspired by masterclasses with Yin Chengzong, Cai Chongli, Yuan Fang, and Antonio di Cristofano, developing a distinctive artistic voice shaped by diverse musical traditions.</p>
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
                <p>Zou has appeared as a soloist with the Hong Kong Philharmonic Orchestra and the Neue Philharmonie München, and has given acclaimed recitals at Munich's Herkulessaal, Hamburg's Laeiszhalle, and Carnegie Hall in New York.</p>

                <p>She performed Grieg's Piano Concerto in A minor with the Neue Philharmonie München at Zhongshan Cultural & Arts Center Grand Theatre, and together with conductor Fuad Ibrahimov, she presented two New Year's concerts with the orchestra at Shenzhen Concert Hall.</p>

                <p>Conductor Ulrich Windfuhr praised her as "a pianist with a solid foundation and rich musical imagination," while conductor Fuad Ibrahimov described her as "a truly outstanding young pianist with a brilliant future."</p>

                <p>Her performances have been characterized by technical excellence and deep musical understanding, earning recognition from critics and audiences in prestigious venues worldwide.</p>
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
