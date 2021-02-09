import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      <div className='not-found'>
        <h1>These are not the pages you are looking for</h1>
        <h2>404</h2>
        <p>Return <Link href='/'><a><b>home</b></a></Link></p>
      </div>
    </>
  )
}

export default NotFound
