import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Head>
        <title>Players List | Home</title>
        <meta name='keywords' content='players' />
      </Head>
      <div>

        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Home base for players</p>
        <Link href='/players'>
          <a className={styles.btn}>See Player Listing</a>
        </Link>
      </div>]
    </>
  )
}
