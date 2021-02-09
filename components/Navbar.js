import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <Image src='/RLCS.png' width={128} height={128} alt='RLCS' />
        </div>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/players'><a>Player List</a></Link>
      </nav>
    </>
  )
}

export default Navbar
