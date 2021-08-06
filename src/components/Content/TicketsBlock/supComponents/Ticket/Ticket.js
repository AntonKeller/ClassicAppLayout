import React from 'react'
import styles from './styles/ticket.module.css'

export default function Ticket({stickerName, contentTitle, description, progressValue,
                                   progressMax, day, dropBtnText, numImg}) {

    const sImg = [
        styles.img_1,
        styles.img_2,
        styles.img_3
    ]

    return(
        <div className={styles.ticket}>
            <div className={styles.banner}>
                <span className={styles.sticker} />
                <div className={`${sImg[numImg]} ${styles.img_ticket}`} />
                <div className={styles.sticker_2}>
                    {stickerName}
                </div>
            </div>

            <div className={styles.content}>
                <h5 className={styles.content_title}>
                    {contentTitle}
                </h5>
                <p className={styles.description}>
                    {description}
                </p>
                <div>
                    <progress className={styles.progress_bar}
                              value={progressValue}
                              max={progressMax} />
                    <div className={styles.load_status_block}>
                        <p>{progressValue}%</p>
                        <p>{day}</p>
                    </div>
                </div>
                <div className={styles.line} />
                <div className={styles.drop_btn}>{dropBtnText}</div>
            </div>
        </div>
    )
}