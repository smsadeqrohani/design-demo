import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './AnimatedTextSlider.css'

const AnimatedTextSlider = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Welcome to Filmnete V2",
    "Redesigned Experience",
    "Modern Interface",
    "Enhanced Features",
    "Better Performance"
  ]

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        // Move to next text
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts])

  return (
    <section id="hero" className="animated-text-section section">
      <div className="container">
        <div className="text-slider-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-slider-content"
          >
            <h1 className="animated-text">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="cursor"
              >
                |
              </motion.span>
            </h1>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="floating-elements"
          >
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedTextSlider
