import React, { createContext,useState } from 'react'
export const OpenNoteContext=createContext(); 

export default function OpenFullNote(props) {
  const [isOpenNote,setIsOpenNote]=useState(false)

  const changeIsOpenNote=()=>setIsOpenNote(prevValue=>!prevValue)

  let dataToSend={
    isOpenNote:isOpenNote,
    setIsOpenNote:changeIsOpenNote
  }
  return (
    <OpenNoteContext.Provider value={dataToSend}>
        {props.children}
    </OpenNoteContext.Provider>
  )
}
