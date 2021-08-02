import React from 'react'
import styles from './styles/navBar.module.css'

export default function NavBar() {
    return(
        <nav className={styles.nav_bar}>
            <div className={styles.container_logo}>
                <div className={styles.logo}></div>
            </div>
            <div className={styles.container_links}>
                <div className={styles.links}>
                    <a href="#" className={styles.item}>home</a>
                    <a href="#" className={styles.item}>how it works</a>
                    <a href="#" className={styles.item}>discover a project</a>
                    <a href="#" className={styles.item}>blog</a>
                    <a href="#" className={styles.item}>find out more</a>
                </div>
            </div>
            <div className={styles.container_login}>
                <div className={styles.login}>Login</div>
            </div>
        </nav>
    )
}



// import React from 'react'
// import styles from './styles/navPanel.module.css'
// // import {Link} from 'react-router-dom'
//
// const links = [
//     'home',
//     'how it works',
//     'discover a project',
//     'blog',
//     'find out more'
// ]
//
// export default function NavBar() {
//     return(
//         <header className={styles.header}>
//             <div className={styles.logo}></div>
//             <div className={styles.nav}>
//                 {
//                     links.map(item =>{
//                         return(
//                             <a key={item} href="#" className={styles.nav__link}>{item}</a>
//                         )
//                     })
//                 }
//             </div>
//             <div className={styles.login}>Login</div>
//         </header>
//     )
// }