import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react'
import './EmbeddedVideo.css'

const EmbeddedVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [isSeeking, setIsSeeking] = useState(false)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  const videoSrc = 'https://s3.thr1.sotoon.ir/qtest/1757770076250655-hq.mp4'

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)
    const updateBuffered = () => {
      if (video.buffered.length > 0) {
        setBuffered(video.buffered.end(video.buffered.length - 1))
      }
    }

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)
    video.addEventListener('progress', updateBuffered)
    video.addEventListener('canplay', updateBuffered)

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
      video.removeEventListener('progress', updateBuffered)
      video.removeEventListener('canplay', updateBuffered)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.play()
    } else {
      video.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = isMuted
  }, [isMuted])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen()
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const handleSeek = (e) => {
    const video = videoRef.current
    if (!video || duration === 0) return

    setIsSeeking(true)
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = Math.max(0, Math.min(duration, (clickX / rect.width) * duration))
    
    // Ensure we seek from current position to avoid buffering issues
    video.currentTime = newTime
    setCurrentTime(newTime)
    
    // Reset seeking state after a short delay
    setTimeout(() => setIsSeeking(false), 100)
  }

  const handleSeekStart = () => {
    setIsSeeking(true)
  }

  const handleSeekEnd = () => {
    setIsSeeking(false)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleMouseMove = () => {
    setShowControls(true)
    setTimeout(() => setShowControls(false), 3000)
  }

  const handleControlsMouseEnter = () => {
    setShowControls(true)
  }

  const handleControlsMouseLeave = () => {
    setTimeout(() => setShowControls(false), 1000)
  }

  return (
    <section id="video" className="embedded-video-section section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">۲۰ ثانیه با فردای فیلم‌نت</h2>
          <p className="section-subtitle">
            تحولی سریع، سفری بزرگ؛ این فقط آغاز راه است
          </p>

          <div className="video-container glass">
            <div
              ref={containerRef}
              className="video-wrapper"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setShowControls(false)}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                className="embedded-video"
                loop
                autoPlay
                muted={isMuted}
                poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=675&fit=crop"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showControls ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="video-controls"
                onMouseEnter={handleControlsMouseEnter}
                onMouseLeave={handleControlsMouseLeave}
              >
                <div 
                  className="progress-bar" 
                  onClick={handleSeek}
                  onMouseDown={handleSeekStart}
                  onMouseUp={handleSeekEnd}
                >
                  <div
                    className="buffer-fill"
                    style={{ width: `${(buffered / duration) * 100}%` }}
                  />
                  <div
                    className="progress-fill"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>

                <div className="controls-row">
                  <div className="controls-left">
                    <button
                      onClick={togglePlay}
                      className="control-button"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="control-button"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>

                    <span className="time-display">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="controls-right">
                    <button
                      onClick={toggleFullscreen}
                      className="control-button"
                      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                    >
                      {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                    </button>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default EmbeddedVideo
