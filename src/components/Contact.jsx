import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  // 定义联系方式数据
  const contactPlatforms = [
    {
      id: 'email',
      icon: '✉️', // 简洁的邮件图标
      title: 'Email',
      value: 'jingyizou@email.com',
      description: '一般咨询和合作洽谈'
    },
    {
      id: 'youtube',
      icon: '▶️', // 简洁的 YouTube 图标
      title: 'YouTube',
      value: 'youtube.com/@jingyizoupiano',
      description: '观看我的演奏视频',
      link: 'https://www.youtube.com/@jingyizoupiano'
    },
    {
      id: 'tiktok',
      icon: '♬', // 简洁的音符图标，或者可以使用'🎵'
      title: 'TikTok',
      value: '@jingyizou_piano',
      description: '关注我的日常音乐分享',
      link: 'https://www.tiktok.com/@jingyizou_piano'
    },
    {
      id: 'wechat',
      icon: '💬', // 简洁的聊天气泡图标
      title: 'WeChat',
      value: 'jingyizou_piano',
      description: '日常沟通和快速回复'
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
            <h2 className="section-title">联系我</h2>
            <p className="section-subtitle">期待与您的音乐之约</p>
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
