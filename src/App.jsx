
import React, { useEffect, useReducer } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import reducer, { initialState } from './reducer/reducer.js'
import { fetchShows } from './services/api.js'
import Footer from './components/Footer.jsx'
import NavBar from './components/Navbar.jsx'

export const AppContext = React.createContext()

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const location = useLocation()

  useEffect(() => {
    let ignore = false
    const load = async () => {
      dispatch({ type: 'FETCH_INIT' })
      try {
        const data = await fetchShows(state.query)
        if (ignore) return
        const shows = Array.isArray(data) ? data.map(x => x.show) : []
        dispatch({ type: 'FETCH_SUCCESS', payload: shows })
      } catch (err) {
        dispatch({ type: 'FETCH_FAILURE', payload: err.message })
      }
    }
    load()
    return () => { ignore = true }
  }, [state.query])

  useEffect(() => {
    const saved = localStorage.getItem('watchlist')
    if (saved) {
      try {
        dispatch({ type: 'SET_WATCHLIST', payload: JSON.parse(saved) })
      } catch {}
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
  }, [state.watchlist])

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </AppContext.Provider>
  )

}
