import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from './cards/Card'
import {AnimateSharedLayout, motion} from 'framer-motion'
import OrionPage from './orion/Orion'
import content from './api/content'

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
              <Card link={content.github.thumbnail.link}
                    title={content.github.thumbnail.title}
                    blurb={content.github.thumbnail.blurb}
                    image={content.github.thumbnail.image}
                    content={content.github.pages.content}/>

              <Card link={content.orion.thumbnail.link}
                    title={content.orion.thumbnail.title}
                    blurb={content.orion.thumbnail.blurb}
                    image={content.orion.thumbnail.image}
                    content={(<OrionPage />)}/>

              <Card link="https://squireofsoftware.github.io/JSPets/"
                        title="JSPets"
                        blurb="A digital pet experience, walking around Tasmania"/>

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
