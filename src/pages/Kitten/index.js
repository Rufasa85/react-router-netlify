import React from 'react'
import { useParams } from 'react-router-dom'

export default function Kitten() {
    const {id} = useParams()

  return (
    <div className='Kitten'>
        <h1>Page for {id}</h1>
    </div>
  )
}
