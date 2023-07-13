import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
      <div className='container-md about-section text-center'>
          <h1> oops Error 404</h1>
          <p>The Page cannot be found</p>
          <Link to='/'>
              <button className='btn btn-success'>Go back to Homepage</button>
          </Link>
    </div>
  )
}

export default Error