import React from 'react'
import styles from './page.module.css'
import StaffCard from '@/components/staffCard/StaffCard'
import staffInfo from "public/content/staff.json"

function Staff() {
  return (
      <div className={styles.staffWrapper}>
          <h1>Lecturers</h1>
          <div className={styles.cardWrapper}>
            {staffInfo.lecturers.map((staff, index) => <StaffCard content={staff} key={index}/>)}
          </div>
          <h1>Teaching Assistants</h1>
          <div className={styles.cardWrapper}>
            {staffInfo.tas.map((staff, index) => <StaffCard content={staff} key={index}/>)}
          </div>
          <h1>Past Leads</h1>
          <div className={styles.cardWrapper}>
            {staffInfo.pastStaff.map((staff, index) => <StaffCard content={staff} key={index}/>)}
      </div>
    </div>
  )
}

export default Staff