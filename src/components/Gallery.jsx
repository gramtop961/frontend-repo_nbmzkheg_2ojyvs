import React, { useEffect, useState } from 'react'

export default function Gallery() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/gallery`)
        const data = await res.json()
        setImages(data)
      } catch (e) {
        setError('Failed to load gallery')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 mt-12">
      <h2 className="text-white text-2xl font-semibold mb-4">Photo Gallery</h2>
      {loading && <p className="text-blue-100/80">Loading...</p>}
      {error && <p className="text-red-300">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img) => (
          <figure key={img.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-800/40">
            <img src={img.url} alt={img.caption || 'Gallery image'} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300" />
            {(img.caption || img.credit) && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/40 text-white text-xs p-2 flex justify-between">
                <span>{img.caption}</span>
                <span className="opacity-70">{img.credit}</span>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  )
}
