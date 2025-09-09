import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Play, BookOpen, Code, Palette } from 'lucide-react'
import './PrototypeLinks.css'

const PrototypeLinks = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null)

  const mainPrototypes = [
    {
      id: 1,
      title: 'Main Prototype',
      description: 'Complete redesign showcase with all new features',
      link: 'https://figma.com/prototype/main',
      icon: <Palette size={24} />,
      color: 'primary'
    }
  ]

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started Guide',
      description: 'Learn the basics of the new interface and navigation',
      content: `
        Welcome to Filmnete V2! This tutorial will guide you through the new interface.
        
        Key Features:
        • Streamlined navigation with intuitive menu structure
        • Enhanced editing tools with real-time preview
        • Improved collaboration features for team projects
        • Advanced color grading and audio mixing capabilities
        
        Getting Started:
        1. Create a new project or open an existing one
        2. Familiarize yourself with the new toolbar layout
        3. Explore the enhanced timeline features
        4. Try the new AI-powered editing suggestions
        
        The interface has been completely redesigned for better workflow efficiency.
      `,
      icon: <BookOpen size={20} />,
      duration: '5 min read'
    },
    {
      id: 2,
      title: 'Advanced Features',
      description: 'Master the professional tools and advanced capabilities',
      content: `
        Advanced Features Tutorial
        
        Professional Tools:
        • 4K/8K video editing with real-time preview
        • Advanced color grading with LUT support
        • Multi-track audio mixing and mastering
        • Motion graphics and animation tools
        
        Workflow Optimization:
        • Keyboard shortcuts for faster editing
        • Custom workspace layouts
        • Batch processing capabilities
        • Cloud synchronization and backup
        
        Collaboration Features:
        • Real-time collaborative editing
        • Advanced commenting and review system
        • Version control and project history
        • Team management and permissions
        
        These features are designed for professional filmmakers and content creators.
      `,
      icon: <Play size={20} />,
      duration: '12 min read'
    },
    {
      id: 3,
      title: 'Design System',
      description: 'Understand the new design principles and component library',
      content: `
        Design System Overview
        
        Visual Identity:
        • Modern dark theme with glass morphism effects
        • Consistent color palette with primary and secondary colors
        • Typography system optimized for readability
        • Iconography and illustration style guide
        
        Component Library:
        • Reusable UI components for consistent experience
        • Responsive design patterns for all screen sizes
        • Accessibility guidelines and best practices
        • Animation and transition specifications
        
        Brand Guidelines:
        • Logo usage and variations
        • Color combinations and contrast ratios
        • Spacing and layout principles
        • Voice and tone for copywriting
        
        The design system ensures consistency across all platforms and touchpoints.
      `,
      icon: <Palette size={20} />,
      duration: '8 min read'
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
          <h2 className="section-title">Prototype Link</h2>
          <p className="section-subtitle">
            Explore our redesigned prototype
            <span 
              className="help-link" 
              onClick={() => openTutorial(tutorials[0])}
            >
              Need help?
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
                <div className="prototype-icon">
                  {prototype.icon}
                </div>
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
                  <ExternalLink size={20} />
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
                  Got it!
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
