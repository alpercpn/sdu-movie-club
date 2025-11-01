import axios from 'axios'


const client = axios.create({ baseURL: 'https://api.tvmaze.com' })


export async function fetchShows(query){
const { data } = await client.get(`/search/shows`, { params: { q: query } })
return data
}


export async function fetchShowDetail(id){
const { data } = await client.get(`/shows/${id}`)
return data
}


export async function fetchEpisodes(id){
const { data } = await client.get(`/shows/${id}/episodes`)
return data
}