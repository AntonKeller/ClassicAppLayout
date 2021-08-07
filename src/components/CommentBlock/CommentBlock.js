import React from 'react'
import styles from './styles/commentBlock.module.css'
import CommentHead from "./supComponents/CommentHead/CommentHead";
import CommentContent from "./supComponents/CommentContent/CommentContent";

export default function CommentBlock() {
    return(
        <div className={styles.comment_block}>
            <CommentHead />
            <CommentContent />
        </div>
    )
}