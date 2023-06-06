"use client"

import React from 'react'
import styles from './page.module.css'
import StaffCard from '@/components/staffCard/StaffCard'
import { useState, useEffect } from "react";

const Staff = () => {

  const [staffInfo, setStaffInfo] = useState({
    "lecturers": [
      {
        "image": "",
        "name": "",
        "title": "",
        "description": "",
        "social": ""
      }
    ],
    "tas": [
      {
        "image": "",
        "name": "",
        "title": "",
        "description": "",
        "social": ""
      }
    ],
    "pastStaff": [
      {
        "image": "",
        "name": "",
        "title": "",
        "description": "",
        "social": ""
      }
    ]
  }
  );
  

useEffect(() => {
    fetch("content/staff.json")
    .then((res) => res.json())
    .then((jsonData) => setStaffInfo(jsonData))
}, []);

  return (
      <div className={styles.container}>
        <div className={styles.imgHolder}>
          <h1>Meet the Staff</h1>
        </div>
        <div className={styles.staffWrapper}>
          <h1>Lecturers</h1>
          <div className={styles.cardWrapper}>
            {staffInfo.lecturers.map((staff) => <StaffCard content={staff}/>)}
          </div>
          <h1>Teaching Assistants</h1>
          <div className={styles.cardWrapper}>
            {staffInfo.tas.map((staff) => <StaffCard content={staff}/>)}
          </div>
          <h1>Past Leads</h1>
          <div className={styles.cardWrapper}>
            {staffInfo.pastStaff.map((staff) => <StaffCard content={staff}/>)}
          </div>
      </div>
    </div>
  )
}

export default Staff