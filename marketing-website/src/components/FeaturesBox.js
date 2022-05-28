import React from 'react'
import Feature from './Feature'

function FeaturesBox() {
  return (
    <div className='features-list mt-30'>
      <div className='container'>
        <div className='d-flex space-between'>
          <Feature name="React JS" />
          <Feature name="Node JS" />
          <Feature name="Vue JS" />
        </div>
      </div>
    </div>
  )
}

export default FeaturesBox