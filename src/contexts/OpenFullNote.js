import React, { createContext,useState } from 'react'
export const OpenNote=createContext(); 

export default function OpenFullNote(props) {
  const [isOpenNote,setIsOpenNote]=useState(false)

  const changeIsOpenNote=()=>setIsOpenNote(prevValue=>!prevValue)

  let dataToSend={
    isOpenNote:isOpenNote,
    setIsOpenNote:changeIsOpenNote
  }
  return (
    <OpenNote.Provider value={dataToSend}>
        {props.children}
    </OpenNote.Provider>
  )
}
