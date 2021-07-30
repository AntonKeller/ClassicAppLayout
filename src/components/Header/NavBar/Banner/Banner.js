import React from 'react'

function Banner() {
    return(
        <div className="banner_container">
            <div className="banner">
                <h1 className="main__title">Big title at banner</h1>
                <h4 className="main__unTitle">mini title</h4>
                <div className="main__btn">Become a Member</div>
                <div className="container_btn">
                    <div className="left_nav_btn"></div>
                    <div className="right_nav_btn"></div>
                </div>
            </div>
        </div>
    )
}