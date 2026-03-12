import React from 'react'
import { useParams } from 'react-router-dom'

const Contactdetial = () => {
    const param=useParams()
  return (
    <div>
        <h1>{param.id} Contact detail page</h1>
    </div>
  )
}

export default Contactdetial