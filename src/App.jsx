import React from 'react'
import './App.css'
import Header from './components/Header'
import AnimatedTextSlider from './components/AnimatedTextSlider'
import ExpandableText from './components/ExpandableText'
import MediaGrid from './components/MediaGrid'
import EmbeddedVideo from './components/EmbeddedVideo'
import PrototypeLinks from './components/PrototypeLinks'
import FeatureGrid from './components/FeatureGrid'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <AnimatedTextSlider />
        <ExpandableText />
        <MediaGrid />
        <EmbeddedVideo />
        <PrototypeLinks />
        <FeatureGrid />
      </main>
    </div>
  )
}

export default App