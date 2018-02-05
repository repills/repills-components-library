import React from 'react'

export default function({title, description, children}) {
  return (
    <div>
      <h1>{title}</h1>
      {
        description &&
        <p>{description}</p>
      }
      {children}
    </div>
  )
}

