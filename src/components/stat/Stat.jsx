import styles from './page.module.css'
import React from 'react'

function Stat(props) {
  return (
    <div className={styles.stats} style={{"backgroundColor": props.col}}>
        <img src={props.source}></img>
        <h2>{props.number}</h2>
        <h3>{props.desc}</h3>
    </div>
  )
}

export default Stat