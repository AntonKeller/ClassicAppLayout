import React from 'react'
import styles from './styles/commentHead.module.css'

export default function CommentHead() {
    return(
        <div className={styles.head}>
            <div className={styles.head_title}>
                Be Part of a Growing International Community
            </div>
            <p className={styles.head_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum nemo aperiam quaerat ratione
                inventore similique et sunt corrupti obcaecati at omnis, sit cum sequi expedita, assumenda nam fugiat
                accusamus!
            </p>
        </div>
    )
}