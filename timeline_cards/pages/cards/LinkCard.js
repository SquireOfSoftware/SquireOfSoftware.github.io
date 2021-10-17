import styles from '../../styles/LinkCard.module.css'

export default function Card({title, image, blurb, link}) {
  return (
    <>
      <a href={link} className={styles.card} target="_blank">
        <img src={image}/>
        <h2>{title}</h2>
        <p>{blurb}</p>
      </a>
    </>
  )
}