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
      title: 'صفحه اصلی',
      description: 'رندر و پردازش فوق‌العاده سریع',
      link: 'https://embed.figma.com/proto/sXo1KTdokaeUBqFvoPXA0b/inja?page-id=18240%3A140137&node-id=18290-132423&viewport=115%2C371%2C0.1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18243%3A140138&embed-host=share',
      details: 'تجربه رندر 3 برابر سریع‌تر با موتور بهینه‌شده ما. پیش‌نمایش بلادرنگ برای محتوای 4K و 8K.',
      helpContent: 'در تمام صفحات:\n• تمام منوهای هدر و فوتر قابل کلیک هستند.\n• با کلیک روی لوگوی فیلم‌نت به صفحه اصلی باز می‌گردید.\n\nدر این صفحه:\n• کلیک روی کارت قهوه پدری ← صفحه سینگل (صفحه اختصاصی) سریال.\n• کلیک روی کارت از یاد رفته ← خطای 404.\n• کلیک روی کارت اجل معلق ← خطای 503.'
    },
    {
      id: 2,
      title: 'صفحه محتوای تکی',
      description: 'رابط سازگار و مدرن',
      link: 'https://embed.figma.com/proto/sXo1KTdokaeUBqFvoPXA0b/inja?page-id=18240%3A140137&node-id=18432-29525&viewport=-360%2C272%2C0.19&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18243%3A140138&embed-host=share',
      details: 'سیستم طراحی جامع با افکت‌های شیشه‌ای و بهینه‌سازی تم تاریک.',
      helpContent: '• با کلیک روی اسلایدر بین پوستر و تیزر جابه‌جا شوید.\n• گزینه مرتب‌سازی قابل کلیک است.\n• در بخش جوایز و افتخارات، گزینه دوم قابل کلیک است.'
    },
    {
      id: 3,
      title: 'صفحه کودک و نوجوان',
      description: 'همکاری تیمی بلادرنگ',
      link: 'https://embed.figma.com/proto/sXo1KTdokaeUBqFvoPXA0b/inja?page-id=18240%3A140137&node-id=18952-93656&viewport=115%2C371%2C0.1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18243%3A140138&embed-host=share',
      details: 'ابزارهای همکاری پیشرفته با ویرایش بلادرنگ، کامنت و کنترل نسخه.',
      helpContent: 'در تمام صفحات:\n• تمام منوهای هدر و فوتر قابل کلیک هستند.\n• با کلیک روی لوگوی فیلم‌نت به صفحه اصلی باز می‌گردید.'
    },
    {
      id: 4,
      title: 'پخش زنده',
      description: 'امنیت در سطح سازمانی',
      link: 'https://embed.figma.com/proto/sXo1KTdokaeUBqFvoPXA0b/inja?page-id=18240%3A140137&node-id=18952-93503&viewport=115%2C371%2C0.1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18243%3A140138&embed-host=share',
      details: 'امنیت در سطح بانک با رمزگذاری سرتاسر و ذخیره‌سازی ابری امن.',
      helpContent: '• با کلیک روی لینک جدول پخش برنامه‌ها (کنار تیتر کانال‌های پخش زنده) ← جدول پخش نمایش داده می‌شود.\n\nدر تمام صفحات:\n• تمام منوهای هدر و فوتر قابل کلیک هستند.\n• با کلیک روی لوگوی فیلم‌نت به صفحه اصلی باز می‌گردید.'
    },
    {
      id: 5,
      title: 'فیلم‌نت هال',
      description: 'کار روی تمام دستگاه‌ها',
      link: 'https://embed.figma.com/proto/sXo1KTdokaeUBqFvoPXA0b/inja?page-id=18240%3A140137&node-id=18706-67609&viewport=115%2C371%2C0.1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18243%3A140138&embed-host=share',
      details: 'تجربه بی‌درز در دسکتاپ، وب و پلتفرم‌های موبایل.',
      helpContent: '• در بخش سینما آنلاین، کلیک روی عنوان ویجت ← هدایت به لندینگ سینما آنلاین.\n• کلیک روی عنوان ویجت بسته‌های فیلم‌نت ← هدایت به صفحه باندل.\n\nدر تمام صفحات:\n• تمام منوهای هدر و فوتر قابل کلیک هستند.\n• با کلیک روی لوگوی فیلم‌نت به صفحه اصلی باز می‌گردید.'
    },
    {
      id: 6,
      title: 'سینما آنلاین',
      description: 'تجربه موبایل بومی',
      link: 'https://embed.figma.com/proto/sXo1KTdokaeUBqFvoPXA0b/inja?node-id=18708-69547&scaling=min-zoom&content-scaling=fixed&page-id=18240%3A140137&starting-point-node-id=18243%3A140138&embed-host=share',
      details: 'اپ موبایل کامل با رابط بهینه‌شده لمسی و قابلیت‌های آفلاین.',
      helpContent: '• کلیک روی اطلاعات بیشتر کارت آخرین تولد ← ورود به صفحه سینگل (صفحه اختصاصی) آخرین تولد.\n• کلیک روی خرید بلیت ← هدایت به صفحه خرید بلیت.\n• کلیک روی دکمه پرداخت ← نمایش صفحه خرید موفق.\n\nدر تمام صفحات:\n• تمام منوهای هدر و فوتر قابل کلیک هستند.\n• با کلیک روی لوگوی فیلم‌نت به صفحه اصلی باز می‌گردید.'
    },
    {
      id: 7,
      title: 'باندل',
      description: 'کمک ویرایش هوشمند',
      link: 'https://embed.figma.com/proto/sXo1KTdokaeUBqFvoPXA0b/inja?node-id=18715-79916&scaling=min-zoom&content-scaling=fixed&page-id=18240%3A140137&starting-point-node-id=18243%3A140138&embed-host=share',
      details: 'تصحیح رنگ، میکس صدا و تشخیص هوشمند صحنه مبتنی بر هوش مصنوعی.',
      helpContent: 'در تمام صفحات:\n• تمام منوهای هدر و فوتر قابل کلیک هستند.\n• با کلیک روی لوگوی فیلم‌نت به صفحه اصلی باز می‌گردید.'
    },
    {
      id: 8,
      title: 'صفحه خرید اشتراک',
      description: 'پشتیبان‌گیری خودکار ابری',
      link: 'https://embed.figma.com/proto/sXo1KTdokaeUBqFvoPXA0b/inja?page-id=18240%3A140137&node-id=18576-38821&viewport=115%2C371%2C0.1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18243%3A140138&embed-host=share',
      details: 'همگام‌سازی خودکار ابری با ذخیره‌سازی نامحدود و تاریخچه نسخه.',
      helpContent: '• تب‌های عادی، ویژه و تمدید خودکار قابل کلیک هستند.\n• برای استفاده از کد تخفیف، باید حتماً تب عادی را انتخاب کنید.\n• با کلیک روی کادر وارد کردن کد تخفیف می‌توانید فرایند اعمال آن را ببینید.\n• کلیک روی بسته سه‌ماهه ← نمایش فاکتور.\n• کلیک روی دکمه پرداخت ← نمایش صفحه خرید موفق.\n\nدر تمام صفحات:\n• تمام منوهای هدر و فوتر قابل کلیک هستند.\n• با کلیک روی لوگوی فیلم‌نت به صفحه اصلی باز می‌گردید.'
    },
    {
      id: 9,
      title: 'حساب کاربری',
      description: 'API های دوستدار توسعه‌دهنده',
      link: 'https://embed.figma.com/proto/sXo1KTdokaeUBqFvoPXA0b/inja?page-id=18240%3A140137&node-id=19060-102277&viewport=115%2C371%2C0.1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18243%3A140138&embed-host=share',
      details: 'REST API جامع برای ادغام‌های سفارشی و اتوماسیون گردش کار.',
      helpContent: 'در این صفحه، آیتم‌های زیر قابل کلیک هستند:\n• پروفایل\n• سوابق خرید\n• مدیریت اعضا\n• مدیریت دستگاه\n\nدر تمام صفحات:\n• تمام منوهای هدر و فوتر قابل کلیک هستند.\n• با کلیک روی لوگوی فیلم‌نت به صفحه اصلی باز می‌گردید.'
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
          <h2 className="section-title">نگاهی به ویژگی ها جدید فیلم‌نت</h2>
          <p className="section-subtitle">
            صفحات و ویژگی های مختلف فیلم‌نت
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
