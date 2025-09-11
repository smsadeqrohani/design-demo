import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, BookOpen, Code, Palette } from 'lucide-react'
import './PrototypeLinks.css'
import FigmaLogo from '../../Figma-logo.svg'

// Custom Figma Logo Component using imported SVG
const CustomFigmaLogo = ({ size = 20 }) => (
  <img 
    src={FigmaLogo} 
    alt="Figma Logo" 
    style={{ 
      width: size, 
      height: size,
      objectFit: 'contain'
    }} 
  />
)

const PrototypeLinks = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null)

  const mainPrototypes = [
    {
      id: 1,
      title: 'نسخه ی کامل وب',
      description: 'لینک طراحی تعاملی در فیگما',
      link: 'https://figma.com/prototype/main',
      icon: <Palette size={24} />,
      color: 'primary'
    }
  ]

  const tutorials = [
    {
      id: 1,
      title: 'راهنمای استفاده از طرح تعاملی نسخه وب',
      description: 'اصول رابط جدید و ناوبری را یاد بگیرید',
      content: `
         
      این صفحه، نقطه آغاز پروتایپ است و قبل از ورود به حساب کاربری نمایش داده می‌شود.

      راهنمای تمام صفحات به صورت جداگانه در بخش مربوط در پایین صفحه در دسترس قرار دارد.

        
        لندینگ قبل از ورود

        در این صفحه، مجموعه‌ای از انیمیشن‌ها پخش می‌شوند.
با کلیک روی گزینه ورود / ثبت‌نام می‌توانید وارد جریان اصلی شوید.
از این بخش، مسیر شما به سمت صفحه اصلی و سایر صفحات سیستم ادامه پیدا می‌کند.

        
        راهنمای ورود
۱) انتخاب ورود / ثبت‌نام
۲) کلیک روی کادر شماره همراه 
۳) انتخاب دکمه دریافت کد ورود با پیامک
۴) کلیک روی کادر کد تأیید
۵) انتخاب آخرین دستگاه و زدن حذف دستگاه
۶) انتخاب پروفایل «خودم»
۷) ورود به صفحه اصلی

      `,
      icon: <BookOpen size={20} />,
      duration: '5 دقیقه مطالعه'
    },
    {
      id: 2,
      title: 'ویژگی‌های پیشرفته',
      description: 'ابزارهای حرفه‌ای و قابلیت‌های پیشرفته را تسلط پیدا کنید',
      content: `
        آموزش ویژگی‌های پیشرفته
        
        ابزارهای حرفه‌ای:
        • ویرایش ویدیو 4K/8K با پیش‌نمایش بلادرنگ
        • درجه‌بندی رنگ پیشرفته با پشتیبانی LUT
        • میکس و مسترینگ صدا چندترکیبی
        • ابزارهای گرافیک متحرک و انیمیشن
        
        بهینه‌سازی گردش کار:
        • میانبرهای صفحه‌کلید برای ویرایش سریع‌تر
        • چیدمان‌های فضای کار سفارشی
        • قابلیت‌های پردازش دسته‌ای
        • همگام‌سازی و پشتیبان‌گیری ابری
        
        ویژگی‌های همکاری:
        • ویرایش همکاری بلادرنگ
        • سیستم کامنت و بررسی پیشرفته
        • کنترل نسخه و تاریخچه پروژه
        • مدیریت تیم و مجوزها
        
        این ویژگی‌ها برای فیلمسازان حرفه‌ای و سازندگان محتوا طراحی شده‌اند.
      `,
      icon: <Play size={20} />,
      duration: '12 دقیقه مطالعه'
    },
    {
      id: 3,
      title: 'سیستم طراحی',
      description: 'اصول طراحی جدید و کتابخانه کامپوننت را درک کنید',
      content: `
        نمای کلی سیستم طراحی
        
        هویت بصری:
        • تم تاریک مدرن با افکت‌های شیشه‌ای
        • پالت رنگ سازگار با رنگ‌های اصلی و ثانویه
        • سیستم تایپوگرافی بهینه‌شده برای خوانایی
        • راهنمای سبک آیکون‌ها و تصاویر
        
        کتابخانه کامپوننت:
        • کامپوننت‌های UI قابل استفاده مجدد برای تجربه سازگار
        • الگوهای طراحی پاسخگو برای تمام اندازه‌های صفحه
        • راهنمای دسترسی و بهترین شیوه‌ها
        • مشخصات انیمیشن و انتقال
        
        راهنمای برند:
        • استفاده از لوگو و تغییرات
        • ترکیبات رنگ و نسبت‌های کنتراست
        • اصول فاصله‌گذاری و چیدمان
        • صدا و لحن برای کپی‌نویسی
        
        سیستم طراحی سازگاری در تمام پلتفرم‌ها و نقاط تماس را تضمین می‌کند.
      `,
      icon: <Palette size={20} />,
      duration: '8 دقیقه مطالعه'
    }
  ]

  const openTutorial = (tutorial) => {
    setSelectedTutorial(tutorial)
  }

  const closeTutorial = () => {
    setSelectedTutorial(null)
  }

  return (
    <section id="prototypes" className="prototype-links-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">اکران ویژه: از اینجا وارد دنیای جدید فیلم‌نت شو</h2>
          <p className="section-subtitle">
            نمونه‌ای کامل از آیندهٔ فیلم‌نت؛ همه‌چیز همین‌جا جمع شده است
            <span 
              className="help-link" 
              onClick={() => openTutorial(tutorials[0])}
            >
              نیاز به راهنما دارید؟
            </span>
          </p>

          <div className="main-prototypes">
            {mainPrototypes.map((prototype, index) => (
              <motion.div
                key={prototype.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`prototype-card glass ${prototype.color}`}
              >
                <div className="prototype-content">
                  <h3 className="prototype-title">{prototype.title}</h3>
                  <p className="prototype-description">{prototype.description}</p>
                </div>
                <a
                  href={prototype.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prototype-link"
                >
                  <CustomFigmaLogo size={20} />
                </a>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Tutorial Modal */}
      <AnimatePresence>
        {selectedTutorial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="tutorial-modal"
            onClick={closeTutorial}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="tutorial-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="tutorial-modal-header">
                <div className="tutorial-modal-title">
                  <div className="tutorial-modal-icon">
                    {selectedTutorial.icon}
                  </div>
                  <h3>{selectedTutorial.title}</h3>
                </div>
                <button
                  onClick={closeTutorial}
                  className="tutorial-modal-close"
                  aria-label="Close tutorial"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="tutorial-modal-body">
                <div className="tutorial-content-text">
                  {selectedTutorial.content.split('\n').map((line, index) => (
                    <p key={index} className="tutorial-paragraph">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="tutorial-modal-footer">
                <button onClick={closeTutorial} className="btn btn-primary">
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

export default PrototypeLinks
