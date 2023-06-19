import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import video from '../../assets/images/mirrorVideo.mp4'
import astronaut from '../../assets/images/astronaut2.jpg'
import spaceStation from '../../assets/images/spaceStation.jpg'
import spaceship from '../../assets/images/spaceship.jpg'
import galaxia from '../../assets/images/galaxia.jpg'
import alienLifeform from '../../assets/images/alienLifeform2.jpg'
import planet from '../../assets/images/planet.jpg'
import futuristicBackground2 from '../../assets/images/futuristicBackground5.jpg'
import futuristicBackground3 from '../../assets/images/futuristicBackground1.jpg'
import { ImPlay3 } from 'react-icons/im'
import { BiChevronRight } from 'react-icons/bi'
import { BsChevronCompactDown } from 'react-icons/bs'

export const Home = () => {

    const cardSelect = (e) => {
        switch(e.target.id) {
            case 'estacao':
                document.getElementById('conferirEstacao').style.marginLeft = '.5rem'
                document.getElementById('lineEstacao').style.width = '100%'
                break;
            case 'instalacao':
                document.getElementById('conferirInstalacao').style.marginLeft = '.5rem'
                document.getElementById('lineInstalacao').style.width = '100%'
                break;
            case 'galaxia':
                document.getElementById('conferirGalaxia').style.marginLeft = '.5rem'
                document.getElementById('lineGalaxia').style.width = '100%'
                break
        }
    }

    const cardDeselect = () => {
        document.getElementById('conferirEstacao').style.marginLeft = '0rem'
        document.getElementById('conferirInstalacao').style.marginLeft = '0rem'
        document.getElementById('conferirGalaxia').style.marginLeft = '0rem'
        document.getElementById('lineEstacao').style.width = '20%'
        document.getElementById('lineInstalacao').style.width = '20%'
        document.getElementById('lineGalaxia').style.width = '20%'
    }

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
                                <p className={styles.img1Text}>Nosso programa espacial tem como objetivo viajar o vasto universo e catalogar descobertas.</p>
                                <a className={styles.joinButton}>
                                    Saiba mais
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
                    <div style={{display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%'}}>
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
                        <span className={styles.decoLines}></span>
                        <span className={styles.decoLines} style={{transform: 'scaleX(-1)'}}></span>
                        <span className={styles.decoLines2} style={{transform: 'scaleY(-1)'}}></span>
                        <span className={styles.decoLines2} style={{transform: 'rotate(-90deg)'}}></span>
                    </div>
                </div>
                <div className={styles.loading}>
                    <div className={styles.console}>
                        <span className={styles.topLeftCard}></span>
                        <span className={styles.topRightCard}></span>
                        <span className={styles.bottomLeftCard}></span>
                        <span className={styles.bottomRightCard}></span>
                        <div className={styles.consoleBackground}>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#74d5d6'}}>Programas corrompidos: 0</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>instalando [CONFIDENCIAL] em 1 segundo(s)</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>[CONFIDENCIAL] instalado com sucesso</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>Checando arquivos maliciosos...</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>47 ARQUIVOS CORROMPIDOS FORAM DETECTADOS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>[ERRO] DISPOSITIVO COMPROMETIDO</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>INICIANDO MEDIDA PROTETIVA</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>19 PROGRAMAS DESCARTADOS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>28 AMEAÇAS ELIMINADAS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>Analisando sistema...</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#74d5d6'}}>Programas corrompidos: 0</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>instalando [CONFIDENCIAL] em 1 segundo(s)</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>[CONFIDENCIAL] instalado com sucesso</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>Checando arquivos maliciosos...</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>47 ARQUIVOS CORROMPIDOS FORAM DETECTADOS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>[ERRO] DISPOSITIVO COMPROMETIDO</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage} style={{color: '#ff6262'}}>INICIANDO MEDIDA PROTETIVA</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>19 PROGRAMAS DESCARTADOS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>28 AMEAÇAS ELIMINADAS</p></span>
                            <span className={styles.logText}><p className={styles.logDate}>2099-09-26:</p> <p className={styles.logMessage}>Analisando sistema...</p></span>
                        </div>
                    </div>
                    <div className={styles.logSide}>
                        <span className={styles.decoLines3} style={{top: '0', right: '0'}}></span>
                        <span className={styles.decoLines3} style={{top: '0', right: '0', transform: 'rotate(-90deg)'}}></span>
                        <span className={styles.decoLines3} style={{bottom: '0', left: '0'}}></span>
                        <span className={styles.decoLines3} style={{bottom: '0', left: '0', transform: 'rotate(-90deg)'}}></span>
                        <h1 className={styles.logHeader}>Nossas estações utilizam tecnologia de ponta</h1>
                        <p className={styles.img2Text}>Preocupações com navegação e manuseio de arquivos são quase inexistentes! No atual momento, diversas estações estão equipadas com inteligências artifiais capazes de conduzir tripulantes e resolver a grande maioria de problemas.</p>
                    </div>
                </div>
                <div className={styles.cardsCarousel}>
                    <span className={styles.topLeftCard}></span>
                    <span className={styles.topRightCard}></span>
                    <span className={styles.bottomLeftCard}></span>
                    <span className={styles.bottomRightCard}></span>
                    <h1 className={styles.logHeader} style={{marginBlock: '2rem'}}>Últimas notícias</h1>
                    <div style={{display: 'flex'}}>
                        <div className={styles.itemWrap} onMouseOver={cardSelect} onMouseLeave={cardDeselect}>
                            <img className={styles.carouselItem} src={spaceship}></img>
                            <p className={styles.itemText}>Modelos de estações espaciais</p>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <a className={styles.itemButton}>Conferir <BiChevronRight id='conferirEstacao' className={styles.itemChevron}/></a>
                                <span id='lineEstacao' className={styles.itemLine}></span>
                            </div>
                            <div id='estacao' className={styles.filler}></div>
                        </div>
                        <div className={styles.itemWrap} onMouseOver={cardSelect} onMouseLeave={cardDeselect}>
                            <img className={styles.carouselItem} src={futuristicBackground2}></img>
                            <p className={styles.itemText}>Instalações em outros planetas</p>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <a className={styles.itemButton}>Conferir <BiChevronRight id='conferirInstalacao' className={styles.itemChevron}/></a>
                                <span id='lineInstalacao' className={styles.itemLine}></span>
                            </div>
                            <div id='instalacao' className={styles.filler}></div>
                        </div>
                        <div className={styles.itemWrap} onMouseOver={cardSelect} onMouseLeave={cardDeselect}>
                            <img className={styles.carouselItem} src={galaxia}></img>
                            <p className={styles.itemText}>Galáxias recém-descobertas</p>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <a className={styles.itemButton}>Conferir <BiChevronRight id='conferirGalaxia' className={styles.itemChevron}/></a>
                                <span id='lineGalaxia' className={styles.itemLine}></span>
                            </div>
                            <div id='galaxia' className={styles.filler}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}