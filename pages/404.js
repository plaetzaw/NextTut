import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2500)
  }, [])

  return (
    <>
      <div className='not-found'>
        <h1>404</h1>
        <h2>These are not the droids you're looking for</h2>
        <p>We'll take you home</p>
      </div>
    </>
  )
}

export default NotFound
