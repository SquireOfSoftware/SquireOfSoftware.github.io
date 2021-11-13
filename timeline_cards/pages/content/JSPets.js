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
        I didn't find many attempts so I thought I would have a go at it myself.
      </p>
      <p>
        I also thought that this was a good chance for me to dig deep into the Javascript standard whilst the web tech
        advancements were starting to take off.
      </p>
      <p>
        It took me like 4 months, to both write up my own sprite rendering engine, but also to draw up all the content
        for the game. In it's current state it is about 75% done.
      </p>
      <p>
        Originally it was to hook into the pedometer so that your pet could walk with you as you walked. But that never
        got done.
      </p>
      <p>
        But as it currently stands, you can tap the screen to walk your pet, and each town/city has a mini-boss that
        your pet will have to battle. And at the very end at Port Arthur, you will face off a really cool end boss.
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
        I have rerigged the sprite and state transitions below, so have a go at mousing over them and watch them
        animate.
      </p>
      <div className={styles.sprite_map_container}>
        <div className={styles.duckling}>
        </div>
        <div className={styles.older_duckling}>
        </div>
        <div className={styles.duck}>
        </div>
      </div>
      <p>
        In fact the longest part of this project was the actual generation of the sprites, they took about three months
        to make.
      </p>
      <p>
        Here is a quick gif compilation of all the types of sprites that I drew up for the game:
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
        And you tap the screen to walk your little pet around Tasmania.
      </p>
      <p>
        This was a really good project because I had to work within the 20 by 45 pixel limitation, and it was precisely
        because of this limitation I had to make some very challenging creative decisions, regarding how to express
        movement in a very limited space, how to express game progress and how to randomly generate enemies to fight,
        as well a little bit of performance tuning (understanding the dev tools throttling mechanism, understanding
        how to unpack the most expensive calls, even though the images that I was drawing were tiny, some of the
        animations and transitions could seriously kill the performance).
      </p>
      <p>
        I also learnt an incredible amount about Tasmania, as each city had an overlap of biomes and climate like
        beaches or mountainous areas or forestry or urban cities, which I used to spawn enemies that were specific
        to the different biomes and climates...like a finding a rare and endangered fridge on Cradle mountain.
      </p>
      <div className={styles.sprite_map_container}>
        <div className={[styles.fridge, styles.sprite].join(" ")}>
        </div>
      </div>
      <p>
        For the full demo of the JSPets project, you can access it <a href="https://squireofsoftware.github.io/JSPets/" target="_blank">here</a>.
      </p>
      <p>
        For the source code, you can access it <a href="https://github.com/SquireOfSoftware/JSPets" target="_blank">here</a>.
      </p>
    </>
  )
}