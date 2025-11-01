import React, { useContext } from 'react'
import { AppContext } from '../App'


export default function Pagination({ totalPages }){
const { state, dispatch } = useContext(AppContext)


const first = () => dispatch({ type:'SET_PAGE', payload:1 })
const prev = () => dispatch({ type:'SET_PAGE', payload: Math.max(1, state.page - 1) })
const next = () => dispatch({ type:'SET_PAGE', payload: Math.min(totalPages, state.page + 1) })
const last = () => dispatch({ type:'SET_PAGE', payload: totalPages })


return (
<div style={{ display:'flex', gap:8, alignItems:'center', justifyContent:'center', marginTop:16 }}>
<button className="button ghost" onClick={first} disabled={state.page===1}>İlk</button>
<button className="button ghost" onClick={prev} disabled={state.page===1}>Geri</button>
<span className="small">Sayfa {state.page} / {totalPages}</span>
<button className="button ghost" onClick={next} disabled={state.page===totalPages}>İleri</button>
<button className="button ghost" onClick={last} disabled={state.page===totalPages}>Son</button>


<select className="input" style={{ width:120 }} value={state.pageSize} onChange={e=>dispatch({ type:'SET_PAGE_SIZE', payload:Number(e.target.value) })}>
{[6,12,18,24].map(n => <option key={n} value={n}>{n}/sayfa</option>)}
</select>
</div>
)
}