"use client"

import React from 'react'
import Syllabus from '../mdxFiles/courseInfo.mdx';
import styles from './page.module.css'

const CourseInfo = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Course Information</h1>
      <Syllabus />
    </div>
  )
}

export default CourseInfo