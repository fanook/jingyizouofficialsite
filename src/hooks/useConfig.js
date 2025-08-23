import { useState, useEffect } from 'react'

// 默认配置（本地存储备份）
const DEFAULT_CONFIG = {
  navigation: {
    title: "Jingyi Zou",
    subtitle: "PIANIST"
  },
  home: {
    images: {
      hero: "https://assets.jingyizou.com/hero_main.jpg"
    },
    content: {
      title: "Jingyi Zou",
      subtitle: "Pianist",
      description: "Interpreting the soul of music through fingertips, letting every note carry emotion and story. From classical to contemporary, from solo to concerto, I am dedicated to bringing a unique artistic experience to every performance.",
      buttons: {
        performances: "Upcoming Performances",
        explore: "Explore My Musical Journey"
      }
    }
  },
  about: {
    content: {
      title: "About",
      subtitle: "Discover My Musical Journey",
      musicalJourney: {
        title: "Musical Journey",
        image: "https://assets.jingyizou.com/about1.jpg",
        paragraphs: [
          "Jingyi Zou is a pianist currently studying at the Manhattan School of Music in New York under the guidance of renowned pianist Alexandre Moutouzkine, where she holds a full scholarship.",
          "A prizewinner at the Hong Kong International Piano Invitational Competition, she has studied with the distinguished pedagogue Solomon Mikowsky, as well as Dan Zhaoyi, Qiu Yinghong, Zheng Hui, Tang Zhenhua, and Marc Silverman.",
          "She has also been inspired by masterclasses with Yin Chengzong, Cai Chongli, Yuan Fang, and Antonio di Cristofano, developing a distinctive artistic voice shaped by diverse musical traditions."
        ]
      },
      performanceExperience: {
        title: "Performance Experience",
        image: "https://assets.jingyizou.com/about2.jpg",
        paragraphs: [
          "Zou has appeared as a soloist with the Hong Kong Philharmonic Orchestra and the Neue Philharmonie München, and has given acclaimed recitals at Munich's Herkulessaal, Hamburg's Laeiszhalle, and Carnegie Hall in New York.",
          "She performed Grieg's Piano Concerto in A minor with the Neue Philharmonie München at Zhongshan Cultural & Arts Center Grand Theatre, and together with conductor Fuad Ibrahimov, she presented two New Year's concerts with the orchestra at Shenzhen Concert Hall.",
          "Conductor Ulrich Windfuhr praised her as \"a pianist with a solid foundation and rich musical imagination,\" while conductor Fuad Ibrahimov described her as \"a truly outstanding young pianist with a brilliant future.\"",
          "Her performances have been characterized by technical excellence and deep musical understanding, earning recognition from critics and audiences in prestigious venues worldwide."
        ]
      }
    }
  },
  performances: {
    content: {
      title: "Performances",
      subtitle: "Concert Highlights & Upcoming Events",
      events: [
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
    }
  },
  portfolio: {
    content: {
      title: "Portfolio",
      subtitle: "Listen to My Musical World",
      youtubeVideoIds: [
        'Y8mcSNUDnS8',
        'YsrYc5a7PlM', 
        'Un6tKoUtdFw'
      ]
    }
  },
  contact: {
    content: {
      title: "Contact",
      subtitle: "Let's Connect Through Music",
      email: "zoujingyijane@gmail.com",
      xiaohongshu: "@jingyizou_piano",
      xiaohongShuLink: "https://www.xiaohongshu.com/user/profile/6870d308000000001e008a66?xsec_token=YBS9dsKrp0rTVIvpzEPb5zwByFlCGeVnYH2CopkCAbnvw=&xsec_source=app_share&xhsshare=CopyLink&appuid=6870d308000000001e008a66&apptime=1755591668&share_id=bb2a23441e314f23b586ae8a6469b337",
      youtube: "youtube.com/@jingyizou6086",
      youtubeLink: "https://www.youtube.com/@jingyizou6086",
      instagram: "@jingyizou.piano",
      instagramLink: "https://www.instagram.com/jingyizou_piano_/profilecard/?igsh=MXBzbzVuOGNnYTlnag=="
    }
  }
}

const CONFIG_KEY = 'jingyizou-config'

export const useConfig = () => {
  // 从localStorage获取配置或使用默认配置
  const getInitialConfig = () => {
    try {
      const stored = localStorage.getItem(CONFIG_KEY)
      return stored ? JSON.parse(stored) : DEFAULT_CONFIG
    } catch {
      return DEFAULT_CONFIG
    }
  }

  const [config, setConfig] = useState(getInitialConfig)

  useEffect(() => {
    // 异步加载最新配置
    const loadConfig = async () => {
      try {
        const response = await fetch('https://assets.jingyizou.com/config.json')
        if (response.ok) {
          const newConfig = await response.json()
          setConfig(newConfig)
          localStorage.setItem(CONFIG_KEY, JSON.stringify(newConfig))
        }
      } catch (error) {
        console.warn('Failed to load remote config, using local config:', error)
      }
    }

    loadConfig()
  }, [])

  return config
}

export default useConfig
