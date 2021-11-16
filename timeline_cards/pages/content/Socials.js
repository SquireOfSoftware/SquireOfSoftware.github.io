import React, { useState } from "react";
import styles from '../../styles/Socials.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function SocialButtons(props) {
  return (
    <div className={styles.social_button_container}>
      <a className={styles.social_button}
      href="mailto:joseph.zq.tran@gmail.com" title="Hello world from Github Joseph!">
        <FontAwesomeIcon icon={faEnvelope}/>
      </a>
      <a className={styles.social_button}
       href="https://au.linkedin.com/in/joseph-tran-17a30b4b" target="_blank">
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a className={styles.social_button}
      href="https://github.com/SquireOfSoftware" target="_blank">
        <FontAwesomeIcon icon={faGithub}/>
      </a>
    </div>
  )
}