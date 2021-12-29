import React from "react";
import styles from '../../styles/Main.module.css'

export default function MainPage(props) {
  return (
    <>
      <p>
        This is my second attempt at building a website.
      </p>
      <p>
        My first attempt was trying to replicate the Facebook messenger theme with just CSS. You can see it <a href="./archived/v1/index.html" target="_blank">here</a>.
      </p>
      <img className={styles.image} src="images/github/archived_site.png"/>
      <p>
        My second attempt was trying to see what prebuilt frameworks were available. I ended up landing on NextJS and Framer Motion to build this.
      </p>
      <img className={styles.image} src="images/github/site_gif.gif"/>
      <p>
        Source code is <a href="https://github.com/SquireOfSoftware/SquireOfSoftware.github.io" target="_blank">here</a>.
      </p>
    </>
  )
}