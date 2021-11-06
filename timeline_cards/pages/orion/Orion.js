import React, { useState } from "react";
import styles from '../../styles/Orion.module.css'
import Image from 'next/image'

export default function OrionPage(props) {
  return (
    <>
      <p>
        This was a University Project where we had to get a flight system that could automatically guide a drone through a given path set by a person and take photos of its journey as it flew around.
      </p>
      <p>
        It was a Django Python server with a MySQL DB, an AngularJS web client front end, ROS (Robot Operating System) and some bespoke, modules on the drone to provide additional telemetry data.
      </p>
      <p>
        Our Drone was the Parrot AR Drone 2.0.
      </p>
      <p>
        Here is our architecture diagram.
      </p>
      <Image className={styles.systemDiagram} src="/images/orion/Orion System Design.png" width="100%" height="auto"/>
    </>
  )
}