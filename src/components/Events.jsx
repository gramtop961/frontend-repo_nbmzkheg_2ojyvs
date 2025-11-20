import React, { useEffect, useState } from 'react'

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
        const data = await res.json()
        setEvents(data)
      } catch (e) {
        setError('Failed to load events')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 mt-12">
      <h2 className="text-white text-2xl font-semibold mb-4">Upcoming Events</h2>
      {loading && <p className="text-blue-100/80">Loading...</p>}
      {error && <p className="text-red-300">{error}</p>}
      <div className="grid md:grid-cols-2 gap-4">
        {events.map((ev) => (
          <article key={ev.id} className="rounded-2xl border border-white/10 bg-slate-800/50 p-5">
            <h3 className="text-white font-semibold text-lg">{ev.title}</h3>
            <p className="text-blue-100/90 text-sm mt-1">{ev.description}</p>
            <p className="text-blue-200/80 text-sm mt-2">
              {new Date(ev.start).toLocaleString()} – {new Date(ev.end).toLocaleString()}
            </p>
            {ev.category && <span className="inline-block mt-3 text-xs px-2 py-1 bg-emerald-400/10 text-emerald-300 rounded">{ev.category}</span>}
          </article>
        ))}
        {(!loading && !error && events.length === 0) && (
          <p className="text-blue-100/80">No events yet. Check back soon.</p>
        )}
      </div>
    </section>
  )
}
