import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, BookOpen } from 'lucide-react'
import './FeatureGrid.css'

const FeatureGrid = () => {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [selectedHelp, setSelectedHelp] = useState(null)

  const features = [
    {
      id: 1,
      title: 'عملکرد',
      description: 'رندر و پردازش فوق‌العاده سریع',
      link: 'https://figma.com/feature/performance',
      details: 'تجربه رندر 3 برابر سریع‌تر با موتور بهینه‌شده ما. پیش‌نمایش بلادرنگ برای محتوای 4K و 8K.',
      helpContent: 'عملکرد بهینه‌شده برای ویرایش ویدیو با کیفیت بالا. موتور رندر جدید ما امکان کار با فایل‌های 4K و 8K را بدون تاخیر فراهم می‌کند.'
    },
    {
      id: 2,
      title: 'سیستم طراحی',
      description: 'رابط سازگار و مدرن',
      link: 'https://figma.com/feature/design',
      details: 'سیستم طراحی جامع با افکت‌های شیشه‌ای و بهینه‌سازی تم تاریک.',
      helpContent: 'سیستم طراحی جدید با تم تاریک مدرن و افکت‌های شیشه‌ای. رابط کاربری بهینه‌شده برای تجربه بهتر ویرایش.'
    },
    {
      id: 3,
      title: 'همکاری',
      description: 'همکاری تیمی بلادرنگ',
      link: 'https://figma.com/feature/collaboration',
      details: 'ابزارهای همکاری پیشرفته با ویرایش بلادرنگ، کامنت و کنترل نسخه.',
      helpContent: 'ابزارهای همکاری پیشرفته برای تیم‌ها. امکان ویرایش همزمان، کامنت‌گذاری و کنترل نسخه‌ها.'
    },
    {
      id: 4,
      title: 'امنیت',
      description: 'امنیت در سطح سازمانی',
      link: 'https://figma.com/feature/security',
      details: 'امنیت در سطح بانک با رمزگذاری سرتاسر و ذخیره‌سازی ابری امن.',
      helpContent: 'امنیت پیشرفته با رمزگذاری سرتاسر. حفاظت کامل از داده‌ها و پروژه‌های شما در سطح سازمانی.'
    },
    {
      id: 5,
      title: 'چندپلتفرمه',
      description: 'کار روی تمام دستگاه‌ها',
      link: 'https://figma.com/feature/cross-platform',
      details: 'تجربه بی‌درز در دسکتاپ، وب و پلتفرم‌های موبایل.',
      helpContent: 'قابلیت کار روی تمام پلتفرم‌ها. تجربه یکسان در دسکتاپ، وب و موبایل.'
    },
    {
      id: 6,
      title: 'اپ موبایل',
      description: 'تجربه موبایل بومی',
      link: 'https://figma.com/feature/mobile',
      details: 'اپ موبایل کامل با رابط بهینه‌شده لمسی و قابلیت‌های آفلاین.',
      helpContent: 'اپ موبایل بومی با رابط بهینه‌شده برای لمسی. قابلیت کار آفلاین و همگام‌سازی خودکار.'
    },
    {
      id: 7,
      title: 'ویژگی‌های هوش مصنوعی',
      description: 'کمک ویرایش هوشمند',
      link: 'https://figma.com/feature/ai',
      details: 'تصحیح رنگ، میکس صدا و تشخیص هوشمند صحنه مبتنی بر هوش مصنوعی.',
      helpContent: 'ابزارهای هوش مصنوعی برای ویرایش هوشمند. تصحیح خودکار رنگ، میکس صدا و تشخیص صحنه.'
    },
    {
      id: 8,
      title: 'همگام‌سازی ابری',
      description: 'پشتیبان‌گیری خودکار ابری',
      link: 'https://figma.com/feature/cloud',
      details: 'همگام‌سازی خودکار ابری با ذخیره‌سازی نامحدود و تاریخچه نسخه.',
      helpContent: 'همگام‌سازی خودکار ابری با ذخیره‌سازی نامحدود. پشتیبان‌گیری خودکار و تاریخچه کامل نسخه‌ها.'
    },
    {
      id: 9,
      title: 'دسترسی API',
      description: 'API های دوستدار توسعه‌دهنده',
      link: 'https://figma.com/feature/api',
      details: 'REST API جامع برای ادغام‌های سفارشی و اتوماسیون گردش کار.',
      helpContent: 'API جامع برای توسعه‌دهندگان. امکان ادغام با سیستم‌های دیگر و اتوماسیون گردش کار.'
    }
  ]


  const openFeature = (feature) => {
    setSelectedFeature(feature)
  }

  const closeFeature = () => {
    setSelectedFeature(null)
  }

  const openHelp = (feature) => {
    setSelectedHelp(feature)
  }

  const closeHelp = () => {
    setSelectedHelp(null)
  }

  const openDesignLink = (feature) => {
    window.open(feature.link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="features" className="feature-grid-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">بررسی ویژگی‌ها</h2>
          <p className="section-subtitle">
            ویژگی‌ها و قابلیت‌های خاص پلتفرم جدید فیلم‌نت را کاوش کنید
          </p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card glass"
                onClick={() => openFeature(feature)}
              >
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>

                <div className="feature-buttons">
                  <button 
                    className="feature-btn feature-btn-secondary"
                    onClick={(e) => {
                      e.stopPropagation()
                      openHelp(feature)
                    }}
                  >
                    راهنما
                  </button>
                  <button 
                    className="feature-btn feature-btn-primary"
                    onClick={(e) => {
                      e.stopPropagation()
                      openDesignLink(feature)
                    }}
                  >
                    طراحی
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="feature-modal"
            onClick={closeFeature}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="feature-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="feature-modal-header">
                <div className="feature-modal-title">
                  <h3>{selectedFeature.title}</h3>
                </div>
                <button
                  onClick={closeFeature}
                  className="feature-modal-close"
                  aria-label="Close feature details"
                >
                  ×
                </button>
              </div>

              <div className="feature-modal-body">
                <p className="feature-modal-description">
                  {selectedFeature.description}
                </p>
                <div className="feature-modal-details">
                  {selectedFeature.details}
                </div>
              </div>

              <div className="feature-modal-footer">
                <a
                  href={selectedFeature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} />
                  مشاهده ویژگی
                </a>
                <button onClick={closeFeature} className="btn btn-glass">
                  بستن
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Help Modal */}
      <AnimatePresence>
        {selectedHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="help-modal"
            onClick={closeHelp}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="help-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="help-modal-header">
                <div className="help-modal-title">
                  <div className="help-modal-icon">
                    <BookOpen size={20} />
                  </div>
                  <h3>راهنمای {selectedHelp.title}</h3>
                </div>
                <button
                  onClick={closeHelp}
                  className="help-modal-close"
                  aria-label="Close help"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="help-modal-body">
                <p className="help-content-text">
                  {selectedHelp.helpContent}
                </p>
              </div>

              <div className="help-modal-footer">
                <button onClick={closeHelp} className="btn btn-primary">
                  متوجه شدم!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FeatureGrid
