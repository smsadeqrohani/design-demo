import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import './FeatureGrid.css'

const FeatureGrid = () => {
  const [selectedFeature, setSelectedFeature] = useState(null)

  const features = [
    {
      id: 1,
      title: 'Performance',
      description: 'Lightning-fast rendering and processing',
      link: 'https://figma.com/feature/performance',
      details: 'Experience 3x faster rendering with our optimized engine. Real-time preview for 4K and 8K content.'
    },
    {
      id: 2,
      title: 'Design System',
      description: 'Consistent and modern interface',
      link: 'https://figma.com/feature/design',
      details: 'Comprehensive design system with glass morphism effects and dark theme optimization.'
    },
    {
      id: 3,
      title: 'Collaboration',
      description: 'Real-time team collaboration',
      link: 'https://figma.com/feature/collaboration',
      details: 'Advanced collaboration tools with real-time editing, commenting, and version control.'
    },
    {
      id: 4,
      title: 'Security',
      description: 'Enterprise-grade security',
      link: 'https://figma.com/feature/security',
      details: 'Bank-level security with end-to-end encryption and secure cloud storage.'
    },
    {
      id: 5,
      title: 'Cross-Platform',
      description: 'Works on all devices',
      link: 'https://figma.com/feature/cross-platform',
      details: 'Seamless experience across desktop, web, and mobile platforms.'
    },
    {
      id: 6,
      title: 'Mobile App',
      description: 'Native mobile experience',
      link: 'https://figma.com/feature/mobile',
      details: 'Full-featured mobile app with touch-optimized interface and offline capabilities.'
    },
    {
      id: 7,
      title: 'AI Features',
      description: 'Smart editing assistance',
      link: 'https://figma.com/feature/ai',
      details: 'AI-powered color correction, audio mixing, and intelligent scene detection.'
    },
    {
      id: 8,
      title: 'Cloud Sync',
      description: 'Automatic cloud backup',
      link: 'https://figma.com/feature/cloud',
      details: 'Automatic cloud synchronization with unlimited storage and version history.'
    },
    {
      id: 9,
      title: 'API Access',
      description: 'Developer-friendly APIs',
      link: 'https://figma.com/feature/api',
      details: 'Comprehensive REST API for custom integrations and workflow automation.'
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
          <h2 className="section-title">Feature Check</h2>
          <p className="section-subtitle">
            Explore specific features and capabilities of the new Filmnete platform
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
                    Prototype
                  </button>
                  <button className="feature-btn feature-btn-secondary">
                    Help
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
                  View Feature
                </a>
                <button onClick={closeFeature} className="btn btn-glass">
                  Close
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
