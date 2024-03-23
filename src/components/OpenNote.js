import React from 'react'
import "../styles/OpenNote.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default async function OpenNote() {
  const param=useParams()
  const url=`http://localhost:5000/note?id=${param.id}`
  const data=await axios.get(url)
  return (
    <div id='container'>
      <h1>Content: {data.content} title={data.title}</h1>
    </div>
  )
}
