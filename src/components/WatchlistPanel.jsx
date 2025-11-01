import React, { useContext } from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'


export default function WatchlistPanel(){
const { state, dispatch } = useContext(AppContext)


return (
<aside className="card">
<h3 style={{ marginTop:0 }}>Gösterime Girecekler</h3>
{state.watchlist.length === 0 && <div className="small">Henüz eklenmedi.</div>}
<div style={{ display:'grid', gap:8 }}>
{state.watchlist.map(item => (
<div key={item.id} className="card" style={{ padding:12 }}>
<div style={{ display:'flex', gap:10 }}>
{item.image && <img src={item.image} alt={item.name} style={{ width:60, height:80, objectFit:'cover', borderRadius:8 }} />}
<div>
<div style={{ fontWeight:600 }}>{item.name}</div>
<div className="small">Dil: {item.language || '—'} · Puan: {item.rating ?? '—'}</div>
<div style={{ display:'flex', gap:8, marginTop:8 }}>
<Link className="button" to={`/show/${item.id}`}>Detay</Link>
<button className="button ghost" onClick={()=>dispatch({ type:'REMOVE_WATCHLIST', payload:item.id })}>Kaldır</button>
</div>
</div>
</div>
</div>
))}
</div>
{state.watchlist.length > 0 && (
<button style={{ marginTop:12 }} className="button ghost" onClick={()=>dispatch({ type:'CLEAR_WATCHLIST' })}>Hepsini Temizle</button>
)}
</aside>
)
}