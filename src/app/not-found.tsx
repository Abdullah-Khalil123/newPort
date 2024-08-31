import React from 'react'
import style from './home.module.css'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className={style.NotFound}>
      <div>
        <h1>There was a Problem.</h1>
        <p>We could not find the page you were looking for</p>
        <p>
          Go back to <Link href="/">Home</Link>
        </p>
      </div>
    </div>
  )
}

export default NotFound
