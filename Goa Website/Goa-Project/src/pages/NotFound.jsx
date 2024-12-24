import React from 'react'
import { Link } from 'react-router'
import Home from './Home'

export default function NotFound() {
  return (
    <div className='text-5xl'>
      404 Not Found
      <Link to={<Home />}/>
    </div>
  )
}