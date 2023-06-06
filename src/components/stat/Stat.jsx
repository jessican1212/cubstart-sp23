import styles from './page.module.css'
import React from 'react'

function Stat(props) {
  return (
    <div className={styles.stats} style={{"background-color": props.col}}>
        <img src={props.source}></img>
        <h2>{props.number}</h2>
        <h3>{props.desc}</h3>
    </div>
  )
}

export default Stat