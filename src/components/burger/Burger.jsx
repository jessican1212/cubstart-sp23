import React from 'react'
import styles from './page.module.css'

export const Burger = () => {
  return (
    <div className={styles.burgerWrapper}>
        <div className={styles.burger} id={styles.burgerOne}></div>
        <div className={styles.burger} id={styles.burgerTwo}></div>
        <div className={styles.burger} id={styles.burgerThree}></div>
    </div>
  )
}

export default Burger