import React, { useState } from 'react';
import styles from './styles.module.css';
import video from '../../assets/images/mirrorVideo.mp4'
import astronaut from '../../assets/images/astronaut2.jpg'
import spaceStation from '../../assets/images/spaceStation.jpg'
import spaceship from '../../assets/images/spaceship.jpg'
import galaxia from '../../assets/images/galaxia.jpg'
import alienLifeform from '../../assets/images/alienLifeform2.jpg'
import futuristicBackground from '../../assets/images/futuristicBackground3.jpg'
import futuristicBackground2 from '../../assets/images/futuristicBackground5.jpg'
import futuristicBackground3 from '../../assets/images/futuristicBackground1.jpg'
import { ImPlay3 } from 'react-icons/im'
import { BiChevronRight } from 'react-icons/bi'
import { BsChevronCompactDown } from 'react-icons/bs'

export const Home = () => {
    return (
        <div className={styles.mainContainer}>

            <video className={styles.videoBG} src={video} autoPlay muted loop playsInline/>

            <div className={styles.subContainer}>
                <div className={styles.banner}>
                    <div className={styles.navbar}></div>
                    <div className={styles.titleWrap}>
                        <h1 className={styles.title}>Mirror.</h1>
                        <p className={styles.subTitle}>Experiencie o outro lado.</p>
                    </div>
                    <div className={styles.imagesContainerWrapper}>
                        <div className={styles.imagesContainer}>
                            <img className={styles.img1} src={astronaut}></img>
                            <div className={styles.textBox}>
                                <p className={styles.img1Text}>Nosso programa espacial tem como objetivo viajar entre dimensões para encontrar novas formas de vida.</p>
                                <a className={styles.joinButton}>
                                    Junte-se a nós
                                    <div className={styles.buttonBorder}>
                                        <span className={styles.topLeft}></span>
                                        <span className={styles.topRight}></span>
                                        <span className={styles.bottomLeft}></span>
                                        <span className={styles.bottomRight}></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={styles.chevron}><BsChevronCompactDown/></div>
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
            <div className={styles.pageScroll}>
                <div className={styles.part1}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoCardFrame}>
                            <span className={styles.topLeftCard}></span>
                            <span className={styles.topRightCard}></span>
                            <span className={styles.bottomLeftCard}></span>
                            <span className={styles.bottomRightCard}></span>
                            <h1 className={styles.teste}>Placeholder</h1>
                            <p className={styles.teste}>oi</p>
                            <p className={styles.teste}>oi</p>
                            <p className={styles.teste}>oi</p>
                            <p className={styles.teste}>oi</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <span className={styles.decoLines}></span>
                        <span className={styles.decoLines} style={{transform: 'scaleX(-1)'}}></span>
                    </div>
                </div>
                <div className={styles.loading}>
                    <h1>Catálogo de formas de vida recém-descobertas</h1>
                </div>
                <div className={styles.cardsCarousel}>
                    <span className={styles.topLeftCard}></span>
                    <span className={styles.topRightCard}></span>
                    <span className={styles.bottomLeftCard}></span>
                    <span className={styles.bottomRightCard}></span>
                    <div className={styles.itemWrap}>
                        <img className={styles.carouselItem} src={spaceship}></img>
                        <p className={styles.itemText}>Modelos de estações espaciais</p>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <a className={styles.itemButton}>Conferir <BiChevronRight className={styles.itemChevron}/></a>
                            <span className={styles.itemLine}></span>
                        </div>
                    </div>
                    <div className={styles.itemWrap}>
                        <img className={styles.carouselItem} src={futuristicBackground2}></img>
                        <p className={styles.itemText}>Instalações em outros planetas</p>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <a className={styles.itemButton}>Conferir <BiChevronRight className={styles.itemChevron}/></a>
                            <span className={styles.itemLine}></span>
                        </div>
                    </div>
                    <div className={styles.itemWrap}>
                        <img className={styles.carouselItem} src={galaxia}></img>
                        <p className={styles.itemText}>Galáxias recém-descobertas</p>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <a className={styles.itemButton}>Conferir <BiChevronRight className={styles.itemChevron}/></a>
                            <span className={styles.itemLine}></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}