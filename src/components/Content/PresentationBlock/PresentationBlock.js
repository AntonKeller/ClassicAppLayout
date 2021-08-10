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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci aliquid explicabo facilis labore porro rem rerum, ut voluptatem?
                A corporis illo minus mollitia odio quasi sed temporibus, tenetur totam unde.
            </p>
        </div>
    )
}