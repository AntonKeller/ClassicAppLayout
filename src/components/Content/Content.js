import React from 'react'

import styles from './styles/content.module.css'
import PresentationBlock from "./PresentationBlock/PresentationBlock";
import TabsMenu from "./TabsMenu/TabsMenu";
import TabContent from "./TabContent/TabContent";

export default function Content() {
    return(
        <article className={styles.content}>
            <PresentationBlock />
            <TabsMenu />
            <TabContent />
        </article>
    )
}