import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "../styles/try.css"

export default function Try() {
    let myRef=useRef(null)
    let handleClick=()=>{
        myRef.current.click()
    }
  
  return (
    <div id='show' onClick={handleClick}>
      <Link to='/hh' ref={myRef} id='some' >Click</Link>
    </div>
  )
}
