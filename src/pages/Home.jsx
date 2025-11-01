// src/pages/Home.jsx
import React, { useContext, useMemo } from 'react'
import { AppContext } from '../App'
import SearchBox from '../components/SearchBox'
import Filters from '../components/Filters'
import TVList from '../components/TVList'
import WatchlistPanel from '../components/WatchlistPanel'
import Pagination from '../components/Pagination'

export default function Home() {
  const { state } = useContext(AppContext)

  // Filtreleri uygula (genre, language, minRating)
  const filtered = useMemo(() => {
    return state.shows.filter(show => {
      const g = (state.filters.genre || '').toLowerCase()
      const l = (state.filters.language || '').toLowerCase()
      const min = Number(state.filters.minRating || 0)
      const genres = (show.genres || []).map(x => (x || '').toLowerCase())
      const lang = (show.language || '').toLowerCase()
      const rating = show?.rating?.average ?? 0
      const byGenre = g ? genres.includes(g) : true
      const byLang = l ? lang === l : true
      const byRating = rating >= min
      return byGenre && byLang && byRating
    })
  }, [state.shows, state.filters])

  // Pagination
  const total = filtered.length
  const start = (state.page - 1) * state.pageSize
  const end = start + state.pageSize
  const pageItems = filtered.slice(start, end)
  const totalPages = Math.max(1, Math.ceil(total / state.pageSize))

  return (
    <div>
      <div className="header">
        <div className="title">Kampüs Film Kulübü — Dizi Arama</div>
        <div className="badge mono">TVMaze API</div>
      </div>

      <div className="row">
        <div>
          <div className="card" style={{ marginBottom: 12 }}>
            <SearchBox />
            <Filters />
          </div>

          <div className="card">
            {state.loading && <div>Yükleniyor...</div>}
            {state.error && (
              <div>
                <div style={{ color: '#ff8d8d' }}>Hata: {state.error}</div>
                <div className="small">Lütfen tekrar deneyin.</div>
              </div>
            )}
            {!state.loading && !state.error && (
              <TVList items={pageItems} total={total} />
            )}
            {!state.loading && !state.error && total === 0 && (
              <div>Sonuç bulunamadı.</div>
            )}
            <Pagination totalPages={totalPages} />
          </div>
        </div>

        <WatchlistPanel />
      </div>
    </div>
  )
}
