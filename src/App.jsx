import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import InfoCards from './components/InfoCards'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Contact from './components/Contact'

function App() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Header />
      {!info && !error && (
        <div className="max-w-6xl mx-auto px-6"><p className="text-blue-100/80">Loading...</p></div>
      )}
      {error && (
        <div className="max-w-6xl mx-auto px-6"><p className="text-red-300">{error}</p></div>
      )}
      {info && (
        <>
          <InfoCards info={info} />
          <Gallery />
          <Events />
          <Contact info={info} />
          <footer className="text-center text-xs text-blue-200/60 py-10">© {new Date().getFullYear()} Ješenca-Požeg Community Center</footer>
        </>
      )}
    </div>
  )
}

export default App
