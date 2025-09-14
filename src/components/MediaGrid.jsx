import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Maximize2, Image as ImageIcon } from 'lucide-react'
import './MediaGrid.css'

const MediaGrid = () => {
  const [fullscreenItem, setFullscreenItem] = useState(null)

  const mediaItems = [
    {
      id: 1,
      type: 'gif',
      src: 'https://s3.thr1.sotoon.ir/qtest/qahve-pedari-exclusive 2.gif',
      title: 'ویجت اختصاصی',
      description: ''
    },
    {
      id: 2,
      type: 'gif',
      src: 'https://s3.thr1.sotoon.ir/qtest/Vitrin-_online-video-cutter.com_.gif',
      title: 'ویترین',
      description: ''
    },
    {
      id: 3,
      type: 'gif',
      src: 'https://s3.thr1.sotoon.ir/qtest/test-gif.gif',
      title: 'ویجت نمایش بلیت اکران آنلاین',
      description: ''
    },
    {
      id: 4,
      type: 'gif',
      src: 'https://s3.thr1.sotoon.ir/qtest/Exclusive-_online-video-cutter.com_ 3.28.19 PM.gif',
      title: 'ویجت اختصاصی ویژه',
      description: ''
    },
    {
      id: 5,
      type: 'gif',
      src: 'https://s3.thr1.sotoon.ir/qtest/Login-_online-video-cutter.com_.gif',
      title: 'ورود و ثبت‌نام',
      description: ''
    },
    {
      id: 6,
      type: 'gif',
      src: 'https://s3.thr1.sotoon.ir/qtest/Gallery-_online-video-cutter.com_ 4.46.45 PM.gif',
      title: 'گالری تصاویر',
      description: ''
    },
    {
      id: 7,
      type: 'gif',
      src: 'https://s3.thr1.sotoon.ir/qtest/Sub-plans 4.37.07 PM.gif',
      title: 'گروه های اشتراکی',
      description: ''
    },
    {
      id: 8,
      type: 'gif',
      src: 'https://s3.thr1.sotoon.ir/qtest/Podcast 4.44.07 PM.gif',
      title: 'ویجت محتوای صوتی',
      description: ''
    },
    {
      id: 9,
      type: 'webm',
      src: '/Episodes-qULTRA.gif',
      title: 'قسمت های سریال',
      description: ''
    }
  ]

  const openFullscreen = (item) => {
    setFullscreenItem(item)
  }

  const closeFullscreen = () => {
    setFullscreenItem(null)
  }

  const renderMediaContent = (item) => {
    switch (item.type) {
      case 'video':
        return (
          <video
            src={item.src}
            poster={`https://images.unsplash.com/photo-${1500000000000 + item.id}?w=800&h=450&fit=crop`}
            className="media-content"
            loop
            muted
          />
        )
      case 'gif':
        return (
          <img
            src={item.src}
            alt={item.title}
            className="media-content"
          />
        )
      default:
        return (
          <img
            src={item.src}
            alt={item.title}
            className="media-content"
          />
        )
    }
  }

  return (
    <section id="gallery" className="media-grid-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">فریم هایی از آینده ی فیلم‌نت</h2>
          
          <div className="media-grid">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="media-item glass"
                onClick={() => openFullscreen(item)}
              >
                <div className="media-wrapper">
                  {renderMediaContent(item)}
                  <div className="media-overlay">
                    <div className="media-info">
                      <h3 className="media-title">{item.title}</h3>
                      <p className="media-description">{item.description}</p>
                    </div>
                    <div className="media-actions">
                      {item.type === 'video' ? (
                        <Play size={24} className="play-icon" />
                      ) : (
                        <Maximize2 size={24} className="expand-icon" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreenItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fullscreen-modal"
            onClick={closeFullscreen}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fullscreen-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeFullscreen}
                className="close-button"
                aria-label="Close fullscreen"
              >
                <X size={24} />
              </button>
              
              <div className="fullscreen-media">
                {fullscreenItem.type === 'video' ? (
                  <video
                    src={fullscreenItem.src}
                    className="fullscreen-video"
                    controls
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={fullscreenItem.src}
                    alt={fullscreenItem.title}
                    className="fullscreen-image"
                  />
                )}
              </div>
              
              <div className="fullscreen-info">
                <h3 className="fullscreen-title">{fullscreenItem.title}</h3>
                <p className="fullscreen-description">{fullscreenItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default MediaGrid
