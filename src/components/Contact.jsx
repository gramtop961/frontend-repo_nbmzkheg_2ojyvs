import React, { useState } from 'react'

export default function Contact({ info }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending...' })
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus({ type: 'success', message: 'We received your message. Thank you!' })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white text-2xl font-semibold mb-4">Get in touch</h2>
          <p className="text-blue-100/90 mb-4">We usually respond within 1-2 business days.</p>
          <form onSubmit={handleSubmit} className="grid gap-3">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50" required />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help?" rows={5} className="bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50" required />
            <button disabled={status.type==='loading'} className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold transition disabled:opacity-60">
              {status.type === 'loading' ? 'Sending...' : 'Send message'}
            </button>
            {status.type !== 'idle' && (
              <p className={status.type==='success' ? 'text-emerald-300' : status.type==='error' ? 'text-red-300' : 'text-blue-200'}>{status.message}</p>
            )}
          </form>
        </div>
        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-blue-100/90">
            <li><span className="text-white/90">Email:</span> <a href={`mailto:${info.email}`} className="hover:underline">{info.email}</a></li>
            <li><span className="text-white/90">Phone:</span> <a href={`tel:${info.phone}`} className="hover:underline">{info.phone}</a></li>
            {info.website && (<li><span className="text-white/90">Website:</span> <a className="text-emerald-300 hover:underline" href={info.website} target="_blank" rel="noreferrer">{info.website}</a></li>)}
            <li className="text-sm text-blue-200/80 mt-4">Address:<br />{info.address}, {info.city}, {info.country}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
