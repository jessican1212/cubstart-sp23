"use client"

import Link from 'next/link'
import {React, useState} from 'react'
import styles from './page.module.css'

const Navbar = () => {

  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <>
    <div id={styles.burgerWrapper} className={burgerOpen ? styles.isActive : styles.inactive} onClick={() => setBurgerOpen(!burgerOpen)}>
        <div className={styles.burger} id={styles.burgerOne}></div>
        <div className={styles.burger} id={styles.burgerTwo}></div>
        <div className={styles.burger} id={styles.burgerThree}></div>
    </div>
    <div className={styles.gradBar}></div>
    <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/"><img src="assets/cubstart_logo.png"></img></Link>
          <Link href="/">Cubstart</Link>
        </div>
        <div className={styles.links}>
          <Link href="/"><span>Home</span></Link>
          <Link href="/web-schedule"><span>Web</span></Link>
          <Link href="/ios-schedule"><span>iOS</span></Link>
          <Link href="/staff"><span>Staff</span></Link>
          <Link href="/courseInfo"><span>Course Info</span></Link>
        </div>
    </div>
    <div className={styles.mobileMenu} style={burgerOpen ? {display: 'flex'} : {display: 'none'}}>
      <Link href="/"><span>Home</span></Link>
      <Link href="/web-schedule"><span>Web</span></Link>
      <Link href="/ios-schedule"><span>iOS</span></Link>
      <Link href="/staff"><span>Staff</span></Link>
      <Link href="/courseInfo"><span>Course Info</span></Link>
    </div>
    </>
  )
}

export default Navbar