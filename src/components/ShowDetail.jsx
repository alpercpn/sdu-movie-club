
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchEpisodes, fetchShowDetail } from '../services/api'

export default function ShowDetail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [show, setShow] = useState(null)
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    let ignore = false
    const load = async () => {
      try {
        setLoading(true)
        setError(null)
        const [s, e] = await Promise.all([
          fetchShowDetail(id),
          fetchEpisodes(id),
        ])
        if (ignore) return
        setShow(s)
        setEpisodes(e)
      } catch (err) {
        if (!ignore) setError(err.message)
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    load()
    return () => {
      ignore = true
    }
  }, [id])

  if (loading) {
    return (
      <div className="container">
        <div className="card">Yükleniyor...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="card" style={{ color: '#ff8d8d' }}>
          Hata: {error}
        </div>
      </div>
    )
  }

  if (!show) {
    return (
      <div className="container">
        <div className="card">Bulunamadı.</div>
      </div>
    )
  }

  return (
    <div className="card">
      {/* <Link className="button ghost" to="/">
        ← Geri
      </Link> */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
          gap: 16,
          marginTop: 12,
        }}
      >
        {show?.image?.original && (
          <img
            className="poster"
            style={{ height: 360 }}
            src={show.image.original}
            alt={show.name}
          />
        )}
        <div>
          <h2 style={{ marginTop: 0 }}>{show.name}</h2>
          <div
            className="small"
            dangerouslySetInnerHTML={{ __html: show.summary || '' }}
          />
          <div className="small" style={{ marginTop: 8 }}>
            <span className="badge">Dil: {show.language || '—'}</span>
            <span className="badge">Puan: {show?.rating?.average ?? '—'}</span>
            <span className="badge">Durum: {show.status || '—'}</span>
            <span className="badge">Premier: {show.premiered || '—'}</span>
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: 18 }}>Bölümler</h3>
      <div className="grid">
        {episodes.map((ep) => (
          <div key={ep.id} className="card" style={{ padding: 12 }}>
            <div style={{ fontWeight: 600 }}>
              S{ep.season} · B{ep.number}: {ep.name}
            </div>
            <div className="small">
              {ep.airdate} · {ep.runtime ? `${ep.runtime} dk` : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
