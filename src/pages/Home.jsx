import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

function Home() {
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
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-6">
        {!info && !error && <p className="text-blue-100/80">Loading...</p>}
        {error && <p className="text-red-300">{error}</p>}
        {info && (
          <div className="py-10 text-blue-100/90">
            <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
            <p>{info.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
