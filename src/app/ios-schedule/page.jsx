import React from 'react'
import styles from './page.module.css'
import Syllabus from 'public/content/ios-schedules/ios-schedule.mdx';

function iosSchedule () {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.heading}>
        <h1>iOS Schedule</h1>
        <h2>CS 198 | UC Berkeley | Fall 2023</h2>
      </div>
      <div className={styles.table}>
            <Syllabus />
            
    </div>
    </div>
  )
}

export default iosSchedule