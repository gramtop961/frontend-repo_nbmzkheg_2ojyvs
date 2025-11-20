import React from 'react'
import Events from '../components/Events'

function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="py-8">
        <h1 className="text-3xl font-semibold text-blue-100 mb-6">Events</h1>
        <Events />
      </div>
    </div>
  )
}

export default EventsPage
