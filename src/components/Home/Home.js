import React, { useState } from 'react';
import styles from './styles.module.css';
import video from '../../assets/images/mirrorVideo.mp4'
import astronaut1 from '../../assets/images/astronaut1.jpg'

export const Home = () => {
    return (
        <div className={styles.mainContainer}>
            <video className={styles.videoBG} src={video} autoPlay muted loop playsInline/>

            <div className={styles.subContainer}>
                <div className={styles.navbar}>

                </div>
                <div className={styles.banner}>
                    <h1 className={styles.title}>Mirror.</h1>
                    <p className={styles.subTitle}>Experiencie o outro lado.</p>
                    {/* <img className={styles.img1} src={astronaut1}></img> */}
                </div>
            </div>
        </div>
    )
}