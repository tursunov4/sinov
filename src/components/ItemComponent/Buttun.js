import React from 'react'
import "./button.css"
function Buttun({text , item}) {
  return (
    <button className={item ? 'button__global2' :'button__global'}>{text}</button>
  )
}

export default Buttun