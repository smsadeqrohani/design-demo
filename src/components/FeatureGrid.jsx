import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, CheckCircle, Star, Zap, Palette, Users, Shield, Globe, Smartphone } from 'lucide-react'
import './FeatureGrid.css'

const FeatureGrid = () => {
  const [selectedFeature, setSelectedFeature] = useState(null)

  const features = [
    {
      id: 1,
      title: 'Performance',
      description: 'Lightning-fast rendering and processing',
      icon: <Zap size={24} />,
      color: 'yellow',
      link: 'https://figma.com/feature/performance',
      details: 'Experience 3x faster rendering with our optimized engine. Real-time preview for 4K and 8K content.',
      status: 'active'
    },
    {
      id: 2,
      title: 'Design System',
      description: 'Consistent and modern interface',
      icon: <Palette size={24} />,
      color: 'purple',
      link: 'https://figma.com/feature/design',
      details: 'Comprehensive design system with glass morphism effects and dark theme optimization.',
      status: 'active'
    },
    {
      id: 3,
      title: 'Collaboration',
      description: 'Real-time team collaboration',
      icon: <Users size={24} />,
      color: 'blue',
      link: 'https://figma.com/feature/collaboration',
      details: 'Advanced collaboration tools with real-time editing, commenting, and version control.',
      status: 'beta'
    },
    {
      id: 4,
      title: 'Security',
      description: 'Enterprise-grade security',
      icon: <Shield size={24} />,
      color: 'green',
      link: 'https://figma.com/feature/security',
      details: 'Bank-level security with end-to-end encryption and secure cloud storage.',
      status: 'active'
    },
    {
      id: 5,
      title: 'Cross-Platform',
      description: 'Works on all devices',
      icon: <Globe size={24} />,
      color: 'cyan',
      link: 'https://figma.com/feature/cross-platform',
      details: 'Seamless experience across desktop, web, and mobile platforms.',
      status: 'active'
    },
    {
      id: 6,
      title: 'Mobile App',
      description: 'Native mobile experience',
      icon: <Smartphone size={24} />,
      color: 'pink',
      link: 'https://figma.com/feature/mobile',
      details: 'Full-featured mobile app with touch-optimized interface and offline capabilities.',
      status: 'coming-soon'
    },
    {
      id: 7,
      title: 'AI Features',
      description: 'Smart editing assistance',
      icon: <Star size={24} />,
      color: 'orange',
      link: 'https://figma.com/feature/ai',
      details: 'AI-powered color correction, audio mixing, and intelligent scene detection.',
      status: 'beta'
    },
    {
      id: 8,
      title: 'Cloud Sync',
      description: 'Automatic cloud backup',
      icon: <CheckCircle size={24} />,
      color: 'teal',
      link: 'https://figma.com/feature/cloud',
      details: 'Automatic cloud synchronization with unlimited storage and version history.',
      status: 'active'
    },
    {
      id: 9,
      title: 'API Access',
      description: 'Developer-friendly APIs',
      icon: <ExternalLink size={24} />,
      color: 'indigo',
      link: 'https://figma.com/feature/api',
      details: 'Comprehensive REST API for custom integrations and workflow automation.',
      status: 'coming-soon'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'var(--primary-color)'
      case 'beta':
        return 'var(--secondary-color)'
      case 'coming-soon':
        return 'var(--text-muted)'
      default:
        return 'var(--text-muted)'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Live'
      case 'beta':
        return 'Beta'
      case 'coming-soon':
        return 'Coming Soon'
      default:
        return 'Unknown'
    }
  }

  const openFeature = (feature) => {
    setSelectedFeature(feature)
  }

  const closeFeature = () => {
    setSelectedFeature(null)
  }

  return (
    <section id="features" className="feature-grid-section">
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
                <div className="feature-header">
                  <div className={`feature-icon ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div 
                    className="feature-status"
                    style={{ color: getStatusColor(feature.status) }}
                  >
                    {getStatusText(feature.status)}
                  </div>
                </div>

                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>

                <div className="feature-action">
                  <span className="feature-link-text">Check Feature</span>
                  <ExternalLink size={16} />
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
                  <div className={`feature-modal-icon ${selectedFeature.color}`}>
                    {selectedFeature.icon}
                  </div>
                  <div>
                    <h3>{selectedFeature.title}</h3>
                    <div 
                      className="feature-modal-status"
                      style={{ color: getStatusColor(selectedFeature.status) }}
                    >
                      {getStatusText(selectedFeature.status)}
                    </div>
                  </div>
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
