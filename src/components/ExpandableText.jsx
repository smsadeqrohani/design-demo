import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import './ExpandableText.css'

const ExpandableText = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const fullText = `
    We redesigned Filmnete from the ground up to provide a more intuitive and powerful filmmaking experience. 
    Our new interface focuses on simplicity while maintaining all the advanced features that professional filmmakers need.
    
    The redesign process involved extensive user research, feedback collection, and iterative design improvements. 
    We analyzed thousands of hours of user behavior data to understand pain points and optimize workflows.
    
    Key improvements include a streamlined editing interface, faster rendering times, improved collaboration tools, 
    and enhanced mobile responsiveness. The new design system ensures consistency across all platforms and devices.
    
    We've also introduced new AI-powered features for automatic color correction, smart audio mixing, and intelligent 
    scene detection. These tools help both beginners and professionals create stunning content more efficiently.
    
    The platform now supports 4K and 8K video editing with real-time preview, advanced color grading tools, 
    and seamless integration with popular cloud storage services. Our new rendering engine is 3x faster than before.
    
    Collaboration has been completely reimagined with real-time editing capabilities, advanced commenting system, 
    and project sharing features that make team workflows more efficient than ever.
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
          <h2 className="section-title">Why We Redesigned</h2>
          
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleExpanded}
              className="expand-button"
            >
              <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </motion.div>
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default ExpandableText
