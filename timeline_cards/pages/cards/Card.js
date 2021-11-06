import React, { useState } from "react";
import styles from '../../styles/Card.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
      console.debug({event})
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
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
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
  return (<>
            {imageTag}
            <div className={styles.card__body}>
              <h2>{title}</h2>
              <p>{blurb}</p>
              <a href={link} className="externalLink" target="_blank">Read More</a>
            </div>
          </>)
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
  console.debug({originalDiv})
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
                >
              {imageTag}
              <motion.div
                initial={{
                  top: "-10em",
                  transition:{
                    delay: 5
                  }
                }}
                animate={{
                  top: "-3em"
                }}
                exit={{
                  top: "-10em",
                  transition: {
                    delay: 0
                  }
                }}
                className={styles.card__close_fullscreen}
                onClick={closeHandler}
                >
                <FontAwesomeIcon
                  icon={faTimes}
                  className={styles.card__close_symbol}
                />
              </motion.div>
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
                className={styles.card__body + " " + styles.card__body_fullscreen}
                >
                <h2>
                  {title}
                </h2>
                <div>
                  {content}
                </div>
              </motion.div>
              <motion.div
                  initial={{
                    width: originalDiv.width,
                    display: "none"
                  }}
                  exit={{
                    width: originalDiv.width,
                    display: "block",
                    transition: {
                      type: "tween"
                    }
                  }}
                  className={styles.card__body + " " + styles.card__body_fullscreen}>
                <h2>{title}</h2>
                <p>{blurb}</p>
                <a href={link} target="_blank">
                    Read More
                </a>
              </motion.div>
            </motion.div>)
}