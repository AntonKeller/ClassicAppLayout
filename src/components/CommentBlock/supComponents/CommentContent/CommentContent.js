import React from 'react'
import styles from './styles/commentContent.module.css'
import CommentItem from "./supComponents/CommentItem/CommentItem";

export default function CommentContent() {
    const peopleComments = [
        {
            title: `One of the Best   title`,
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                   Soluta dolor beatae deserunt praesentium repellat reiciendis!`,
            name: `Grisha Chekov`,
            numImg: 0
        },
        {
            title: `One of the Best   title`,
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor 
                   beatae deserunt praesentium repellat reiciendis!`,
            name: `Grisha Chekov`,
            numImg: 1
        }
    ]

    return(
        <div className={styles.comment_content}>
            {
                peopleComments.map(item => {
                    return(
                        <CommentItem key={[item.text,item.name].join('')}
                                title={item.title}
                                     text={item.text}
                                     name={item.name}
                                     numImg={item.numImg} />
                    )
                })
            }
        </div>
    )
}