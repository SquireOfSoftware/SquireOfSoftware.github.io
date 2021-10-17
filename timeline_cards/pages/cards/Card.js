import styles from '../../styles/Card.module.css'

export default function Card({title, image, blurb, link}) {
  return (
    <>
      <div className={styles.card}>
        <img src={image} className={styles.card__img}/>
        <div className={styles.card__body}>
          <h2>{title}</h2>
          <p>{blurb}</p>
          <a href={link} target="_blank">Read More</a>
        </div>
      </div>
    </>
  )
}