import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import './FeatureGrid.css'

const FeatureGrid = () => {
  const [selectedFeature, setSelectedFeature] = useState(null)

  const features = [
    {
      id: 1,
      title: 'عملکرد',
      description: 'رندر و پردازش فوق‌العاده سریع',
      link: 'https://figma.com/feature/performance',
      details: 'تجربه رندر 3 برابر سریع‌تر با موتور بهینه‌شده ما. پیش‌نمایش بلادرنگ برای محتوای 4K و 8K.'
    },
    {
      id: 2,
      title: 'سیستم طراحی',
      description: 'رابط سازگار و مدرن',
      link: 'https://figma.com/feature/design',
      details: 'سیستم طراحی جامع با افکت‌های شیشه‌ای و بهینه‌سازی تم تاریک.'
    },
    {
      id: 3,
      title: 'همکاری',
      description: 'همکاری تیمی بلادرنگ',
      link: 'https://figma.com/feature/collaboration',
      details: 'ابزارهای همکاری پیشرفته با ویرایش بلادرنگ، کامنت و کنترل نسخه.'
    },
    {
      id: 4,
      title: 'امنیت',
      description: 'امنیت در سطح سازمانی',
      link: 'https://figma.com/feature/security',
      details: 'امنیت در سطح بانک با رمزگذاری سرتاسر و ذخیره‌سازی ابری امن.'
    },
    {
      id: 5,
      title: 'چندپلتفرمه',
      description: 'کار روی تمام دستگاه‌ها',
      link: 'https://figma.com/feature/cross-platform',
      details: 'تجربه بی‌درز در دسکتاپ، وب و پلتفرم‌های موبایل.'
    },
    {
      id: 6,
      title: 'اپ موبایل',
      description: 'تجربه موبایل بومی',
      link: 'https://figma.com/feature/mobile',
      details: 'اپ موبایل کامل با رابط بهینه‌شده لمسی و قابلیت‌های آفلاین.'
    },
    {
      id: 7,
      title: 'ویژگی‌های هوش مصنوعی',
      description: 'کمک ویرایش هوشمند',
      link: 'https://figma.com/feature/ai',
      details: 'تصحیح رنگ، میکس صدا و تشخیص هوشمند صحنه مبتنی بر هوش مصنوعی.'
    },
    {
      id: 8,
      title: 'همگام‌سازی ابری',
      description: 'پشتیبان‌گیری خودکار ابری',
      link: 'https://figma.com/feature/cloud',
      details: 'همگام‌سازی خودکار ابری با ذخیره‌سازی نامحدود و تاریخچه نسخه.'
    },
    {
      id: 9,
      title: 'دسترسی API',
      description: 'API های دوستدار توسعه‌دهنده',
      link: 'https://figma.com/feature/api',
      details: 'REST API جامع برای ادغام‌های سفارشی و اتوماسیون گردش کار.'
    }
  ]


  const openFeature = (feature) => {
    setSelectedFeature(feature)
  }

  const closeFeature = () => {
    setSelectedFeature(null)
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
                  <button className="feature-btn feature-btn-primary">
                    نمونه
                  </button>
                  <button className="feature-btn feature-btn-secondary">
                    راهنما
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
    </section>
  )
}

export default FeatureGrid
