import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import './ExpandableText.css'

const ExpandableText = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const fullText = `
    ما فیلم‌نت را از پایه بازطراحی کردیم تا تجربه‌ای شهودی‌تر و قدرتمندتر از فیلمسازی ارائه دهیم. 
    رابط جدید ما بر سادگی تمرکز دارد در حالی که تمام ویژگی‌های پیشرفته‌ای که فیلمسازان حرفه‌ای نیاز دارند را حفظ می‌کند.
    
    فرآیند بازطراحی شامل تحقیقات گسترده کاربری، جمع‌آوری بازخورد و بهبودهای تکراری طراحی بود. 
    ما هزاران ساعت داده رفتار کاربری را تحلیل کردیم تا نقاط درد را درک کرده و گردش کارها را بهینه کنیم.
    
    بهبودهای کلیدی شامل رابط ویرایش ساده‌شده، زمان‌های رندر سریع‌تر، ابزارهای همکاری بهبود یافته، 
    و پاسخگویی موبایل بهتر است. سیستم طراحی جدید سازگاری در تمام پلتفرم‌ها و دستگاه‌ها را تضمین می‌کند.
    
    ما همچنین ویژگی‌های جدید مبتنی بر هوش مصنوعی برای تصحیح رنگ خودکار، میکس هوشمند صدا و تشخیص هوشمند 
    صحنه معرفی کرده‌ایم. این ابزارها به مبتدیان و حرفه‌ای‌ها کمک می‌کند تا محتوای خیره‌کننده را کارآمدتر ایجاد کنند.
    
    پلتفرم اکنون ویرایش ویدیو 4K و 8K با پیش‌نمایش بلادرنگ، ابزارهای پیشرفته درجه‌بندی رنگ، 
    و ادغام بی‌درز با سرویس‌های ذخیره‌سازی ابری محبوب را پشتیبانی می‌کند. موتور رندر جدید ما 3 برابر سریع‌تر از قبل است.
    
    همکاری کاملاً بازطراحی شده با قابلیت‌های ویرایش بلادرنگ، سیستم کامنت پیشرفته، 
    و ویژگی‌های اشتراک‌گذاری پروژه که گردش کار تیمی را کارآمدتر از همیشه می‌کند.
  `

  const previewText = fullText.split('\n').slice(0, 5).join('\n').trim()

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section id="about" className="expandable-text-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="expandable-content"
        >
          <h2 className="section-title">چرا بازطراحی کردیم</h2>
          
          <div className="text-container glass">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-content"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isExpanded ? 'expanded' : 'collapsed'}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-body"
                >
                  {isExpanded ? fullText : previewText}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="expand-control">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleExpanded}
              className="expand-button-simple"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default ExpandableText
