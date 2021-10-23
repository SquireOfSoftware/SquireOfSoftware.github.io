import React, { useState, useRef } from "react";
import styles from '../../styles/Card.module.css'
import {motion, AnimatePresence} from 'framer-motion'

// tutorial: https://www.geeksforgeeks.org/animated-expanding-card-using-framer-motion-and-reactjs/
// seems to be out dated
// recreate this https://www.framer.com/docs/animate-shared-layout/

const cardVariants = {
  shown: {
    opacity: "100%"
  },
  hidden: {
    opacity: "0%"
  }
}

export default function Card(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [originalDimensions, setOriginalDimensions] = useState(null);
  const toggleOpen = (event) => {
    setIsOpen(!isOpen);
    const parentDiv = locateParentDiv(event.target);
    setOriginalDimensions(parentDiv);
  }

  function locateParentDiv(initialElement) {
    // walk up the tree until you find the "overlay" element
    let parent = initialElement.parentNode
    while(parent.className !== undefined && parent.className.indexOf("overlay") === -1) {
      parent = parent.parentNode;
    }
    console.log({parent})
    return parent
  }

  return (
    <>
      <div
              style={{ pointerEvents: "auto", display: "inline-block" }}
              className={styles.card + " overlay"}
              onClick={toggleOpen}
            >
            <Content {...props} />
      </div>
      <AnimatePresence>{isOpen && <FullScreenContent
                                  closeHandler={() => setIsOpen(false)}
                                  originalDimensions={originalDimensions}
                                  {...props}/>
                        }
      </AnimatePresence>
    </>
  )
}

function Summary(props) {
  return (
    <div>Hello world</div>
  )
}

function Content({title, image, blurb, link}) {
  return (<>
            <img src={image} className={styles.card__img}/>
            <div className={styles.card__body}>
              <h2>{title}</h2>
              <p>{blurb}</p>
              <a href={link} target="_blank">Read More</a>
            </div>
          </>)
}

function FullScreenContent({title, image, blurb, link, closeHandler, originalDimensions}) {
  const originalDiv = {
                          left: originalDimensions.offsetLeft,
                          top: originalDimensions.offsetTop,
                          height: originalDimensions.offsetHeight,
                          width: originalDimensions.offsetWidth,
                          scrollTop: originalDimensions.scrollHeight,
                          pageOffset: window.pageYOffset,
                          exitOffset: window.pageYOffset
                        };
  console.log({originalDiv})
  return (<motion.div
                  initial={{
                             width: originalDiv.width,
                             height: originalDiv.height,
                             left: originalDiv.left,
                             top: originalDiv.top + window.pageYOffset,
                             position: "absolute",
                            border: "1px solid #eaeaea",
                            borderRadius: "10px"
                            }}
                  animate={{
                             width: "100%",
                             height: "100%",
                             position: "fixed",
                             left: 0,
                             top: 0,
                             border: 0,
                             }}
                  exit={{
                          width: originalDiv.width,
                          height: originalDiv.height,
                          left: originalDiv.left,
                          top: originalDiv.top,
                          position: "absolute",
                          border: "1px solid #eaeaea",
                          }}
                  className={styles.card__fullscreen}
                  onClick={closeHandler}
                >
              <img src={image} className={styles.card__img_fullscreen}/>
              <div className={styles.card__body}>
                <h2>{title}</h2>
                <p>{blurb}</p>
                <a href={link} target="_blank">Read More</a>
              </div>
            </motion.div>)
}