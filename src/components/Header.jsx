import React from 'react'

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.25),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">
          Ješenca-Požeg Community Center
        </h1>
        <p className="mt-4 text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
          A welcoming space for events, learning, and togetherness.
        </p>
      </div>
    </header>
  )
}
