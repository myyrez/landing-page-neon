import React, { useState } from 'react';
import styles from './styles.module.css';
import video from '../../assets/images/mirrorVideo.mp4'
import astronaut from '../../assets/images/astronaut2.jpg'
import spaceStation from '../../assets/images/spaceStation.jpg'
import { ImPlay3 } from 'react-icons/im'

export const Home = () => {
    return (
        <div className={styles.mainContainer}>
            <video className={styles.videoBG} src={video} autoPlay muted loop playsInline/>

            <div className={styles.subContainer}>
                <div className={styles.navbar}>

                </div>
                <div className={styles.banner}>
                    <div>
                        <h1 className={styles.title}>Mirror.</h1>
                        <p className={styles.subTitle}>Experiencie o outro lado.</p>
                    </div>
                    <div className={styles.imagesContainerWrapper}>
                        <div className={styles.imagesContainer}>
                            <img className={styles.img1} src={astronaut}></img>
                            <div className={styles.textBox}>
                                <p className={styles.img1Text}>Nosso programa espacial tem como objetivo viajar entre dimensões para encontrar novas formas de vida.</p>
                                <a className={styles.joinButton}>
                                    Junte-se a nós.
                                    <div className={styles.buttonBorder}>
                                        <span className={styles.topLeft}></span>
                                        <span className={styles.topRight}></span>
                                        <span className={styles.bottomLeft}></span>
                                        <span className={styles.bottomRight}></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.imagesContainer}>
                            <img className={styles.img1} src={spaceStation}></img>
                            <div className={styles.textBox}>
                                <p className={styles.img1Text}>Apresentamos nossa mais nova Estação Espacial, Ishimura-02</p>
                                <a className={styles.watchButton}>
                                    <span className={styles.polygon}><ImPlay3/></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}