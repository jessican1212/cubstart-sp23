import React from 'react'
import Syllabus from 'public/content/courseInfo.mdx';
import styles from './page.module.css'

const CourseInfo = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Course Information</h1>
      <div><Syllabus /></div>
    </div>
  )
}

export default CourseInfo