import React from 'react'
import Home from './Home'
import Info from './Info'
import EventsPage from './EventsPage'
import GalleryPage from './GalleryPage'
import ContactPage from './ContactPage'

function Index() {
  return (
    <>
      <Home />
      <div className="max-w-6xl mx-auto px-6">
        <div className="my-10 h-px bg-white/10" />
      </div>
      <Info />
      <div className="max-w-6xl mx-auto px-6">
        <div className="my-10 h-px bg-white/10" />
      </div>
      <EventsPage />
      <div className="max-w-6xl mx-auto px-6">
        <div className="my-10 h-px bg-white/10" />
      </div>
      <GalleryPage />
      <div className="max-w-6xl mx-auto px-6">
        <div className="my-10 h-px bg-white/10" />
      </div>
      <ContactPage />
    </>
  )
}

export default Index
