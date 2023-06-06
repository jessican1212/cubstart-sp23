import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const Navbar = () => {
  return (
    <>
    <div className={styles.gradBar}></div>
    <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/"><img src="assets/cubstart_logo.png"></img></Link>
          <Link href="/">Cubstart</Link>
        </div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/schedule">Schedule</Link>
          <Link href="/staff">Staff</Link>
          <Link href="/courseInfo">Course Info</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar