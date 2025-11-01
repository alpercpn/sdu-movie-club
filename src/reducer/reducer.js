// src/reducer/reducer.js
export const initialState = {
  shows: [],
  loading: false,
  error: null,
  query: 'friends',
  filters: { genre: '', language: '', minRating: 0 },
  watchlist: [],
  page: 1,
  pageSize: 6
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: null, shows: action.payload, page: 1 }
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'SET_QUERY':
      return { ...state, query: action.payload }
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload }, page: 1 }
    case 'SET_PAGE_SIZE':
      return { ...state, pageSize: action.payload, page: 1 }
    case 'SET_PAGE':
      return { ...state, page: action.payload }
    case 'ADD_WATCHLIST': {
      const exists = state.watchlist.some(w => w.id === action.payload.id)
      if (exists) return state
      return { ...state, watchlist: [...state.watchlist, action.payload] }
    }
    case 'REMOVE_WATCHLIST':
      return { ...state, watchlist: state.watchlist.filter(w => w.id !== action.payload) }
    case 'CLEAR_WATCHLIST':
      return { ...state, watchlist: [] }
    case 'SET_WATCHLIST':
      return { ...state, watchlist: action.payload }
    default:
      return state
  }
}
