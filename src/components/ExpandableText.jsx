import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import './ExpandableText.css'

const ExpandableText = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const fullText = `
  قدیمی شدن طراحی نسبت به استانداردهای روز: طراحی قبلی فیلم‌نت در مقایسه با معیارهای نوین UI و UX دنیای امروز، رنگ کهنگی گرفته بود. ما به‌عنوان برندی مطرح و شناخته‌شده در صنعت فناوری و سرگرمی دیجیتال، نیاز داشتیم که پلتفرم خود را با ترندهای طراحی مدرن و تکنیک‌های روز هماهنگ کنیم تا همچنان در صدر رقابت بمانیم.

رشد مقیاس و تغییر سلیقه‌ی کاربران: ساختار و معماری نسخه‌ی قبل برای ظرفیت و مقیاسی کوچک‌تر طراحی شده بود. با گسترش چشمگیر مجموعه‌ی فیلم‌نت و افزایش کاربران، زمان آن رسیده بود که چیدمان صفحات و معماری کلی سیستم را بازنگری کنیم. طراحی جدید مطابق با سلیقه‌ی امروزی کاربران است و آمادگی پشتیبانی از محتوا و مخاطبان بسیار بیشتری را دارد.

بهبود جریان‌های کاربری و تجربه‌ی مخاطب: بازخوردهایی که از طریق تست‌های کاربردپذیری و تماس مستقیم با کاربران به دست آوردیم، نشان داد که بسیاری از گردش‌ها و سناریوهای کاربری نیاز به بهبود دارند. ما در نسخه‌ی جدید با بهینه‌سازی User Flow‌ها تضمین کرده‌ایم که کاربران راحت‌تر به اهدافشان برسند. تجربه‌ی کاربری روان‌تر به معنای رضایت بیشتر مخاطبان و دستیابی بهتر ما به اهداف کسب‌وکاری (مانند افزایش تعامل و نرخ تبدیل) خواهد بود.

لزوم افزودن قابلیت‌های نو و مهم: در نسخه‌ی قبلی، اضافه کردن بسیاری از امکانات مهم دشوار یا غیرممکن بود، زیرا چارچوب قدیمی انعطاف لازم را نداشت. در دنیای پرتلاطم VOD، در جا زدن معنی ندارد. برای ارائه‌ی ویژگی‌های پیشرفته‌ای که یک پلتفرم مدرن پخش آنلاین باید داشته باشد، نیاز به تغییرات اساسی داشتیم. از این رو تصمیم گرفتیم به سمت نسخه‌ی ۲ برویم؛ یک بازطراحی کامل که پایه‌ی فنی و ظاهری پلتفرم را نوسازی می‌کند. اکنون در Filmnet V2 مجموعه‌ای چشمگیر از قابلیت‌های جدید را پیاده‌سازی کرده‌ایم که برای رقابت در بازار و پاسخ به نیازهای امروز کاربران ضروری به نظر می‌رسید.

مهمترین ویژگی‌ها و بهبودهای جدید 
صفحه‌ی فرود پیش از ورود
ارسال کد ورود از طریق تماس صوتی
پخش مستقیم محتوا در اسلایدر و کارت‌ها
اطلاعات تکمیلی در صفحه‌ی محتوای فیلم/سریال
تغییر در ساختار نظرات کاربران
ایجاد تعامل بین کاربران در پاسخ به یکدیگر
نمایش هشدار در کامنت‌های دارای اسپویل 
امکان لایک و دیسلایک کردن کامنت‌ها
امکان مرتب‌سازی قسمت‌های سریال
بخش ویژه‌ی Filmnet Hall
فروش بسته‌های محتوایی
ویجت‌های خلاقانه برای نمایش محتوا
بازطراحی اساسی صفحه‌ی حساب کاربری 
بهبود جستجو و فیلتر محتوا

این مجموعه تغییرات بصری و ساختاری، فیلم‌نت را آماده می‌کند تا نیازهای امروز مخاطبان را بهتر از همیشه پاسخ دهد و تجربه‌ای مدرن، روان و لذت‌بخش ارائه کند. نسخه‌ی ۲ فیلم‌نت یک گام بزرگ رو به جلو در مسیر تبدیل شدن به برترین پلتفرم استریم ایرانی است. ما اکنون پایه‌ای مستحکم برای رشد و نوآوری‌های آینده بنا نهاده‌ایم و به حرکت رو به جلوی خود ادامه خواهیم داد. و این تازه آغاز راه است…
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
