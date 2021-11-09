import React, { useState } from "react";
import styles from '../../styles/JSPets.module.css'

export default function JSPetsPage(props) {
  return (
    <>
      <p>
        Have you ever played with a Tamagotchi? Well a Digivice, is a similar experience except you can have your
        pet "battle" things and evolve.
      </p>
      <img className={[styles.image, styles.restricted_image].join(" ")} src="/images/jspets/old_digivice.jpg"
        alt="Images sourced from: https://mykombini.com/en/restock-4/19576-digimon-adventure-digivice-vercomplete-bandai-limited-4549660510949.html"/>
      <h3 className={styles.sticky_heading}>The history</h3>
      <p>
        At around 2016, after coming off the back of another project at work, I recall wanting to see if anyone had the
        change to replicate the experience of a Digivice but in web form.
      </p>
      <p>
        And I remember explicitly seeing the boom of web technologies then and wanting to get myself into the guts of
        what was happening at the time with the Javascript standard and the browser advancements that people were making.
      </p>
      <p>
        So I put two and two together and decided that the best way to equip myself with the advancements in Javascript
        and the browser tech, was to see if I could recreate a Digivice experience in a browser.
      </p>
      <h3 className={styles.sticky_heading}>What is this made of?</h3>
      <p>
        It is a 20 by 45 canvas, using the browser animation frames for 60 fps, an infinite game loop with hand crafted
        state objects, and hand drawn MSPaint sprites.
      </p>
      <p>
        There are idle sprites, there are walking sprites, there were damage sprites, evolution sprites, environment
        sprites, wild life sprites.
      </p>
      <img className={[styles.image, styles.pixelated].join(" ")} src="/images/jspets/duck.png" />
      <p>
        Above you can see 3 levels of sprite states, the first is the "basic" baby animal state, and if you wanted to
        you can "evolve" your pet to stronger versions of itself (which would push the sprite pointer down one level,
        a max of three levels) and so you can survive longer.
      </p>
      <p>
        In fact the longest part of this project was the actual generation of the sprites, they took about three months
        to make.
      </p>
      <img className={styles.image} src="/images/jspets/demo.gif"/>
      <h3 className={styles.sticky_heading}>What is the game about?</h3>
      <p>
        The game really is about walking to Port Arthur (bottom right) from Redpa (top left).
      </p>
      <img className={[styles.image, styles.restricted_image].join(" ")} src="/images/jspets/tasmania.png"/>
      <p>
        And here is the map translated into a pixel map of about 45 by 40 pixels
      </p>
      <img className={[styles.image, styles.pixelated, styles.restricted_image].join(" ")} src="/images/jspets/tasmania-45by40 with cities.png"/>
      <p>
        And the game was supposed to use your pedometer so that your little pet can walk with you, but in Tasmania.
      </p>
      <p>
        This was a really good project because with the 20 by 45 pixel limitation I had some very challenging creative decisions
        that I had to make, regarding how to express movement in a very limited space, how to express progress,
        and a little bit of performance (understanding the dev tools throttling mechanism, understanding how to unpack
        the most expensive calls, even though the images that I was drawing were tiny, the animations and transitions
        could seriously kill the browser at the time).
      </p>
      <p>
        For the full demo of the JSPets project, you can access it <a href="https://squireofsoftware.github.io/JSPets/" target="_blank">here</a>.
      </p>
      <p>
        For the source code, you can access it <a href="https://github.com/SquireOfSoftware/JSPets" target="_blank">here</a>.
      </p>
    </>
  )
}