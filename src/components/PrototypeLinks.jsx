import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, BookOpen, Code, Palette } from 'lucide-react'
import './PrototypeLinks.css'

// Figma Logo Component
const FigmaLogo = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12C12 9.79086 10.2091 8 8 8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16C10.2091 16 12 14.2091 12 12Z"
      fill="#F24E1E"
    />
    <path
      d="M12 4C12 6.20914 10.2091 8 8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4Z"
      fill="#FF7262"
    />
    <path
      d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z"
      fill="#A259FF"
    />
    <path
      d="M12 20C12 17.7909 10.2091 16 8 16C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24C10.2091 24 12 22.2091 12 20Z"
      fill="#1ABCFE"
    />
    <path
      d="M20 4C20 6.20914 18.2091 8 16 8C13.7909 8 12 6.20914 12 4C12 1.79086 13.7909 0 16 0C18.2091 0 20 1.79086 20 4Z"
      fill="#0ACF83"
    />
  </svg>
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
                  <FigmaLogo size={20} />
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
