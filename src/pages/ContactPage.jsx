import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'

function ContactPage() {
  const [info, setInfo] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/info`)
        const data = await res.json()
        setInfo(data)
      } catch (e) {
        setError('Unable to load center information')
      }
    }
    load()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="py-8">
        <h1 className="text-3xl font-semibold text-blue-100 mb-6">Contact</h1>
        {!info && !error && <p className="text-blue-100/80">Loading...</p>}
        {error && <p className="text-red-300">{error}</p>}
        {info && <Contact info={info} />}
      </div>
    </div>
  )
}

export default ContactPage
