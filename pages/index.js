// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <h1>Home</h1>
      <p>Home base for players</p>
      <Link href='/players'><a>See Player Listing</a></Link>
    </div>
  )
}
