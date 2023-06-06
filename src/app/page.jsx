"use client"

import styles from './page.module.css'
import Tilt from 'react-parallax-tilt';
import Stat from '@/components/stat/Stat'
import Carousel from '@/components/carousel/Carousel'
import Project from '@/components/project/Project'
import Partner from '@/components/partner/Partner'

export default function Home() {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.flexItem} id={styles.left}>
        <div className={styles.textWrapper}>
          <h1>Cubstart: Introduction to Building Apps</h1>
          <h2>CS 198 • Spring 2023</h2>
          <h3>Cubstart is a web/mobile development course for beginner to intermediate developers. Whether you need project experiences to kickstart your resume, or if you have a desire to build but don’t know where to start, Cubstart is the course for you.</h3>
          <div className={styles.buttonContainer}>
            <a className={styles.applyButton} href="#">Apps will open soon!</a>
          </div>
        </div>
      </div>
      <div className={styles.flexItem} id={styles.right}>
        <Tilt><img src="assets/home-graphic.svg"></img></Tilt>
      </div>
    </div>
    <div className={styles.sectionWrapper}>
      <Stat source="assets/icons8-pencil-50.png" number="200" desc="students per semester" col="var(--light-accent)"/>
      <Stat source="assets/icons8-female-50.png" number="50%" desc="female/non-binary" col="var(--accent)"/>
      <Stat source="assets/icons8-handshake-50.png" number="3+" desc="partnered URM organizations" col="var(--dark-accent)"/>
    </div>
    <div className={styles.sectionWrapper}>
      <div className={styles.infoSection}>
        <h1>What is Cubstart?</h1>
        <h3>Cubstart is a student-run course as part of the <span className={styles.underline}>DeCal Program</span> at University of California, Berkeley. We're run by members of <span className={styles.underline}>Cal Hacks</span>, the world's largest collegiate hackathon. We've been running since Fall 2020, with the aim of supporting underrepresented minorities and beginner to intermediate developers in their journeys in STEM.</h3>
        <h3>We have 2 tracks, <span className={styles.underline}>iOS</span> development and <span className={styles.underline}>Web</span> development, so students can choose the platform they prefer.</h3>
        <Carousel/>
        <h3>Throughout the semester, we provide mentorship and resources for students to learn how to build an app from start to finish: ideation, team-building, programming, pitching, and more. Our students hone these skills in a month-long final project, where they work in teams to develop an app! We end off with <span className={styles.underline}>Demo Day</span>, a mini-hackathon for students to show off their creations.</h3>
      </div>
    </div>
    <div className={styles.sectionWrapper}>
        <div className={styles.projectWrapper}>
          <h1>Cubstart Creations</h1>
          <h3>Here are just a few of many outstanding projects developed by Cubstart alumni!</h3>
          <h3><em><span className={styles.highlight}>Click each card for more info!</span></em></h3>
          <div className = {styles.projectContainer}>
            <Project title="PLTNM" source="assets/PLTNM.png" link="https://pltnm.netlify.app/" description="PLTNM is a music game that you can play with friends: you'll hear a song and have to guess which one of them has it in his playlist. The app allows you to choose and upload your best songs playlist from your preferred music service. It then builds a selection of songs from you and your friends, especially those you have in common!"/>
            <Project title="PLTNM" source="assets/PLTNM.png" link="https://pltnm.netlify.app/" description="PLTNM is a music game that you can play with friends: you'll hear a song and have to guess which one of them has it in his playlist. The app allows you to choose and upload your best songs playlist from your preferred music service. It then builds a selection of songs from you and your friends, especially those you have in common!"/>
            <Project title="PLTNM" source="assets/PLTNM.png" link="https://pltnm.netlify.app/" description="PLTNM is a music game that you can play with friends: you'll hear a song and have to guess which one of them has it in his playlist. The app allows you to choose and upload your best songs playlist from your preferred music service. It then builds a selection of songs from you and your friends, especially those you have in common!"/>
          </div>
        </div>
    </div>
    <div className={styles.sectionWrapper}>
        <div className={styles.projectWrapper}>
          <h1>Sponsors</h1>
          <h3>Thank you to our sponsors for helping us run Cubstart!</h3>
          <h3><em>Interested in sponsoring us? Contact cubstart@calhacks.io.</em></h3>
          <div className = {styles.SponsContainer}>
            <img src="assets/digital_ocean_logo.png"></img>
            <img src="assets/optiver_logo.png"></img>
            <img src="assets/ibm_logo.png"></img>
          </div>
        </div>
    </div>
    <div className={styles.sectionWrapper}>
        <div className={styles.projectWrapper}>
          <h1>Partners</h1>
          <div className = {styles.projectContainer}>
            <Partner name = "Hispanic Engineers & Scientists" source = "/assets/hes_logo.png" link = "https://hes.berkeley.edu/" col="#65BEE1"/>
            <Partner name = "Black Engineering and Science Student Association" source = "/assets/bessa_logo.png" link = "http://www.ucberkeleybessa.com/" col="#FE8E00"/>
            <Partner name = "Society of Women Engineers" source = "/assets/swe_logo.png" link = "https://swe.berkeley.edu/" col="#0F77A1"/>
          </div>
        </div>
    </div>

    <div className={styles.FAQSection}>
        <section className={styles.content}>
  <div className={styles.accordion}>
    <h1>Frequently Asked Questions</h1>
    <label className={styles.accordion__item} id={styles.first}>
      <input type="checkbox" name="accordion"/>
      <div className={styles.accordion__title}>What do you learn in this DeCal?</div>
      <div className={styles.accordion__content}>By taking our DeCal, you'll get to start out by choosing a track: iOS development or web development. All the labs and many of the lectures for the two tracks will be separate. <br/> <br/>Then, over the course of the semester, you'll build unique, resume-quality guided projects every week, learn about project ideation, crafting a project proposal, designing application mockups, developing full-stack web or iOS applications, pitching your final project to experts and professionals, and much more!</div>
    </label>
    <label className={styles.accordion__item}>
      <input type="checkbox" name="accordion"/>
      <div className={styles.accordion__title}>Are there any prerequisites?</div>
      <div className={styles.accordion__content}>The Web development track is designed for beginners to programming. Prior experience in programming will help, but isn't needed!
        <br/><br/>The iOS development track is designed for intermediate and advanced programmers. We encourage those who have some experience programming to enroll. We still do allow beginner programmers to enroll in the course, but it may take extra effort to keep up with the content during the first few weeks.</div>
    </label>
    <label className={styles.accordion__item}>
      <input type="checkbox" name="accordion"/>
      <div className={styles.accordion__title}>Is there any required material?</div>
      <div className={styles.accordion__content}>If participating in the iOS track, you'll need a MacBook with macOS 10.14.3+ later that can run Xcode 11. Older Macs may run into some issues. <br/><br/>For the web track, you should be fine with nearly any laptop.</div>
    </label>
    <label className={styles.accordion__item}>
      <input type="checkbox" name="accordion"/>
      <div className={styles.accordion__title}>What is the attendance policy?</div>
      <div className={styles.accordion__content}>All of our lectures and labs will be held synchronously in person. You'll be expected to attend lecture and the first hour of lab each week. The second hour of lab is optional, but highly recommended for students struggling with the course material.</div>
    </label>
    <label className={styles.accordion__item}>
      <input type="checkbox" name="accordion"/>
      <div className={styles.accordion__title}>How do I apply?</div>
      <div className={styles.accordion__content}><b>Applications have closed for Spring 2023. We'll see you in Fall! </b></div>
    </label>
    <label className={styles.accordion__item}>
      <input type="checkbox" name="accordion"/>
      <div className={styles.accordion__title}>Wow, this DeCal is so cool! Y'all are awesome!</div>
      <div className={styles.accordion__content}>Thanks, you're pretty cool too.</div>
    </label>
  </div>
</section>

    </div>
    </>
  )
}
