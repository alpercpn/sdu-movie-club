// src/components/Filters.jsx
import React, { useContext, useMemo, useState } from 'react'
import { AppContext } from '../App'

export default function Filters() {
  const { state, dispatch } = useContext(AppContext)

  // Diller ve türler dropdown için listelenir
  const languages = useMemo(() => {
    const set = new Set(state.shows.map(s => s.language).filter(Boolean))
    return Array.from(set).sort()
  }, [state.shows])

  const genres = useMemo(() => {
    const set = new Set()
    state.shows.forEach(s => (s.genres || []).forEach(g => set.add(g)))
    return Array.from(set).sort()
  }, [state.shows])

  const [local, setLocal] = useState(state.filters)

  const apply = () => {
    dispatch({ type: 'SET_FILTERS', payload: local })
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: 12 }}>
      <select
        className="input"
        value={local.genre}
        onChange={e => setLocal(v => ({ ...v, genre: e.target.value }))}
      >
        <option value="">Tür (tümü)</option>
        {genres.map(g => (
          <option key={g} value={g.toLowerCase()}>
            {g}
          </option>
        ))}
      </select>

      <select
        className="input"
        value={local.language}
        onChange={e => setLocal(v => ({ ...v, language: e.target.value }))}
      >
        <option value="">Dil (tümü)</option>
        {languages.map(l => (
          <option key={l} value={l.toLowerCase()}>
            {l}
          </option>
        ))}
      </select>

      <select
        className="input"
        value={local.minRating}
        onChange={e => setLocal(v => ({ ...v, minRating: e.target.value }))}
      >
        <option value={0}>Min Puan: 0</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>

      <button className="button ghost" onClick={apply}>
        Uygula
      </button>
    </div>
  )
}
