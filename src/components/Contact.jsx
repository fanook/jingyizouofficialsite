import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  // 定义联系方式数据
  const contactPlatforms = [
    {
      id: 'email',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Email',
      value: 'jingyizou@email.com',
      description: 'General inquiries and collaboration'
    },
    {
      id: 'youtube',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="currentColor"/>
        </svg>
      ),
      title: 'YouTube',
      value: 'youtube.com/@jingyizoupiano',
      description: 'Watch my performance videos',
      link: 'https://www.youtube.com/@jingyizoupiano'
    },
    {
      id: 'tiktok',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" fill="currentColor"/>
        </svg>
      ),
      title: 'TikTok',
      value: '@jingyizou_piano',
      description: 'Follow my daily music sharing',
      link: 'https://www.tiktok.com/@jingyizou_piano'
    },
    {
      id: 'instagram',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Instagram',
      value: '@jingyizou.piano',
      description: 'Follow my musical journey',
      link: 'https://www.instagram.com/jingyizou.piano'
    }
    // 可以添加更多平台
  ];

  const [activeContact, setActiveContact] = useState(null);

  const handleIconClick = (platformId, link) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      setActiveContact(platformId === activeContact ? null : platformId);
    }
  };

  return (
      <section className="contact-section">
        <div className="container">
          <div className="contact-header">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">Let's Connect Through Music</p>
          </div>

          <div className="contact-platforms-grid">
            {contactPlatforms.map((platform) => (
                <div
                    key={platform.id}
                    className={`platform-card ${activeContact === platform.id ? 'active' : ''}`}
                    onClick={() => handleIconClick(platform.id, platform.link)}
                >
                  <div className="platform-icon">{platform.icon}</div>
                  <h3 className="platform-title">{platform.title}</h3>
                  {activeContact === platform.id && (
                      <div className="platform-details">
                        <p className="platform-value">{platform.value}</p>
                        {/* <p className="platform-description">{platform.description}</p> */}
                      </div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Contact
