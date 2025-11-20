import React from 'react'

export default function InfoCards({ info }) {
  const mapSrc = `https://www.google.com/maps?q=${info.latitude},${info.longitude}&z=15&output=embed`
  return (
    <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 -mt-8">
      <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6">
        <h3 className="text-white font-semibold text-lg mb-4">Location</h3>
        <div className="aspect-video rounded-lg overflow-hidden ring-1 ring-white/10">
          <iframe title="map" src={mapSrc} className="w-full h-full border-0" allowFullScreen="" loading="lazy"></iframe>
        </div>
        <p className="text-blue-100/90 mt-3">{info.address}, {info.city}, {info.country}</p>
      </div>

      <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6">
        <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
        <ul className="space-y-2 text-blue-100/90">
          <li><span className="text-white/90">Email:</span> <a href={`mailto:${info.email}`} className="hover:underline">{info.email}</a></li>
          <li><span className="text-white/90">Phone:</span> <a href={`tel:${info.phone}`} className="hover:underline">{info.phone}</a></li>
          {info.website && (<li><span className="text-white/90">Website:</span> <a className="text-emerald-300 hover:underline" href={info.website} target="_blank" rel="noreferrer">{info.website}</a></li>)}
        </ul>
      </div>

      <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-6">
        <h3 className="text-white font-semibold text-lg mb-4">Schedule</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-blue-100/90">
          {info.schedule.map((s) => (
            <React.Fragment key={s.day}>
              <div className="text-white/90">{s.day}</div>
              <div>{s.open === 'Closed' ? 'Closed' : `${s.open} – ${s.close}`}{s.note ? ` (${s.note})` : ''}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
