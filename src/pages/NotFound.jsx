import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-blue-100">404</h1>
      <p className="text-blue-200/80 mt-2">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
