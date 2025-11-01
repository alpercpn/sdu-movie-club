import React, { useContext, useState } from 'react'
import { AppContext } from '../App'


export default function SearchBox(){
const { state, dispatch } = useContext(AppContext)
const [text, setText] = useState(state.query)


const onSubmit = (e) => {
e.preventDefault()
dispatch({ type: 'SET_QUERY', payload: text.trim() || 'friends' })
}


return (
<form onSubmit={onSubmit} style={{ display:'flex', gap:12, marginBottom:12 }}>
<input className="input" value={text} onChange={e=>setText(e.target.value)} placeholder="Dizi ara (örn. friends)" />
<button className="button" type="submit">Ara</button>
</form>
)
}