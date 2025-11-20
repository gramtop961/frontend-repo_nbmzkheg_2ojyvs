import React from 'react'
import Gallery from '../components/Gallery'

function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="py-8">
        <h1 className="text-3xl font-semibold text-blue-100 mb-6">Gallery</h1>
        <Gallery />
      </div>
    </div>
  )
}

export default GalleryPage
