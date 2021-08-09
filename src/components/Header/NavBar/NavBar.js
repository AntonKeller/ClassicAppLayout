import React from 'react'
import styles from './styles/navBar.module.css'

export default function NavBar() {

    let dataLinks = [
        {link_name: 'home', link_href: '/home'},
        {link_name: 'how it works', link_href: '/works'},
        {link_name: 'discover a project', link_href: '/project'},
        {link_name: 'blog', link_href: '/blog'},
        {link_name: 'find out more', link_href: '/findMore'},
    ]

    return(
        <nav className={styles.nav_bar}>
            <div className={styles.drop_btn}></div>
            <div className={styles.logo} />
            <div className={styles.links}>
                {
                    dataLinks.map(item => {
                        return(
                            <a href={item.link_href} className={styles.item}>
                                {item.link_name}
                            </a>
                        )
                    })
                }
            </div>

            <div className={styles.login}>
                <span className={styles.logSp}>Login</span>
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