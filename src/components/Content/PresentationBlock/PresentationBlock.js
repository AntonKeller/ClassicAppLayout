import React from 'react'
import styles from './styles/presentation.module.css'

export default function PresentationBlock() {
    return(
        <div className={styles.presentation_block}>
            <div className={styles.logotype}></div>
            <h4 className={styles.title}>
                Presentation
            </h4>
            <p className={styles.subTitle}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, placeat.
            </p>
            <p className={styles.subTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veritatis nihil
                aliquam.
            </p>
        </div>
    )
}