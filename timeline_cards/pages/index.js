import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from './cards/Card'
import {AnimateSharedLayout, motion} from 'framer-motion'
import OrionPage from './content/Orion'
import MainPage from './content/Main'
import JSPetsPage from './content/JSPets'

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

        <div>
          <AnimateSharedLayout>
            <motion.div layout className={styles.grid}>
              <Card link="https://github.com/SquireOfSoftware"
                    title="Main Github page"
                    blurb="For seeing what I have done outside of work."
                    content={(<MainPage />)}/>

              <Card link="https://github.com/SquireOfSoftware/Orion"
                    title="Orion"
                    blurb="An Autonomous Drone Flight system. Aiming to make drone flight autonomous via just highlighting key checkpoints on an iPad"
                    content={(<OrionPage />)}/>

              <Card link="https://squireofsoftware.github.io/JSPets/"
                    title="JSPets"
                    blurb="A digital pet experience, walking around Tasmania"
                    content={(<JSPetsPage />)}/>

              <Card link="https://github.com/SquireOfSoftware/NNFL/tree/master/Project/"
                    title="Hand Gesture Music Player"
                    blurb="Controlling your music player via hand gestures in Matlab with a Neural Network behind it"/>

              <Card link="https://github.com/SquireOfSoftware/check-in"
                    title="Check in"
                    blurb="A sign in system to track the people who enter a church for the purposes of resource provisioning and forecasting for events and food"/>
            </motion.div>
          </AnimateSharedLayout>
        </div>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
