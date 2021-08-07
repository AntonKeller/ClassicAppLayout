import React from 'react'
import styles from './styles/commentItem.module.css'

export default function CommentItem({title, text, name, numImg}) {
    let stPhotos = [styles.img_1, styles.img_2]
    return(
        <div className={styles.item}>
            <div className={styles.message}>
                <div className={styles.message_title}>{title}</div>
                <div className={styles.message_text}>{text}</div>
            </div>
            <div className={styles.man}>
                <div className={`${styles.man_img} ${stPhotos[numImg]}`} />
                <div className={styles.name}>{name}</div>
            </div>
        </div>
    )
}