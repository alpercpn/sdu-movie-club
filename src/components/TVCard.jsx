import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'


export default function TVCard({ show }){
const { dispatch, state } = useContext(AppContext)


const inWatchlist = state.watchlist.some(w => w.id === show.id)
const add = () => dispatch({ type: 'ADD_WATCHLIST', payload: minimal(show) })
const remove = () => dispatch({ type: 'REMOVE_WATCHLIST', payload: show.id })


return (
<div className="card">
<img className="poster" src={show?.image?.medium || show?.image?.original || ''} alt={show?.name || 'poster'} onError={(e)=>{e.currentTarget.style.display='none'}} />
<h3 style={{ margin:'10px 0 6px' }}>{show?.name}</h3>
<div className="small">
{(show.genres||[]).map(g => <span key={g} className="badge">{g}</span>)}
</div>
<div className="small" style={{ marginTop:6 }}>Dil: {show?.language || '—'} · Puan: {show?.rating?.average ?? '—'}</div>
<div className="small" style={{ marginTop:8 }} dangerouslySetInnerHTML={{ __html: (show?.summary || '').slice(0, 160) + '...' }} />


<div style={{ display:'flex', gap:8, marginTop:12 }}>
<Link className="button" to={`/show/${show.id}`}>Detay</Link>
{!inWatchlist ? (
<button className="button ghost" onClick={add}>Listeye Ekle</button>
) : (
<button className="button ghost" onClick={remove}>Listeden Çıkar</button>
)}
</div>
</div>
)
}


function minimal(show){
return {
id: show.id,
name: show.name,
image: show?.image?.medium || show?.image?.original || '',
rating: show?.rating?.average ?? null,
language: show?.language ?? null
}
}