import React from 'react'
import TVCard from './TVCard'


export default function TVList({ items, total }){
return (
<div>
<div className="small" style={{ marginBottom:12 }}>{total} sonuç</div>
<div className="grid">
{items.map(show => <TVCard key={show.id} show={show} />)}
</div>
</div>
)
}