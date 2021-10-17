import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LinkCard from './cards/LinkCard'
import Card from './cards/Card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joseph Tran's projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/sword.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my website!
        </h1>

        <p className={styles.description}>
          My name is Joseph TRAN and I am a software engineer.
        </p>

        <div className={styles.grid}>
          <Card link="https://github.com/SquireOfSoftware"
                title="Main Github page"
                blurb="For seeing what I have done outside of work."
                image="./stars_night_sky_base.jpeg"/>

          <LinkCard link="https://github.com/SquireOfSoftware/Orion"
                    title="Orion"
                    blurb="An Autonomous Drone Flight system. Aiming to make drone flight autonomous via just highlighting key checkpoints on an iPad"/>

          <LinkCard link="https://squireofsoftware.github.io/JSPets/"
                    title="JSPets"
                    blurb="A digital pet experience, walking around Tasmania"/>

          <LinkCard link="https://github.com/SquireOfSoftware/NNFL/tree/master/Project/"
                    title="Hand Gesture Music Player"
                    blurb="Controlling your music player via hand gestures in Matlab with a Neural Network behind it"/>

          <LinkCard link="https://github.com/SquireOfSoftware/check-in"
                    title="Check in"
                    blurb="A sign in system to track the people who enter a church for the purposes of resource provisioning and forecasting for events and food"/>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
