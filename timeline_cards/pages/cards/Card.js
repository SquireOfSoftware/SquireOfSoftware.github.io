import React, { useState } from "react";
import styles from '../../styles/Card.module.css'
import {motion, AnimatePresence} from 'framer-motion'

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
  let timer;
  const openPopup = (event) => {
    // we want to ignore the hyperlink click
    if (event.target.className.indexOf("externalLink") === -1) {
      setIsOpen(true);
      console.log({event})
      const parentDiv = locateParentDiv(event.target);
      setOriginalDimensions(parentDiv);
      // hide the thumbnail card
      parentDiv.style.visibility="hidden"
    }
  }

  const closePopup = () => {
    setIsOpen(false);
    // not the cleanest way to "reopen" a hidden thumbnail card
    if (timer !== undefined) {
      timer.clearTimeout();
    }
    timer = setTimeout(() => {
      console.log('Hello, World!');
      originalDimensions.style.visibility="visible"
    }, 500);
  }

  function locateParentDiv(initialElement) {
    // walk up the tree until you find the "overlay" element
    let parent = initialElement.parentNode
    while(parent.className !== undefined && parent.className.indexOf("overlay") === -1) {
      parent = parent.parentNode;
    }
    return parent
  }

  return (
    <>
        <div
            style={{ pointerEvents: "auto",
                     display: "inline-block"}}
            className={styles.card + " overlay"}
            onClick={openPopup}
          >
            <Content isOpen={isOpen} {...props} />
        </div>
      <AnimatePresence>
        {isOpen && <FullScreenContent
                                  closeHandler={closePopup}
                                  originalDimensions={originalDimensions}
                                  content={props.content}
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
  const imageTag = image !== undefined ? (<img src={image} className={styles.card__img}/>) : undefined;
  return (<motion.div
            animate={{
              display: "block"
            }}
            exit={{
              display: "none"
            }}>
            {imageTag}
            <div className={styles.card__body}>
              <h2>{title}</h2>
              <p>{blurb}</p>
              <a href={link} className="externalLink" target="_blank">Read More</a>
            </div>
          </motion.div>)
}

function FullScreenContent({title, image, blurb, content, link, closeHandler, originalDimensions}) {
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
  const imageTag = image !== undefined ?
        (<img src={image} className={styles.card__img_fullscreen}/>) :
        undefined

  return (<motion.div
                  initial={{
                            width: originalDiv.width,
                            height: originalDiv.height,
                            left: originalDiv.left,
                            top: originalDiv.top - window.pageYOffset,
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
                             borderRadius: "0px"
                             }}
                  exit={{
                          width: originalDiv.width,
                          height: originalDiv.height,
                          left: originalDiv.left,
                          top: originalDiv.top,
                          position: "absolute",
                          border: "1px solid #eaeaea",
                          borderRadius: "10px"
                          }}
                  className={styles.card__fullscreen}
                  onClick={closeHandler}
                >
              {imageTag}
              <motion.div
                  initial={{
                    width: originalDiv.width
                  }}
                  exit={{
                    width: originalDiv.width
                  }}
                  className={styles.card__body + " " + styles.card__body_fullscreen}>
                <h2>{title}</h2>
                <motion.p
                    initial={{
                      display: "none"
                    }}
                    exit={{
                      display: "block"
                    }}
                    >{blurb}</motion.p>
                <motion.div
                    layout
                    initial={{
                      display: "none"
                    }}
                    animate={{
                      display: "block"
                    }}
                    exit={{
                      display: "none"
                    }}
                >{content}</motion.div>
                <motion.a
                    initial={{
                      display: "none"
                    }}
                    exit={{
                      display: "block"
                    }}
                    href={link} target="_blank">
                    Read More
                </motion.a>
              </motion.div>
            </motion.div>)
}