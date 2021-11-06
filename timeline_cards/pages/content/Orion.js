import React, { useState } from "react";
import styles from '../../styles/Orion.module.css'

export default function OrionPage(props) {
  return (
    <>
      <p>
        This was a University Project where we had to get a flight system that could automatically guide a drone through a given path set by a person and take photos of its journey as it flew around.
      </p>
      <h3 className={styles.stickyHeading}>What was this built with?</h3>
      <p>
        It was a Django Python server with a MySQL DB, an AngularJS web client front end, ROS (Robot Operating System) and some bespoke, modules on the drone to provide additional telemetry data.
      </p>
      <p>
        Our Drone was the Parrot AR Drone 2.0.
      </p>
      <h3 className={styles.stickyHeading}>What was architecture of this project?</h3>
      <p>
        Here is our architecture diagram:
      </p>
      <img className={styles.systemDiagram} src="/images/orion/Orion System Design.png"/>
      <p>
        A user would interact with our system via a web client of some sort, this would route over to a webpage that would look something like this:
      </p>
      <img className={styles.systemDiagram} src="/images/orion/Homepage.png"/>
      <p>
        A user would then create a "mission", complete with all the pit stops that the drone would need to make:
      </p>
      <img className={styles.systemDiagram} src="/images/orion/FilledInMission.png"/>
      <p>
        The system would then go into the database and figure out how to get to these points given the telemetry data from the drone and direct the drone to where it would need to go.
      </p>
      <p>
        The drone flight path used the dead reckoning algorithm, given that GPS was far too inaccurate for our needs and attaching a phone would prevent the drone from taking off due to the weight limit, see our prior attempts with just adding simple ultrasonic sensors here:
      </p>
      <iframe className={styles.embeddedVideo} width="560" height="560" src="https://www.youtube.com/embed/f0Sk-_4wVZo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <p>
        The ultrasonic sensors were used to enhance its spatial "awareness", given that we had a net around the space, we would use that to determine our rough coordinate system and fly the drone appropriately within the boundaries.
      </p>
      <p>
        And as the drone flew it would constant dump pictures out which were written straight into the database. And the web client would constantly poll for new images and display them appropriately:
      </p>
      <img className={styles.systemDiagram} src="/images/orion/Gallery.png"/>
      <h3 className={styles.stickyHeading}>What was your role with this?</h3>
      <p>
        I was the project lead on the project, heading up 24 other individuals who helped make this a reality.
      </p>
      <p>
        I also helped in the development of front end, the MySQL database as well as wiring up the ORM (Object Relational Mapping) for Django to talk to the MySQL to pull data out.
      </p>
      <p>
        For the source code on the Orion project, you can access it <a href="https://github.com/SquireOfSoftware/Orion" target="_blank">here.</a>
      </p>
      <p>
        For the full set of videos that we recorded on this project you can have a watch here:
      </p>
      <iframe className={styles.embeddedVideo} width="560" height="400" src="https://www.youtube.com/embed/videoseries?list=PLFE1soEirSeYSN21s1mMcTJl_1ayu5DAi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <p>
        Apologies on the audio quality (we were poor uni students :P).
      </p>
    </>
  )
}